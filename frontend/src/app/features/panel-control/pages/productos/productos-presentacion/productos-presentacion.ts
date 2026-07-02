import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AlertCircle,
  CheckCircle2,
  Edit2,
  Eraser,
  Eye,
  LucideAngularModule,
  Package,
  Plus,
  Trash2,
  X,
} from 'lucide-angular';
import {
  BarraFiltroItem,
  BarraFiltros,
  BarraFiltrosState,
} from '../../../components/barra-filtros/barra-filtros';
import {
  Table,
  TableCellTemplate,
  TableColumn,
  TableRowEvent,
} from '../../../components/table/table';
import {
  ExcelDataConfig,
  ExcelDataManager,
  ExcelImportCommit,
  ExcelReviewRow,
} from '../../../components/excel-data-manager/excel-data-manager';
import { PresentacionForm, PresentacionFormValue } from './presentacion-form/presentacion-form';
import {
  CreatePresentacionDto,
  EstadoProducto,
  Presentacion,
  PresentacionesService,
  UpdatePresentacionDto,
} from './presentaciones.service';

type EstadoFilter = 'todos' | EstadoProducto;
type StockFilter = 'todos' | 'controla' | 'no_controla';

const PRESENTATION_FILTERS = [
  {
    id: 'estado',
    ariaLabel: 'Estado',
    options: [
      { label: 'Estado', value: 'todos' },
      { label: 'Activo', value: 'activo' },
      { label: 'Inactivo', value: 'inactivo' },
      { label: 'Descontinuado', value: 'descontinuado' },
    ],
  },
  {
    id: 'stock',
    ariaLabel: 'Stock',
    options: [
      { label: 'Stock', value: 'todos' },
      { label: 'Controla stock', value: 'controla' },
      { label: 'Sin stock', value: 'no_controla' },
    ],
  },
] as const satisfies readonly BarraFiltroItem[];

@Component({
  selector: 'app-productos-presentacion',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PresentacionForm, BarraFiltros, Table, TableCellTemplate, ExcelDataManager],
  templateUrl: './productos-presentacion.html',
  styleUrl: '../productos.scss',
})
export class ProductosPresentacion implements OnInit {
  @ViewChild('presentationExcelManager') presentationExcelManager?: ExcelDataManager;

  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  AlertIcon = AlertCircle;
  SuccessIcon = CheckCircle2;
  CloseIcon = X;
  PackageIcon = Package;

  private readonly presentacionesService = inject(PresentacionesService);

  readonly presentationExcelConfig: ExcelDataConfig = {
    entityLabel: 'unidades de venta',
    fileName: 'unidades-de-venta',
    sheetName: 'Unidades de Venta',
    uniqueKey: 'sku',
    uniqueLabel: 'SKU',
    columns: [
      {
        key: 'producto',
        header: 'Producto',
        aliases: ['producto', 'nombre_producto'],
        required: true,
        exampleValue: 'Champú de Romero',
        transform: (value) => String(value ?? '').trim(),
        validate: (value) => {
          const name = String(value ?? '').trim();
          if (!name) return 'Producto es obligatorio.';
          const exists = this.productos().some(
            (p) => p.nombre_producto.toLowerCase().trim() === name.toLowerCase()
          );
          return exists ? null : `El producto "${name}" no existe en el sistema.`;
        },
        exportValue: (record) => this.getProductName(record as Presentacion),
      },
      {
        key: 'nombre_presentacion',
        header: 'Unidad de venta',
        aliases: ['nombre', 'nombre_presentacion', 'unidad_venta', 'presentacion'],
        required: true,
        exampleValue: 'Frasco 250ml',
        maxLength: 160,
        transform: (value) => String(value ?? '').trim(),
      },
      {
        key: 'sku',
        header: 'SKU',
        aliases: ['sku', 'codigo_sku'],
        required: true,
        exampleValue: 'SHMP-ROM-250',
        maxLength: 80,
        transform: (value) => String(value ?? '').trim(),
      },
      {
        key: 'codigo_barras',
        header: 'Código de barras',
        aliases: ['codigo_barras', 'barras', 'barcode'],
        exampleValue: '7751234567890',
        maxLength: 100,
        transform: (value) => String(value ?? '').trim() || null,
      },
      {
        key: 'unidad_medida',
        header: 'Unidad de medida',
        aliases: ['unidad', 'unidad_medida', 'um'],
        defaultValue: 'NIU',
        exampleValue: 'NIU',
        maxLength: 20,
        transform: (value) => String(value ?? 'NIU').trim().toUpperCase(),
      },
      {
        key: 'factor_conversion',
        header: 'Equiv. base',
        aliases: ['factor', 'factor_conversion', 'equivalencia'],
        defaultValue: '1.0000',
        exampleValue: '1.0000',
        transform: (value) => {
          const num = Number(value);
          return isNaN(num) ? 1.0000 : num;
        },
        validate: (value) => {
          const num = Number(value);
          return isNaN(num) || num <= 0 ? 'Equivalencia base debe ser un número positivo mayor que 0.' : null;
        },
      },
      {
        key: 'controla_stock',
        header: 'Controla stock',
        aliases: ['controla_stock', 'stock'],
        defaultValue: 'Sí',
        exampleValue: 'Sí',
        transform: (value) => this.normalizeBooleanText(value),
        validate: (value) => {
          const val = String(value ?? '').trim().toLowerCase();
          return val === 'sí' || val === 'si' || val === 'no' || val === 'Sí' || val === 'No'
            ? null
            : 'Controla stock debe ser Sí o No.';
        },
      },
      {
        key: 'estado_presentacion',
        header: 'Estado',
        aliases: ['estado', 'estado_presentacion'],
        defaultValue: 'activo',
        exampleValue: 'activo',
        transform: (value) => String(value ?? 'activo').trim().toLowerCase(),
        validate: (value) => {
          const val = String(value ?? '').trim();
          return val === 'activo' || val === 'inactivo' || val === 'descontinuado'
            ? null
            : 'Estado debe ser: activo, inactivo o descontinuado.';
        },
      },
    ],
  };

  activeItem: Presentacion | null = null;
  selectedItems: Presentacion[] = [];
  isFormOpen = false;
  editingPresentacion: Presentacion | null = null;
  deleteDialog: { mode: 'single' | 'bulk'; presentaciones: Presentacion[] } | null = null;
  readonly pageSizeOptions = [5, 10, 20, 50];
  readonly presentationColumns: TableColumn<Presentacion>[] = [
    { key: 'producto', label: 'Nombre del producto', value: (presentacion) => this.getProductName(presentacion) },
    { key: 'nombre_presentacion', label: 'Unidad de venta', width: '180px' },
    { key: 'unidad_medida', label: 'Unidad', width: '100px' },
    { key: 'factor_conversion', label: 'Equiv. base', value: (presentacion) => this.getFactorLabel(presentacion), width: '120px' },
    { key: 'sku', label: 'SKU', cellClass: 'font-mono text-gray', width: '150px' },
    { key: 'stock', label: 'Stock', value: (presentacion) => this.getStockLabel(presentacion), width: '150px' },
    { key: 'estado_presentacion', label: 'Estado', width: '140px' },
    // { key: 'fecha_modificacion', label: 'Actualizado', cellClass: 'text-gray font-medium', width: '170px' },
  ];

  readonly searchTerm = signal('');
  readonly estadoFilter = signal<EstadoFilter>('todos');
  readonly stockFilter = signal<StockFilter>('todos');
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly successMessage = signal<string | null>(null);

  readonly presentaciones = this.presentacionesService.presentaciones;
  readonly productos = this.presentacionesService.productos;
  readonly loading = this.presentacionesService.loading;
  readonly error = this.presentacionesService.error;
  readonly total = this.presentacionesService.total;
  readonly filteredPresentaciones = computed(() => {
    const term = this.normalizeText(this.searchTerm());
    const estado = this.estadoFilter();
    const stock = this.stockFilter();

    return this.presentaciones().filter((presentacion) => {
      const matchesEstado = estado === 'todos' || presentacion.estado_presentacion === estado;
      const matchesStock =
        stock === 'todos'
        || (stock === 'controla' && presentacion.controla_stock)
        || (stock === 'no_controla' && !presentacion.controla_stock);
      const searchable = [
        presentacion.nombre_presentacion,
        presentacion.sku,
        presentacion.unidad_medida,
        presentacion.estado_presentacion,
        this.getProductName(presentacion),
        String(presentacion.id_presentacion),
      ].join(' ');

      return matchesEstado && matchesStock && (!term || this.normalizeText(searchable).includes(term));
    });
  });
  readonly filteredTotal = computed(() => this.filteredPresentaciones().length);
  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredTotal() / this.pageSize()))
  );
  readonly safeCurrentPage = computed(() =>
    Math.min(this.currentPage(), this.totalPages())
  );
  readonly paginatedPresentaciones = computed(() => {
    const start = (this.safeCurrentPage() - 1) * this.pageSize();
    return this.filteredPresentaciones().slice(start, start + this.pageSize());
  });
  readonly notice = computed(() => {
    const error = this.error();

    if (error) {
      return {
        type: 'error' as const,
        title: 'No se pudo completar la acción',
        message: error,
        icon: this.AlertIcon,
      };
    }

    const success = this.successMessage();

    if (success) {
      return {
        type: 'success' as const,
        title: 'Cambios guardados',
        message: success,
        icon: this.SuccessIcon,
      };
    }

    return null;
  });
  readonly presentationFilterConfig = computed(() => ({
    filters: PRESENTATION_FILTERS,
    searchValue: this.searchTerm(),
    filterValues: {
      estado: this.estadoFilter(),
      stock: this.stockFilter(),
    },
    showClearButton: Boolean(this.searchTerm())
      || this.estadoFilter() !== 'todos'
      || this.stockFilter() !== 'todos',
    actionDisabled: this.loading(),
    searchPlaceholder: 'Buscar por nombre, SKU, código, producto o ID',
    actionLabel: 'Nueva unidad',
  }));

  ngOnInit(): void {
    this.presentacionesService.findProductos().subscribe();
    this.presentacionesService.findAll().subscribe();
  }

  openForm(): void {
    this.clearMessages();
    this.editingPresentacion = null;
    this.isFormOpen = true;
  }

  openEditForm(presentacion: Presentacion): void {
    this.clearMessages();
    this.editingPresentacion = presentacion;
    this.isFormOpen = true;
  }

  closeForm(): void {
    this.isFormOpen = false;
    this.editingPresentacion = null;
  }

  savePresentacion(value: PresentacionFormValue): void {
    this.clearMessages();

    if (this.editingPresentacion) {
      const dto: UpdatePresentacionDto = {
        id_producto: value.id_producto,
        nombre_presentacion: value.name,
        sku: value.sku,
        unidad_medida: value.unidad_medida,
        factor_conversion: value.factor_conversion,
        controla_stock: value.controla_stock,
        estado_presentacion: value.estado_presentacion,
      };

      this.presentacionesService.update(this.editingPresentacion.id_presentacion, dto).subscribe({
        next: (updated) => {
          this.syncUpdatedPresentacion(updated);
          this.closeForm();
          this.showSuccess('La unidad de venta se actualizó correctamente.');
        },
        error: () => {},
      });
      return;
    }

    const dto: CreatePresentacionDto = {
      id_producto: value.id_producto,
      nombre_presentacion: value.name,
      sku: value.sku,
      unidad_medida: value.unidad_medida,
      factor_conversion: value.factor_conversion,
      controla_stock: value.controla_stock,
      estado_presentacion: value.estado_presentacion,
    };

    this.presentacionesService.create(dto).subscribe({
      next: () => {
        this.currentPage.set(1);
        this.closeForm();
        this.showSuccess('La nueva unidad de venta ya está disponible en el catálogo.');
      },
      error: () => {},
    });
  }

  requestDeletePresentacion(presentacion: Presentacion): void {
    this.deleteDialog = { mode: 'single', presentaciones: [presentacion] };
  }

  requestDeleteSelected(): void {
    if (this.selectedItems.length === 0) {
      return;
    }

    this.deleteDialog = { mode: 'bulk', presentaciones: [...this.selectedItems] };
  }

  closeDeleteDialog(): void {
    this.deleteDialog = null;
  }

  confirmDelete(): void {
    if (!this.deleteDialog) {
      return;
    }

    if (this.deleteDialog.mode === 'single') {
      this.deletePresentacion(this.deleteDialog.presentaciones[0]);
      return;
    }

    this.deleteSelected(this.deleteDialog.presentaciones);
  }

  private deletePresentacion(presentacion: Presentacion): void {
    this.clearMessages();

    this.presentacionesService.remove(presentacion.id_presentacion).subscribe({
      next: () => {
        if (this.activeItem?.id_presentacion === presentacion.id_presentacion) {
          this.activeItem = null;
        }
        this.selectedItems = this.selectedItems.filter(
          (selected) => selected.id_presentacion !== presentacion.id_presentacion
        );
        this.closeDeleteDialog();
        this.showSuccess(`La unidad de venta ${presentacion.nombre_presentacion} fue eliminada.`);
      },
    });
  }

  private deleteSelected(items: Presentacion[]): void {
    const ids = items.map((presentacion) => presentacion.id_presentacion);
    const selectedCount = ids.length;

    this.clearMessages();

    this.presentacionesService.removeBatch(ids).subscribe({
      next: () => {
        this.selectedItems = [];
        if (this.activeItem && ids.includes(this.activeItem.id_presentacion)) {
          this.activeItem = null;
        }
        this.closeDeleteDialog();
        this.showSuccess(`${selectedCount} unidades de venta fueron eliminadas correctamente.`);
      },
    });
  }

  showDetails(item: Presentacion): void {
    this.activeItem = item;
  }

  showRowDetails(event: TableRowEvent<Presentacion>): void {
    this.showDetails(event.item);
  }

  closeDetails(): void {
    this.activeItem = null;
  }

  clearSelection(): void {
    this.selectedItems = [];
  }

  refreshData(): void {
    this.clearMessages();
    this.presentacionesService.refresh().subscribe();
  }

  clearError(): void {
    this.presentacionesService.clearError();
  }

  clearMessages(): void {
    this.clearError();
    this.successMessage.set(null);
  }

  setPresentationFilterState(state: BarraFiltrosState): void {
    this.searchTerm.set(state.search);
    this.estadoFilter.set(this.toEstadoFilter(state.filters['estado']));
    this.stockFilter.set(this.toStockFilter(state.filters['stock']));
    this.resetListView();
  }

  setPageSize(value: number | string): void {
    this.pageSize.set(Number(value));
    this.currentPage.set(1);
    this.clearSelection();
  }

  goToPage(page: number): void {
    this.currentPage.set(Math.min(Math.max(page, 1), this.totalPages()));
  }

  getProductName(presentacion: Presentacion): string {
    return presentacion.t_productos?.nombre_producto
      ?? this.productos().find((producto) => producto.id_producto === presentacion.id_producto)?.nombre_producto
      ?? 'Producto sin resolver';
  }

  getStockLabel(presentacion: Presentacion): string {
    return presentacion.controla_stock ? 'Controla stock' : 'Sin control de stock';
  }

  formatFactor(presentacion: Presentacion): string {
    return Number(presentacion.factor_conversion).toLocaleString('es-PE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 4,
    });
  }

  getFactorLabel(presentacion: Presentacion): string {
    return `x ${this.formatFactor(presentacion)}`;
  }

  private syncUpdatedPresentacion(updated: Presentacion): void {
    if (this.activeItem?.id_presentacion === updated.id_presentacion) {
      this.activeItem = updated;
    }

    this.selectedItems = this.selectedItems.map((selected) =>
      selected.id_presentacion === updated.id_presentacion ? updated : selected
    );
  }

  private showSuccess(message: string): void {
    this.successMessage.set(message);
  }

  private resetListView(): void {
    this.currentPage.set(1);
    this.selectedItems = this.selectedItems.filter((selected) =>
      this.filteredPresentaciones().some((presentacion) => presentacion.id_presentacion === selected.id_presentacion)
    );
  }

  private normalizeText(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  private toEstadoFilter(value: string | undefined): EstadoFilter {
    return value === 'activo' || value === 'inactivo' || value === 'descontinuado'
      ? value
      : 'todos';
  }

  private toStockFilter(value: string | undefined): StockFilter {
    return value === 'controla' || value === 'no_controla' ? value : 'todos';
  }

  openPresentationImport(): void {
    this.presentationExcelManager?.openImport();
  }

  exportPresentations(): void {
    this.presentationExcelManager?.exportData();
  }

  handlePresentationExcelImport(event: ExcelImportCommit): void {
    const tasks: Array<() => Observable<Presentacion>> = [
      ...event.inserts.map((row) => () => this.presentacionesService.create(this.toCreatePresentacionDto(row))),
      ...event.updates.map((row) => () => this.presentacionesService.update(this.getExistingPresentacion(row).id_presentacion, this.toUpdatePresentacionDto(row, false))),
      ...event.replaces.map((row) => () => this.presentacionesService.update(this.getExistingPresentacion(row).id_presentacion, this.toUpdatePresentacionDto(row, true))),
    ];

    if (!tasks.length) {
      this.showSuccess('No se importaron registros. Todas las filas fueron omitidas.');
      return;
    }

    this.clearMessages();
    this.runImportTasks(tasks, 0, tasks.length);
  }

  private runImportTasks(tasks: Array<() => Observable<Presentacion>>, index: number, total: number): void {
    if (index >= tasks.length) {
      this.showSuccess(`${total} unidades de venta fueron procesadas correctamente desde Excel.`);
      this.currentPage.set(1);
      return;
    }

    tasks[index]().subscribe({
      next: () => this.runImportTasks(tasks, index + 1, total),
      error: () => {},
    });
  }

  private toCreatePresentacionDto(row: ExcelReviewRow): CreatePresentacionDto {
    const prodName = String(row.data['producto'] ?? '').trim();
    const product = this.productos().find(
      (p) => p.nombre_producto.toLowerCase().trim() === prodName.toLowerCase()
    );

    return {
      id_producto: product!.id_producto,
      nombre_presentacion: String(row.data['nombre_presentacion'] ?? '').trim(),
      sku: String(row.data['sku'] ?? '').trim(),
      codigo_barras: String(row.data['codigo_barras'] ?? '').trim() || undefined,
      unidad_medida: String(row.data['unidad_medida'] ?? 'NIU').trim().toUpperCase(),
      factor_conversion: Number(row.data['factor_conversion'] ?? 1.0000),
      controla_stock: this.toBooleanValue(row.data['controla_stock']),
      estado_presentacion: (row.data['estado_presentacion'] as EstadoProducto) || 'activo',
    };
  }

  private toUpdatePresentacionDto(row: ExcelReviewRow, replace: boolean): UpdatePresentacionDto {
    const prodName = String(row.data['producto'] ?? '').trim();
    const product = this.productos().find(
      (p) => p.nombre_producto.toLowerCase().trim() === prodName.toLowerCase()
    );

    return {
      id_producto: product ? product.id_producto : undefined,
      nombre_presentacion: String(row.data['nombre_presentacion'] ?? '').trim() || undefined,
      sku: String(row.data['sku'] ?? '').trim() || undefined,
      codigo_barras: row.data['codigo_barras'] !== undefined ? String(row.data['codigo_barras'] ?? '').trim() || null : undefined,
      unidad_medida: String(row.data['unidad_medida'] ?? '').trim().toUpperCase() || undefined,
      factor_conversion: row.data['factor_conversion'] !== undefined ? Number(row.data['factor_conversion']) : undefined,
      controla_stock: row.data['controla_stock'] !== undefined ? this.toBooleanValue(row.data['controla_stock']) : undefined,
      estado_presentacion: (row.data['estado_presentacion'] as EstadoProducto) || undefined,
    };
  }

  private getExistingPresentacion(row: ExcelReviewRow): Presentacion {
    return row.existingRecord as Presentacion;
  }

  private normalizeBooleanText(value: unknown): string {
    const val = String(value ?? '').trim().toLowerCase();
    if (val === 'si' || val === 'sí' || val === 'yes' || val === 'true' || val === '1' || val === 'Sí') {
      return 'Sí';
    }
    return 'No';
  }

  private toBooleanValue(value: unknown): boolean {
    const val = String(value ?? '').trim().toLowerCase();
    return val === 'si' || val === 'sí' || val === 'yes' || val === 'true' || val === '1' || val === 'Sí';
  }
}
