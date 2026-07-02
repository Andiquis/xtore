import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Save, X } from 'lucide-angular';
import { Categoria, EstadoGenerico } from '../categorias.service';

export interface CategoriaFormValue {
  name: string;
  id_categoria_padre: number | null;
  estado_categoria: EstadoGenerico;
}

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './categoria-form.html',
  styleUrl: '../../productos-lista/producto-form/producto-form.scss',
})
export class CategoriaForm implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() categoria: Categoria | null = null;
  @Input() categorias: Categoria[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<CategoriaFormValue>();

  CloseIcon = X;
  SaveIcon = Save;

  form: CategoriaFormValue = {
    name: '',
    id_categoria_padre: null,
    estado_categoria: 'activo',
  };

  ngOnInit(): void {
    this.populateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoria'] || changes['mode']) {
      this.populateForm();
    }
  }

  get parentOptions(): Categoria[] {
    const blockedIds = new Set<number>();

    if (this.mode === 'edit' && this.categoria) {
      blockedIds.add(this.categoria.id_categoria);
      this.collectDescendantIds(this.categoria.id_categoria, blockedIds);
    }

    return this.categorias.filter((item) => !blockedIds.has(item.id_categoria));
  }

  submit(): void {
    if (!this.form.name.trim()) {
      return;
    }

    this.save.emit({
      name: this.form.name.trim(),
      id_categoria_padre: this.form.id_categoria_padre,
      estado_categoria: this.form.estado_categoria,
    });
  }

  private populateForm(): void {
    if (this.mode === 'edit' && this.categoria) {
      this.form = {
        name: this.categoria.nombre_categoria,
        id_categoria_padre: this.categoria.id_categoria_padre,
        estado_categoria: this.categoria.estado_categoria,
      };
      return;
    }

    this.form = {
      name: '',
      id_categoria_padre: null,
      estado_categoria: 'activo',
    };
  }

  private collectDescendantIds(parentId: number, blockedIds: Set<number>): void {
    this.categorias
      .filter((item) => item.id_categoria_padre === parentId)
      .forEach((child) => {
        blockedIds.add(child.id_categoria);
        this.collectDescendantIds(child.id_categoria, blockedIds);
      });
  }
}
