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
import { CategoriaForm, CategoriaFormValue } from './categoria-form/categoria-form';

interface Categoria {
  id: string;
  name: string;
  count: number;
  status: string;
  description: string;
}

@Component({
  selector: 'app-productos-categorias',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, CategoriaForm, BarraFiltros, Table, TableCellTemplate],
  templateUrl: './productos-categorias.html',
  styleUrl: '../productos.scss',
})
export class ProductosCategorias {
  EraserIcon = Eraser;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;

  activeItem: Categoria | null = null;
  selectedItems: Categoria[] = [];
  isFormOpen = false;
  searchTerm = '';
  currentPage = 1;
  pageSize = 5;
  readonly pageSizeOptions = [5, 10, 20];

  readonly categoryColumns: TableColumn<Categoria>[] = [
    { key: 'name', label: 'Categoría' },
    { key: 'id', label: 'ID', cellClass: 'font-mono text-gray', width: '120px' },
    { key: 'count', label: 'Productos', width: '140px' },
    { key: 'status', label: 'Estado', width: '120px' },
    { key: 'description', label: 'Descripción', cellClass: 'text-gray font-medium', emptyText: '-' },
  ];

  categorias: Categoria[] = [
    { id: 'CAT-01', name: 'Ropa', count: 124, status: 'Visible', description: 'Prendas de vestir y moda' },
    { id: 'CAT-02', name: 'Calzado', count: 58, status: 'Visible', description: 'Zapatos, zapatillas y botas' },
    { id: 'CAT-03', name: 'Accesorios', count: 210, status: 'Visible', description: 'Complementos y accesorios de moda' },
    { id: 'CAT-04', name: 'Electrónica', count: 12, status: 'Oculta', description: 'Dispositivos y gadgets electrónicos' },
    { id: 'CAT-05', name: 'Deportes', count: 34, status: 'Visible', description: 'Artículos deportivos y fitness' },
  ];

  get categoryFilterConfig(): BarraFiltrosConfig {
    return {
      searchPlaceholder: 'Buscar por nombre de categoría',
      searchValue: this.searchTerm,
      showClearButton: !!this.searchTerm,
      actionLabel: 'Nueva Categoría',
    };
  }

  get filteredCategorias() {
    const query = this.normalizeSearch(this.searchTerm);

    if (!query) {
      return this.categorias;
    }

    return this.categorias.filter((categoria) => [
      categoria.id,
      categoria.name,
      categoria.status,
      categoria.description,
    ].some((value) => this.normalizeSearch(String(value ?? '')).includes(query)));
  }

  get paginatedCategorias(): Categoria[] {
    const start = (this.safeCurrentPage - 1) * this.pageSize;
    return this.filteredCategorias.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredCategorias.length / this.pageSize));
  }

  get safeCurrentPage(): number {
    return Math.min(this.currentPage, this.totalPages);
  }

  setCategoryFilterState(state: BarraFiltrosState): void {
    this.searchTerm = state.search;
    this.currentPage = 1;
    this.selectedItems = this.selectedItems.filter((item) =>
      this.filteredCategorias.some((categoria) => categoria.id === item.id));
  }

  openForm(): void { this.isFormOpen = true; }
  closeForm(): void { this.isFormOpen = false; }

  saveCategoria(value: CategoriaFormValue): void {
    const nextIndex = this.categorias.length + 1;
    this.categorias = [{
      id: `CAT-${String(nextIndex).padStart(2, '0')}`,
      name: value.name, count: 0, status: value.status, description: value.description,
    }, ...this.categorias];
    this.currentPage = 1;
    this.closeForm();
  }

  showDetails(item: Categoria): void { this.activeItem = item; }
  showRowDetails(event: TableRowEvent<Categoria>): void { this.showDetails(event.item); }
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
