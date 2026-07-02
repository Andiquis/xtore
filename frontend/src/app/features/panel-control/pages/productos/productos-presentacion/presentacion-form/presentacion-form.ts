import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertCircle, CircleHelp, LucideAngularModule, Save, X } from 'lucide-angular';
import { EstadoProducto, Presentacion, ProductoResumen } from '../presentaciones.service';

const DEFAULT_NAME_SUGGESTIONS = [
  'Unidad',
  'Botella 500ml',
  'Botella 1L',
  'Bolsa 1kg',
  'Caja x12',
  'Pack x6',
  'Saco 5kg',
] as const;

const DEFAULT_UNIT_SUGGESTIONS = [
  'NIU',
  'KGM',
  'LTR',
  'MTR',
  'PK',
  'BX',
  'BG',
] as const;

export interface PresentacionFormValue {
  id_producto: number;
  name: string;
  sku: string;
  unidad_medida: string;
  factor_conversion: number;
  controla_stock: boolean;
  estado_presentacion: EstadoProducto;
}

@Component({
  selector: 'app-presentacion-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './presentacion-form.html',
  styleUrl: '../../productos-lista/producto-form/producto-form.scss',
})
export class PresentacionForm implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() presentacion: Presentacion | null = null;
  @Input() productos: ProductoResumen[] = [];
  @Input() presentaciones: Presentacion[] = [];
  @Input() errorMessage: string | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<PresentacionFormValue>();

  CloseIcon = X;
  SaveIcon = Save;
  HelpIcon = CircleHelp;
  AlertIcon = AlertCircle;

  form: PresentacionFormValue = {
    id_producto: 0,
    name: '',
    sku: '',
    unidad_medida: 'NIU',
    factor_conversion: 1,
    controla_stock: true,
    estado_presentacion: 'activo',
  };
  productSearch = '';
  submitted = false;

  ngOnInit(): void {
    this.populateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['presentacion'] || changes['mode'] || changes['productos']) {
      this.populateForm();
    }
  }

  submit(): void {
    this.submitted = true;

    if (!this.isValid()) {
      return;
    }

    this.save.emit({
      ...this.form,
      name: this.form.name.trim(),
      sku: this.form.sku.trim(),
      unidad_medida: this.form.unidad_medida.trim().toUpperCase() || 'NIU',
      factor_conversion: Number(this.form.factor_conversion) || 1,
    });
  }

  hasError(field: 'producto' | 'name' | 'sku' | 'factor_conversion'): boolean {
    if (!this.submitted) {
      return false;
    }

    switch (field) {
      case 'producto':
        return !this.form.id_producto;
      case 'name':
        return !this.form.name.trim();
      case 'sku':
        return !this.form.sku.trim();
      case 'factor_conversion':
        return !this.hasValidFactor();
    }
  }

  clearFieldError(field: 'producto' | 'name' | 'sku' | 'factor_conversion'): void {
    if (!this.hasError(field)) {
      return;
    }

    this.submitted = !this.isValid();
  }

  onProductSearchChange(value: string): void {
    this.productSearch = value;
    const normalizedValue = this.normalizeOption(value);
    const selectedProduct = this.productos.find((producto) =>
      this.normalizeOption(this.getProductOptionLabel(producto)) === normalizedValue
      || this.normalizeOption(producto.nombre_producto) === normalizedValue
    );

    this.form.id_producto = selectedProduct?.id_producto ?? 0;
    this.clearFieldError('producto');
  }

  getProductOptionLabel(producto: ProductoResumen): string {
    return `${producto.nombre_producto} · ID ${producto.id_producto}`;
  }

  get nameSuggestions(): string[] {
    return this.uniqueSuggestions(
      DEFAULT_NAME_SUGGESTIONS,
      this.presentaciones.map((item) => item.nombre_presentacion)
    );
  }

  get unitSuggestions(): string[] {
    return this.uniqueSuggestions(
      DEFAULT_UNIT_SUGGESTIONS,
      this.presentaciones.map((item) => item.unidad_medida)
    );
  }

  private populateForm(): void {
    this.submitted = false;

    if (this.mode === 'edit' && this.presentacion) {
      this.form = {
        id_producto: Number(this.presentacion.id_producto),
        name: this.presentacion.nombre_presentacion,
        sku: this.presentacion.sku,
        unidad_medida: this.presentacion.unidad_medida,
        factor_conversion: Number(this.presentacion.factor_conversion),
        controla_stock: this.presentacion.controla_stock,
        estado_presentacion: this.presentacion.estado_presentacion,
      };
      this.productSearch = this.getSelectedProductLabel(this.form.id_producto);
      return;
    }

    this.form = {
      id_producto: 0,
      name: '',
      sku: '',
      unidad_medida: 'NIU',
      factor_conversion: 1,
      controla_stock: true,
      estado_presentacion: 'activo',
    };
    this.productSearch = '';
  }

  private isValid(): boolean {
    return Boolean(
      this.form.id_producto
      && this.form.name.trim()
      && this.form.sku.trim()
      && this.hasValidFactor()
    );
  }

  private hasValidFactor(): boolean {
    return Number(this.form.factor_conversion) > 0;
  }

  private getSelectedProductLabel(productId: number): string {
    const product = this.productos.find((item) => item.id_producto === productId);
    return product ? this.getProductOptionLabel(product) : '';
  }

  private normalizeOption(value: string): string {
    return value.trim().toLocaleLowerCase('es-PE');
  }

  private uniqueSuggestions(defaults: readonly string[], values: Array<string | null | undefined>): string[] {
    const options = new Map<string, string>();

    [...defaults, ...values].forEach((value) => {
      const label = value?.trim();
      if (!label) {
        return;
      }

      options.set(label.toLocaleLowerCase('es-PE'), label);
    });

    return [...options.values()];
  }
}
