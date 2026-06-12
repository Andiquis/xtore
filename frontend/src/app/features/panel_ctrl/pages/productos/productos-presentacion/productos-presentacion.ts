import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Edit2, Eraser, Eye, LucideAngularModule, Trash2,
} from 'lucide-angular';
import {
  BarraFiltros,
  BarraFiltrosConfig,
  BarraFiltrosState,
} from '../../../components/barra-filtros/barra-filtros';
import {
  Table,
  TableCellTemplate,
  TableColumn,
  TableRowEvent,
} from '../../../components/table/table';
import { PresentacionForm, PresentacionFormValue } from './presentacion-form/presentacion-form';

interface Presentacion {
  id: string;
  name: string;
  count: number;
  status: string;
  description: string;
}

@Component({
  selector: 'app-productos-presentacion',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PresentacionForm, BarraFiltros, Table, TableCellTemplate],
  templateUrl: './productos-presentacion.html',
  styleUrl: '../productos.scss',
})
export class ProductosPresentacion {
  EraserIcon = Eraser;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;

  activeItem: Presentacion | null = null;
  selectedItems: Presentacion[] = [];
  isFormOpen = false;
  searchTerm = '';
  currentPage = 1;
  pageSize = 5;
  readonly pageSizeOptions = [5, 10, 20];

  readonly presentationColumns: TableColumn<Presentacion>[] = [
    { key: 'name', label: 'Presentación' },
    { key: 'id', label: 'ID', cellClass: 'font-mono text-gray', width: '120px' },
    { key: 'count', label: 'Productos', width: '140px' },
    { key: 'status', label: 'Estado', width: '120px' },
    { key: 'description', label: 'Descripción', cellClass: 'text-gray font-medium', emptyText: '-' },
  ];

  presentaciones: Presentacion[] = [
    { id: 'PRE-01', name: 'Unidad', count: 412, status: 'Activo', description: 'Producto individual' },
    { id: 'PRE-02', name: 'Caja x12', count: 45, status: 'Activo', description: 'Caja con 12 unidades' },
    { id: 'PRE-03', name: 'Pack x100', count: 18, status: 'Activo', description: 'Paquete mayorista de 100 unidades' },
    { id: 'PRE-04', name: 'Pallet', count: 2, status: 'Inactivo', description: 'Presentación para distribución masiva' },
  ];

  get presentationFilterConfig(): BarraFiltrosConfig {
    return {
      searchPlaceholder: 'Buscar por nombre de presentación',
      searchValue: this.searchTerm,
      showClearButton: !!this.searchTerm,
      actionLabel: 'Nueva Presentación',
    };
  }

  get filteredPresentaciones() {
    const query = this.normalizeSearch(this.searchTerm);

    if (!query) {
      return this.presentaciones;
    }

    return this.presentaciones.filter((presentacion) => [
      presentacion.id,
      presentacion.name,
      presentacion.status,
      presentacion.description,
    ].some((value) => this.normalizeSearch(String(value ?? '')).includes(query)));
  }

  get paginatedPresentaciones(): Presentacion[] {
    const start = (this.safeCurrentPage - 1) * this.pageSize;
    return this.filteredPresentaciones.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredPresentaciones.length / this.pageSize));
  }

  get safeCurrentPage(): number {
    return Math.min(this.currentPage, this.totalPages);
  }

  setPresentationFilterState(state: BarraFiltrosState): void {
    this.searchTerm = state.search;
    this.currentPage = 1;
    this.selectedItems = this.selectedItems.filter((item) =>
      this.filteredPresentaciones.some((presentacion) => presentacion.id === item.id));
  }

  openForm(): void { this.isFormOpen = true; }
  closeForm(): void { this.isFormOpen = false; }

  savePresentacion(value: PresentacionFormValue): void {
    const nextIndex = this.presentaciones.length + 1;
    this.presentaciones = [{
      id: `PRE-${String(nextIndex).padStart(2, '0')}`,
      name: value.name, count: 0, status: value.status, description: value.description,
    }, ...this.presentaciones];
    this.currentPage = 1;
    this.closeForm();
  }

  showDetails(item: Presentacion): void { this.activeItem = item; }
  showRowDetails(event: TableRowEvent<Presentacion>): void { this.showDetails(event.item); }
  closeDetails(): void { this.activeItem = null; }

  clearSelection(): void { this.selectedItems = []; }

  setPage(page: number): void {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }

  setPageSize(value: number): void {
    this.pageSize = Number(value);
    this.currentPage = 1;
    this.clearSelection();
  }

  private normalizeSearch(value: string): string {
    return value.trim().toLowerCase();
  }
}
