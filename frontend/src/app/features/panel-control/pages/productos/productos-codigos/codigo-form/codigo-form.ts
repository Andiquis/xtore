import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Save, X } from 'lucide-angular';
import { Codigo, CodigoDto, PresentacionResumen } from '../codigos.service';

@Component({
  selector: 'app-codigo-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './codigo-form.html',
  styleUrl: '../../productos-lista/producto-form/producto-form.scss',
})
export class CodigoForm implements OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() codigo: Codigo | null = null;
  @Input() presentaciones: PresentacionResumen[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<CodigoDto>();

  CloseIcon = X;
  SaveIcon = Save;

  form: CodigoDto = {
    id_presentacion: 0,
    tipo_codigo: 'EAN',
    valor_codigo: '',
    es_principal: false,
    estado_codigo: 'activo',
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['codigo'] || changes['mode'] || changes['presentaciones']) {
      this.populateForm();
    }
  }

  submit(): void {
    if (!this.form.id_presentacion || !this.form.valor_codigo.trim()) {
      return;
    }

    this.save.emit({
      ...this.form,
      valor_codigo: this.form.valor_codigo.trim(),
    });
  }

  getPresentationLabel(presentacion: PresentacionResumen): string {
    return `${presentacion.t_productos?.nombre_producto ?? 'Producto'} - ${presentacion.nombre_presentacion} (${presentacion.sku})`;
  }

  private populateForm(): void {
    if (this.mode === 'edit' && this.codigo) {
      this.form = {
        id_presentacion: Number(this.codigo.id_presentacion),
        tipo_codigo: this.codigo.tipo_codigo,
        valor_codigo: this.codigo.valor_codigo,
        es_principal: this.codigo.es_principal,
        estado_codigo: this.codigo.estado_codigo,
      };
      return;
    }

    this.form = {
      id_presentacion: this.presentaciones[0]?.id_presentacion ?? 0,
      tipo_codigo: 'EAN',
      valor_codigo: '',
      es_principal: false,
      estado_codigo: 'activo',
    };
  }
}
