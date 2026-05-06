import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Edit2, Eraser, Eye, LucideAngularModule, Plus, Search, Trash2,
} from 'lucide-angular';
import { CategoriaForm, CategoriaFormValue } from './categoria-form/categoria-form';

@Component({
  selector: 'app-productos-categorias',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, CategoriaForm],
  templateUrl: './productos-categorias.html',
  styleUrl: '../productos.scss',
})
export class ProductosCategorias {
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;

  activeItem: any = null;
  selectedItems: any[] = [];
  isFormOpen = false;

  categorias = [
    { id: 'CAT-01', name: 'Ropa', count: 124, status: 'Visible', description: 'Prendas de vestir y moda' },
    { id: 'CAT-02', name: 'Calzado', count: 58, status: 'Visible', description: 'Zapatos, zapatillas y botas' },
    { id: 'CAT-03', name: 'Accesorios', count: 210, status: 'Visible', description: 'Complementos y accesorios de moda' },
    { id: 'CAT-04', name: 'Electrónica', count: 12, status: 'Oculta', description: 'Dispositivos y gadgets electrónicos' },
    { id: 'CAT-05', name: 'Deportes', count: 34, status: 'Visible', description: 'Artículos deportivos y fitness' },
  ];

  openForm(): void { this.isFormOpen = true; }
  closeForm(): void { this.isFormOpen = false; }

  saveCategoria(value: CategoriaFormValue): void {
    const nextIndex = this.categorias.length + 1;
    this.categorias = [{
      id: `CAT-${String(nextIndex).padStart(2, '0')}`,
      name: value.name, count: 0, status: value.status, description: value.description,
    }, ...this.categorias];
    this.closeForm();
  }

  showDetails(item: any): void { this.activeItem = item; }
  closeDetails(): void { this.activeItem = null; }

  isSelected(item: any): boolean {
    return this.selectedItems.some((s) => s.id === item.id);
  }

  toggleSelection(item: any, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedItems = checked
      ? this.isSelected(item) ? this.selectedItems : [...this.selectedItems, item]
      : this.selectedItems.filter((s) => s.id !== item.id);
  }

  toggleAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedItems = checked ? [...this.categorias] : [];
  }

  areAllSelected(): boolean {
    return this.categorias.length > 0 && this.selectedItems.length === this.categorias.length;
  }

  hasPartialSelection(): boolean {
    return this.selectedItems.length > 0 && !this.areAllSelected();
  }

  clearSelection(): void { this.selectedItems = []; }
}
