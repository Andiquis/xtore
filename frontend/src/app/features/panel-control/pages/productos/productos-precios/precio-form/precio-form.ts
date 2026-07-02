import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Save, X } from 'lucide-angular';
import { Precio, PrecioDto, PresentacionResumen } from '../precios.service';

@Component({
  selector: 'app-precio-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './precio-form.html',
  styleUrl: '../../productos-lista/producto-form/producto-form.scss',
})
export class PrecioForm implements OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() precio: Precio | null = null;
  @Input() presentaciones: PresentacionResumen[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<PrecioDto>();

  CloseIcon = X;
  SaveIcon = Save;

  form: PrecioDto = {
    id_presentacion: 0,
    precio_venta: 0,
    moneda: 'PEN',
    incluye_igv: true,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['precio'] || changes['mode'] || changes['presentaciones']) {
      this.populateForm();
    }
  }

  submit(): void {
    if (!this.form.id_presentacion || !Number(this.form.precio_venta)) {
      return;
    }

    this.save.emit({
      ...this.form,
      precio_compra: this.toOptionalNumber(this.form.precio_compra),
      precio_venta: Number(this.form.precio_venta),
      precio_mayorista: this.toOptionalNumber(this.form.precio_mayorista),
      cantidad_minima_mayorista: this.toOptionalNumber(this.form.cantidad_minima_mayorista),
      moneda: (this.form.moneda || 'PEN').toUpperCase(),
    });
  }

  getPresentationLabel(presentacion: PresentacionResumen): string {
    const productName = presentacion.t_productos?.nombre_producto ?? 'Producto';
    return `${productName} - ${presentacion.nombre_presentacion} (${presentacion.sku})`;
  }

  private populateForm(): void {
    if (this.mode === 'edit' && this.precio) {
      this.form = {
        id_presentacion: Number(this.precio.id_presentacion),
        precio_compra: this.toOptionalNumber(this.precio.precio_compra),
        precio_venta: Number(this.precio.precio_venta),
        precio_mayorista: this.toOptionalNumber(this.precio.precio_mayorista),
        cantidad_minima_mayorista: this.toOptionalNumber(this.precio.cantidad_minima_mayorista),
        moneda: this.precio.moneda,
        incluye_igv: this.precio.incluye_igv,
      };
      return;
    }

    this.form = {
      id_presentacion: this.presentaciones[0]?.id_presentacion ?? 0,
      precio_venta: 0,
      moneda: 'PEN',
      incluye_igv: true,
    };
  }

  private toOptionalNumber(value: string | number | null | undefined): number | undefined {
    if (value === null || value === undefined || value === '') {
      return undefined;
    }

    return Number(value);
  }
}
