import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Image, LucideAngularModule, Save, Upload, X } from 'lucide-angular';
import { Marca } from '../marcas.service';
import { environment } from '../../../../../../../environment/environment';

export interface MarcaFormValue {
  name: string;
  description: string;
  logoFile: File | null;
}

@Component({
  selector: 'app-marca-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './marca-form.html',
  styleUrl: '../../productos-lista/producto-form/producto-form.scss',
})
export class MarcaForm implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() marca: Marca | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<MarcaFormValue>();

  CloseIcon = X;
  SaveIcon = Save;
  UploadIcon = Upload;
  ImageIcon = Image;

  form: MarcaFormValue = {
    name: '',
    description: '',
    logoFile: null,
  };
  previewUrl: string | null = null;

  ngOnInit(): void {
    this.populateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['marca'] || changes['mode']) {
      this.populateForm();
    }
  }

  private populateForm(): void {
    this.revokePreview();

    if (this.mode === 'edit' && this.marca) {
      this.form = {
        name: this.marca.nombre_marca,
        description: this.marca.descripcion_marca || '',
        logoFile: null,
      };
      this.previewUrl = this.resolveLogoUrl(this.marca.logo_url);
    } else {
      this.form = { name: '', description: '', logoFile: null };
      this.previewUrl = null;
    }
  }

  selectLogo(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    this.revokePreview();
    this.form.logoFile = file;
    this.previewUrl = file ? URL.createObjectURL(file) : this.resolveLogoUrl(this.marca?.logo_url);
  }

  submit(): void {
    if (!this.form.name.trim()) {
      return;
    }

    this.save.emit({ ...this.form });
  }

  private revokePreview(): void {
    if (this.previewUrl?.startsWith('blob:')) {
      URL.revokeObjectURL(this.previewUrl);
    }
  }

  private resolveLogoUrl(logoUrl?: string | null): string | null {
    if (!logoUrl) {
      return null;
    }

    if (/^https?:\/\//i.test(logoUrl)) {
      return logoUrl;
    }

    return `${environment.apiUrl.replace(/\/api$/, '')}${logoUrl}`;
  }
}
