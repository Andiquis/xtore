import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { AlertCircle, CheckCircle2, Edit2, Eraser, Eye, LucideAngularModule, Plus, Trash2, X } from 'lucide-angular';
import { BarraFiltros, BarraFiltrosState } from '../../../components/barra-filtros/barra-filtros';
import { Table, TableCellTemplate, TableColumn, TableRowEvent } from '../../../components/table/table';
import { CodigoForm } from './codigo-form/codigo-form';
import { Codigo, CodigoDto, CodigosService, PresentacionResumen } from './codigos.service';

@Component({
  selector: 'app-productos-codigos',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, BarraFiltros, Table, TableCellTemplate, CodigoForm],
  templateUrl: './productos-codigos.html',
  styleUrl: '../productos.scss',
})
export class ProductosCodigos implements OnInit {
  PlusIcon = Plus;
  EraserIcon = Eraser;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  CloseIcon = X;
  AlertIcon = AlertCircle;
  SuccessIcon = CheckCircle2;

  private readonly codigosService = inject(CodigosService);

  activeItem: Codigo | null = null;
  selectedItems: Codigo[] = [];
  editingCodigo: Codigo | null = null;
  deleteDialog: { mode: 'single' | 'bulk'; codigos: Codigo[] } | null = null;
  isFormOpen = false;
  readonly searchTerm = signal('');
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly successMessage = signal<string | null>(null);
  readonly pageSizeOptions = [5, 10, 20, 50];

  readonly codigos = this.codigosService.codigos;
  readonly presentaciones = this.codigosService.presentaciones;
  readonly loading = this.codigosService.loading;
  readonly error = this.codigosService.error;
  readonly total = this.codigosService.total;
  readonly columns: TableColumn<Codigo>[] = [
    { key: 'valor_codigo', label: 'Código' },
    { key: 'presentacion', label: 'Unidad de venta', value: (codigo) => this.getPresentationLabel(codigo) },
    { key: 'tipo_codigo', label: 'Tipo', width: '110px' },
    { key: 'es_principal', label: 'Principal', width: '110px' },
    { key: 'estado_codigo', label: 'Estado', width: '120px' },
    // { key: 'fecha_modificacion', label: 'Actualizado', width: '170px' },
  ];
  readonly filteredCodigos = computed(() => {
    const term = this.normalizeText(this.searchTerm());
    return this.codigos().filter((codigo) => {
      const searchable = [codigo.valor_codigo, codigo.tipo_codigo, codigo.estado_codigo, this.getPresentationLabel(codigo)].join(' ');
      return !term || this.normalizeText(searchable).includes(term);
    });
  });
  readonly filteredTotal = computed(() => this.filteredCodigos().length);
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filteredTotal() / this.pageSize())));
  readonly safeCurrentPage = computed(() => Math.min(this.currentPage(), this.totalPages()));
  readonly paginatedCodigos = computed(() => {
    const start = (this.safeCurrentPage() - 1) * this.pageSize();
    return this.filteredCodigos().slice(start, start + this.pageSize());
  });
  readonly filterConfig = computed(() => ({
    searchValue: this.searchTerm(),
    showClearButton: Boolean(this.searchTerm()),
    actionDisabled: this.loading(),
    searchPlaceholder: 'Buscar por código, tipo, producto o presentación',
    actionLabel: 'Nuevo Código',
  }));
  readonly notice = computed(() => {
    const error = this.error();
    if (error) return { type: 'error' as const, title: 'No se pudo completar la acción', message: error, icon: this.AlertIcon };
    const success = this.successMessage();
    if (success) return { type: 'success' as const, title: 'Cambios guardados', message: success, icon: this.SuccessIcon };
    return null;
  });

  ngOnInit(): void {
    this.codigosService.findPresentaciones().subscribe();
    this.codigosService.findAll().subscribe();
  }

  openForm(): void { this.editingCodigo = null; this.isFormOpen = true; }
  openEditForm(codigo: Codigo): void { this.editingCodigo = codigo; this.isFormOpen = true; }
  closeForm(): void { this.isFormOpen = false; this.editingCodigo = null; }
  showDetails(event: TableRowEvent<Codigo>): void { this.activeItem = event.item; }
  closeDetails(): void { this.activeItem = null; }
  setFilterState(state: BarraFiltrosState): void { this.searchTerm.set(state.search); this.currentPage.set(1); }
  setPageSize(value: number | string): void { this.pageSize.set(Number(value)); this.currentPage.set(1); }
  goToPage(page: number): void { this.currentPage.set(Math.min(Math.max(page, 1), this.totalPages())); }
  clearMessages(): void { this.codigosService.clearError(); this.successMessage.set(null); }

  saveCodigo(value: CodigoDto): void {
    this.clearMessages();
    const request = this.editingCodigo
      ? this.codigosService.update(this.editingCodigo.id_codigo, value)
      : this.codigosService.create(value);
    request.subscribe({
      next: () => {
        this.closeForm();
        this.successMessage.set(this.editingCodigo ? 'El código se actualizó correctamente.' : 'El código fue registrado.');
      },
      error: () => {},
    });
  }

  requestDelete(codigo: Codigo): void { this.deleteDialog = { mode: 'single', codigos: [codigo] }; }
  requestDeleteSelected(): void {
    if (this.selectedItems.length === 0) return;
    this.deleteDialog = { mode: 'bulk', codigos: [...this.selectedItems] };
  }
  closeDeleteDialog(): void { this.deleteDialog = null; }
  confirmDelete(): void {
    if (!this.deleteDialog) return;
    const { mode, codigos } = this.deleteDialog;
    this.clearMessages();
    if (mode === 'single') {
      const target = codigos[0];
      this.codigosService.remove(target.id_codigo).subscribe({
        next: () => {
          if (this.activeItem?.id_codigo === target.id_codigo) this.activeItem = null;
          this.selectedItems = this.selectedItems.filter((selected) => selected.id_codigo !== target.id_codigo);
          this.closeDeleteDialog();
          this.successMessage.set('El código fue eliminado.');
        },
      });
    } else {
      const ids = codigos.map((c) => c.id_codigo);
      this.codigosService.removeBatch(ids).subscribe({
        next: () => {
          this.selectedItems = [];
          if (this.activeItem && ids.includes(this.activeItem.id_codigo)) this.activeItem = null;
          this.closeDeleteDialog();
          this.successMessage.set(`${codigos.length} códigos fueron eliminados correctamente.`);
        },
      });
    }
  }
  clearSelection(): void { this.selectedItems = []; }

  getPresentationLabel(codigo: Codigo): string {
    return this.getPresentationName(codigo.presentacion, codigo.id_presentacion);
  }

  getPresentationName(presentacion: PresentacionResumen | null | undefined, fallbackId: number): string {
    const source = presentacion ?? this.presentaciones().find((item) => item.id_presentacion === fallbackId);
    if (!source) return `Presentación ${fallbackId}`;
    return `${source.t_productos?.nombre_producto ?? 'Producto'} - ${source.nombre_presentacion}`;
  }

  private normalizeText(value: string): string {
    return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
}
