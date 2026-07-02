import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Save, X } from 'lucide-angular';
import {
  CategoriaResumen,
  EstadoProducto,
  MarcaResumen,
  Producto,
  TipoProducto,
} from '../productos.service';

export interface ProductoFormValue {
  name: string;
  description: string;
  id_categoria: number;
  id_marca: number | null;
  tipo_producto: TipoProducto;
  es_perecible: boolean;
  requiere_lote: boolean;
  estado_producto: EstadoProducto;
  imagen_url: string;
}

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './producto-form.html',
  styleUrl: './producto-form.scss',
})
export class ProductoForm implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() producto: Producto | null = null;
  @Input() categorias: CategoriaResumen[] = [];
  @Input() marcas: MarcaResumen[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<ProductoFormValue>();

  CloseIcon = X;
  SaveIcon = Save;

  form: ProductoFormValue = {
    name: '',
    description: '',
    id_categoria: 0,
    id_marca: null,
    tipo_producto: 'producto',
    es_perecible: false,
    requiere_lote: false,
    estado_producto: 'activo',
    imagen_url: '',
  };

  ngOnInit(): void {
    this.populateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] || changes['mode'] || changes['categorias'] || changes['marcas']) {
      this.populateForm();
    }
  }

  submit(): void {
    if (!this.form.name.trim() || !this.form.id_categoria) {
      return;
    }

    this.save.emit({
      ...this.form,
      name: this.form.name.trim(),
      description: this.form.description.trim(),
      imagen_url: this.form.imagen_url.trim(),
    });
  }

  private populateForm(): void {
    if (this.mode === 'edit' && this.producto) {
      this.form = {
        name: this.producto.nombre_producto,
        description: this.producto.descripcion_producto ?? '',
        id_categoria: Number(this.producto.id_categoria),
        id_marca: this.producto.id_marca ? Number(this.producto.id_marca) : null,
        tipo_producto: this.producto.tipo_producto,
        es_perecible: this.producto.es_perecible,
        requiere_lote: this.producto.requiere_lote,
        estado_producto: this.producto.estado_producto,
        imagen_url: this.producto.imagen_url ?? '',
      };
      return;
    }

    this.form = {
      name: '',
      description: '',
      id_categoria: this.categorias[0]?.id_categoria ?? 0,
      id_marca: null,
      tipo_producto: 'producto',
      es_perecible: false,
      requiere_lote: false,
      estado_producto: 'activo',
      imagen_url: '',
    };
  }
}
