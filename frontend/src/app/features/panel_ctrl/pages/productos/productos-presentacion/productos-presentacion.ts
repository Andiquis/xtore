import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Edit2, Eraser, Eye, LucideAngularModule, Plus, Search, Trash2,
} from 'lucide-angular';
import { PresentacionForm, PresentacionFormValue } from './presentacion-form/presentacion-form';

@Component({
  selector: 'app-productos-presentacion',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PresentacionForm],
  templateUrl: './productos-presentacion.html',
  styleUrl: '../productos.scss',
})
export class ProductosPresentacion {
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;

  activeItem: any = null;
  selectedItems: any[] = [];
  isFormOpen = false;

  presentaciones = [
    { id: 'PRE-01', name: 'Unidad', count: 412, status: 'Activo', description: 'Producto individual' },
    { id: 'PRE-02', name: 'Caja x12', count: 45, status: 'Activo', description: 'Caja con 12 unidades' },
    { id: 'PRE-03', name: 'Pack x100', count: 18, status: 'Activo', description: 'Paquete mayorista de 100 unidades' },
    { id: 'PRE-04', name: 'Pallet', count: 2, status: 'Inactivo', description: 'Presentación para distribución masiva' },
  ];

  openForm(): void { this.isFormOpen = true; }
  closeForm(): void { this.isFormOpen = false; }

  savePresentacion(value: PresentacionFormValue): void {
    const nextIndex = this.presentaciones.length + 1;
    this.presentaciones = [{
      id: `PRE-${String(nextIndex).padStart(2, '0')}`,
      name: value.name, count: 0, status: value.status, description: value.description,
    }, ...this.presentaciones];
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
    this.selectedItems = checked ? [...this.presentaciones] : [];
  }

  areAllSelected(): boolean {
    return this.presentaciones.length > 0 && this.selectedItems.length === this.presentaciones.length;
  }

  hasPartialSelection(): boolean {
    return this.selectedItems.length > 0 && !this.areAllSelected();
  }

  clearSelection(): void { this.selectedItems = []; }
}
