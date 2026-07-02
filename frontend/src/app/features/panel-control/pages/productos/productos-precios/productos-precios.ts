import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { AlertCircle, CheckCircle2, Edit2, Eraser, Eye, LucideAngularModule, Plus, Trash2, X } from 'lucide-angular';
import { BarraFiltros, BarraFiltrosState } from '../../../components/barra-filtros/barra-filtros';
import { Table, TableCellTemplate, TableColumn, TableRowEvent } from '../../../components/table/table';
import { PrecioForm } from './precio-form/precio-form';
import { Precio, PrecioDto, PreciosService, PresentacionResumen } from './precios.service';

@Component({
  selector: 'app-productos-precios',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, BarraFiltros, Table, TableCellTemplate, PrecioForm],
  templateUrl: './productos-precios.html',
  styleUrl: '../productos.scss',
})
export class ProductosPrecios implements OnInit {
  PlusIcon = Plus;
  EraserIcon = Eraser;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  CloseIcon = X;
  AlertIcon = AlertCircle;
  SuccessIcon = CheckCircle2;

  private readonly preciosService = inject(PreciosService);

  activeItem: Precio | null = null;
  selectedItems: Precio[] = [];
  editingPrecio: Precio | null = null;
  deleteDialog: { mode: 'single' | 'bulk'; precios: Precio[] } | null = null;
  isFormOpen = false;
  readonly searchTerm = signal('');
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly successMessage = signal<string | null>(null);
  readonly pageSizeOptions = [5, 10, 20, 50];

  readonly precios = this.preciosService.precios;
  readonly presentaciones = this.preciosService.presentaciones;
  readonly loading = this.preciosService.loading;
  readonly error = this.preciosService.error;
  readonly total = this.preciosService.total;
  readonly columns: TableColumn<Precio>[] = [
    { key: 'presentacion', label: 'Presentación', value: (precio) => this.getPresentationLabel(precio) },
    { key: 'precio_venta', label: 'Venta', width: '120px', align: 'right' },
    { key: 'precio_compra', label: 'Compra', width: '120px', align: 'right' },
    { key: 'precio_mayorista', label: 'Mayorista', width: '120px', align: 'right' },
    { key: 'incluye_igv', label: 'IGV', width: '90px' },
    // { key: 'fecha_modificacion', label: 'Actualizado', width: '170px' },
  ];
  readonly filteredPrecios = computed(() => {
    const term = this.normalizeText(this.searchTerm());
    return this.precios().filter((precio) => {
      const searchable = [
        this.getPresentationLabel(precio),
        precio.moneda,
        String(precio.id_precio),
      ].join(' ');
      return !term || this.normalizeText(searchable).includes(term);
    });
  });
  readonly filteredTotal = computed(() => this.filteredPrecios().length);
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filteredTotal() / this.pageSize())));
  readonly safeCurrentPage = computed(() => Math.min(this.currentPage(), this.totalPages()));
  readonly paginatedPrecios = computed(() => {
    const start = (this.safeCurrentPage() - 1) * this.pageSize();
    return this.filteredPrecios().slice(start, start + this.pageSize());
  });
  readonly filterConfig = computed(() => ({
    searchValue: this.searchTerm(),
    showClearButton: Boolean(this.searchTerm()),
    actionDisabled: this.loading(),
    searchPlaceholder: 'Buscar por producto, presentación o SKU',
    actionLabel: 'Nuevo Precio',
  }));
  readonly notice = computed(() => {
    const error = this.error();
    if (error) return { type: 'error' as const, title: 'No se pudo completar la acción', message: error, icon: this.AlertIcon };
    const success = this.successMessage();
    if (success) return { type: 'success' as const, title: 'Cambios guardados', message: success, icon: this.SuccessIcon };
    return null;
  });

  ngOnInit(): void {
    this.preciosService.findPresentaciones().subscribe();
    this.preciosService.findAll().subscribe();
  }

  openForm(): void { this.editingPrecio = null; this.isFormOpen = true; }
  openEditForm(precio: Precio): void { this.editingPrecio = precio; this.isFormOpen = true; }
  closeForm(): void { this.isFormOpen = false; this.editingPrecio = null; }
  showDetails(event: TableRowEvent<Precio>): void { this.activeItem = event.item; }
  closeDetails(): void { this.activeItem = null; }
  setFilterState(state: BarraFiltrosState): void { this.searchTerm.set(state.search); this.currentPage.set(1); }
  setPageSize(value: number | string): void { this.pageSize.set(Number(value)); this.currentPage.set(1); }
  goToPage(page: number): void { this.currentPage.set(Math.min(Math.max(page, 1), this.totalPages())); }
  clearMessages(): void { this.preciosService.clearError(); this.successMessage.set(null); }

  savePrecio(value: PrecioDto): void {
    this.clearMessages();
    const request = this.editingPrecio
      ? this.preciosService.update(this.editingPrecio.id_precio, value)
      : this.preciosService.create(value);
    request.subscribe({
      next: () => {
        this.closeForm();
        this.successMessage.set(this.editingPrecio ? 'El precio se actualizó correctamente.' : 'El precio fue registrado.');
      },
      error: () => {},
    });
  }

  requestDelete(precio: Precio): void { this.deleteDialog = { mode: 'single', precios: [precio] }; }
  requestDeleteSelected(): void {
    if (this.selectedItems.length === 0) return;
    this.deleteDialog = { mode: 'bulk', precios: [...this.selectedItems] };
  }
  closeDeleteDialog(): void { this.deleteDialog = null; }
  confirmDelete(): void {
    if (!this.deleteDialog) return;
    const { mode, precios } = this.deleteDialog;
    this.clearMessages();
    if (mode === 'single') {
      const target = precios[0];
      this.preciosService.remove(target.id_precio).subscribe({
        next: () => {
          if (this.activeItem?.id_precio === target.id_precio) this.activeItem = null;
          this.selectedItems = this.selectedItems.filter((selected) => selected.id_precio !== target.id_precio);
          this.closeDeleteDialog();
          this.successMessage.set('El precio fue eliminado.');
        },
      });
    } else {
      const ids = precios.map((p) => p.id_precio);
      this.preciosService.removeBatch(ids).subscribe({
        next: () => {
          this.selectedItems = [];
          if (this.activeItem && ids.includes(this.activeItem.id_precio)) this.activeItem = null;
          this.closeDeleteDialog();
          this.successMessage.set(`${precios.length} precios fueron eliminados correctamente.`);
        },
      });
    }
  }
  clearSelection(): void { this.selectedItems = []; }

  getPresentationLabel(precio: Precio): string {
    return this.getPresentationName(precio.presentacion, precio.id_presentacion);
  }

  getPresentationName(presentacion: PresentacionResumen | null | undefined, fallbackId: number): string {
    const source = presentacion ?? this.presentaciones().find((item) => item.id_presentacion === fallbackId);
    if (!source) return `Presentación ${fallbackId}`;
    const product = source.t_productos?.nombre_producto ?? 'Producto';
    return `${product} - ${source.nombre_presentacion}`;
  }

  formatMoney(value: string | number | null | undefined, moneda = 'PEN'): string {
    if (value === null || value === undefined) return '-';
    return `${moneda} ${Number(value).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  private normalizeText(value: string): string {
    return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
}
