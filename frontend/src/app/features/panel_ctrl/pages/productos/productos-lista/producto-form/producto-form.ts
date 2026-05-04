import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Save, X } from 'lucide-angular';

export interface ProductoFormValue {
  codigo: string;
  name: string;
  category: string;
  marca: string;
  presentacion: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './producto-form.html',
  styleUrl: './producto-form.scss',
})
export class ProductoForm {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() categorias: string[] = [];
  @Input() marcas: string[] = [];
  @Input() presentaciones: string[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<ProductoFormValue>();

  CloseIcon = X;
  SaveIcon = Save;

  form: ProductoFormValue = {
    codigo: '',
    name: '',
    category: 'Calzado',
    marca: 'Nike',
    presentacion: 'Unidad',
    price: 0,
    image: '',
  };

  submit(): void {
    if (!this.form.name.trim() || !this.form.codigo.trim()) {
      return;
    }

    this.save.emit({
      ...this.form,
      price: Number(this.form.price) || 0,
    });
  }
}
