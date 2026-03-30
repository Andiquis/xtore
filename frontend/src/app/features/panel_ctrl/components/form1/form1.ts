import { Component, Input, Output, EventEmitter, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

// ─── Interfaces ────────────────────────────────────────────────
export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'file'
  | 'color'
  | 'range';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern' | 'email' | 'custom';
  value?: any;
  message: string;
  validator?: (value: any, model: any) => boolean;
}

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  hint?: string;
  icon?: string;
  prefix?: string;
  suffix?: string;
  options?: SelectOption[];
  validations?: ValidationRule[];
  disabled?: boolean;
  readonly?: boolean;
  hidden?: boolean;
  defaultValue?: any;
  width?: 'full' | 'half' | 'third' | 'quarter';
  rows?: number; // Para textarea
  min?: number;
  max?: number;
  step?: number;
  accept?: string; // Para file input
  multiple?: boolean; // Para select/file
  autocomplete?: string;
  dependsOn?: {
    field: string;
    condition: (value: any) => boolean;
  };
}

export interface FormConfig {
  title?: string;
  subtitle?: string;
  layout?: 'vertical' | 'horizontal' | 'inline';
  columns?: 1 | 2 | 3 | 4;
  showReset?: boolean;
  submitLabel?: string;
  resetLabel?: string;
  submitIcon?: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'floating' | 'outlined' | 'filled';
}

export interface FormErrors {
  [fieldName: string]: string[];
}

// ─── Component ─────────────────────────────────────────────────
@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form1.html',
  styleUrl: './form1.scss',
})
export class Form1 implements OnInit {
  // ─── Inputs ────────────────────────────────────────────────────
  @Input() fields: FormField[] = [];
  @Input() model: Record<string, any> = {};
  @Input() config: FormConfig = {};

  // ─── Outputs ───────────────────────────────────────────────────
  @Output() submitForm = new EventEmitter<Record<string, any>>();
  @Output() resetForm = new EventEmitter<void>();
  @Output() valueChange = new EventEmitter<{ field: string; value: any }>();
  @Output() validationChange = new EventEmitter<{ valid: boolean; errors: FormErrors }>();

  // ─── State ─────────────────────────────────────────────────────
  errors = signal<FormErrors>({});
  touched = signal<Set<string>>(new Set());
  focused = signal<string | null>(null);

  // ─── Computed ──────────────────────────────────────────────────
  isValid = computed(() => {
    const currentErrors = this.errors();
    return Object.keys(currentErrors).every((key) => currentErrors[key].length === 0);
  });

  visibleFields = computed(() => {
    return this.fields.filter((field) => {
      if (field.hidden) return false;
      if (field.dependsOn) {
        return field.dependsOn.condition(this.model[field.dependsOn.field]);
      }
      return true;
    });
  });

  // ─── Lifecycle ─────────────────────────────────────────────────
  ngOnInit(): void {
    // Configuración por defecto
    this.config = {
      layout: 'vertical',
      columns: 2,
      showReset: true,
      submitLabel: 'Guardar',
      resetLabel: 'Limpiar',
      submitIcon: '💾',
      variant: 'floating',
      ...this.config,
    };

    // Inicializar valores por defecto
    this.fields.forEach((field) => {
      if (field.defaultValue !== undefined && this.model[field.name] === undefined) {
        this.model[field.name] = field.defaultValue;
      }
    });

    // Validar inicialmente
    this.validateAll();
  }

  // ─── Validation ────────────────────────────────────────────────
  validateField(field: FormField): string[] {
    const value = this.model[field.name];
    const fieldErrors: string[] = [];

    if (!field.validations) return fieldErrors;

    for (const rule of field.validations) {
      switch (rule.type) {
        case 'required':
          if (
            value === undefined ||
            value === null ||
            value === '' ||
            (Array.isArray(value) && value.length === 0)
          ) {
            fieldErrors.push(rule.message);
          }
          break;

        case 'minLength':
          if (value && value.length < rule.value) {
            fieldErrors.push(rule.message);
          }
          break;

        case 'maxLength':
          if (value && value.length > rule.value) {
            fieldErrors.push(rule.message);
          }
          break;

        case 'min':
          if (value !== undefined && value !== null && Number(value) < rule.value) {
            fieldErrors.push(rule.message);
          }
          break;

        case 'max':
          if (value !== undefined && value !== null && Number(value) > rule.value) {
            fieldErrors.push(rule.message);
          }
          break;

        case 'pattern':
          if (value && !new RegExp(rule.value).test(value)) {
            fieldErrors.push(rule.message);
          }
          break;

        case 'email':
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (value && !emailPattern.test(value)) {
            fieldErrors.push(rule.message);
          }
          break;

        case 'custom':
          if (rule.validator && !rule.validator(value, this.model)) {
            fieldErrors.push(rule.message);
          }
          break;
      }
    }

    return fieldErrors;
  }

  validateAll(): void {
    const newErrors: FormErrors = {};

    this.fields.forEach((field) => {
      const fieldErrors = this.validateField(field);
      if (fieldErrors.length > 0) {
        newErrors[field.name] = fieldErrors;
      }
    });

    this.errors.set(newErrors);
    this.validationChange.emit({ valid: this.isValid(), errors: newErrors });
  }

  // ─── Event Handlers ────────────────────────────────────────────
  onFieldChange(field: FormField, event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    let value: any = target.value;

    // Manejar tipos especiales
    if (field.type === 'number' || field.type === 'range') {
      value = target.value === '' ? null : Number(target.value);
    } else if (field.type === 'checkbox') {
      value = (target as HTMLInputElement).checked;
    } else if (field.type === 'file') {
      const files = (target as HTMLInputElement).files;
      value = field.multiple ? Array.from(files || []) : files?.[0] || null;
    }

    this.model[field.name] = value;
    this.valueChange.emit({ field: field.name, value });

    // Validar el campo
    const fieldErrors = this.validateField(field);
    const currentErrors = { ...this.errors() };

    if (fieldErrors.length > 0) {
      currentErrors[field.name] = fieldErrors;
    } else {
      delete currentErrors[field.name];
    }

    this.errors.set(currentErrors);
    this.validationChange.emit({ valid: this.isValid(), errors: currentErrors });
  }

  onFocus(field: FormField): void {
    this.focused.set(field.name);
  }

  onBlur(field: FormField): void {
    this.focused.set(null);
    const newTouched = new Set(this.touched());
    newTouched.add(field.name);
    this.touched.set(newTouched);
  }

  onSubmit(form: NgForm): void {
    // Marcar todos los campos como tocados
    const allTouched = new Set(this.fields.map((f) => f.name));
    this.touched.set(allTouched);

    // Validar todo
    this.validateAll();

    if (this.isValid()) {
      this.submitForm.emit({ ...this.model });
    }
  }

  onReset(): void {
    // Limpiar modelo
    this.fields.forEach((field) => {
      this.model[field.name] = field.defaultValue ?? '';
    });

    // Limpiar estado
    this.touched.set(new Set());
    this.errors.set({});
    this.resetForm.emit();
  }

  // ─── Helpers ───────────────────────────────────────────────────
  getFieldErrors(fieldName: string): string[] {
    return this.errors()[fieldName] || [];
  }

  isFieldTouched(fieldName: string): boolean {
    return this.touched().has(fieldName);
  }

  isFieldFocused(fieldName: string): boolean {
    return this.focused() === fieldName;
  }

  hasError(fieldName: string): boolean {
    return this.isFieldTouched(fieldName) && this.getFieldErrors(fieldName).length > 0;
  }

  hasValue(fieldName: string): boolean {
    const value = this.model[fieldName];
    return value !== undefined && value !== null && value !== '';
  }

  getFieldClasses(field: FormField): string[] {
    const classes = ['form-field'];

    if (field.width) classes.push(`form-field--${field.width}`);
    if (this.hasError(field.name)) classes.push('form-field--error');
    if (this.isFieldFocused(field.name)) classes.push('form-field--focused');
    if (this.hasValue(field.name)) classes.push('form-field--has-value');
    if (field.disabled) classes.push('form-field--disabled');
    if (field.readonly) classes.push('form-field--readonly');

    return classes;
  }

  getFormClasses(): string[] {
    const classes = ['form-container'];

    if (this.config.layout) classes.push(`form-container--${this.config.layout}`);
    if (this.config.variant) classes.push(`form-container--${this.config.variant}`);
    if (this.config.columns) classes.push(`form-container--cols-${this.config.columns}`);
    if (this.config.loading) classes.push('form-container--loading');
    if (this.config.disabled) classes.push('form-container--disabled');

    return classes;
  }

  trackByField(index: number, field: FormField): string {
    return field.name;
  }
}
