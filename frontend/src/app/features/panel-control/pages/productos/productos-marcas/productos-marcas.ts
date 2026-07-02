import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  AlertCircle,
  CheckCircle2,
  Edit2,
  Eraser,
  Eye,
  Image as ImageIcon,
  LucideAngularModule,
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
import { MarcaForm, MarcaFormValue } from './marca-form/marca-form';
import { MarcasService, Marca, CreateMarcaDto, UpdateMarcaDto } from './marcas.service';
import { environment } from '../../../../../../environment/environment';

type PageItem = number | 'ellipsis';
type EstadoFilter = 'todos' | 'activo' | 'inactivo';

const BRAND_FILTERS = [
  {
    id: 'estado',
    ariaLabel: 'Estado',
    options: [
      { label: 'Estado', value: 'todos' },
      { label: 'Activo', value: 'activo' },
      { label: 'Inactivo', value: 'inactivo' },
    ],
  },
] as const satisfies readonly BarraFiltroItem[];

@Component({
  selector: 'app-productos-marcas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    MarcaForm,
    BarraFiltros,
    Table,
    TableCellTemplate,
    ExcelDataManager,
  ],
  templateUrl: './productos-marcas.html',
  styleUrl: '../productos.scss',
})
export class ProductosMarcas implements OnInit {
  @ViewChild('brandExcelManager') brandExcelManager?: ExcelDataManager;

  EraserIcon = Eraser;
  PlusIcon = Plus;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  EyeIcon = Eye;
  ImageIcon = ImageIcon;
  AlertIcon = AlertCircle;
  SuccessIcon = CheckCircle2;
  CloseIcon = X;

  private readonly marcasService = inject(MarcasService);

  activeItem: Marca | null = null;
  selectedItems: Marca[] = [];
  isFormOpen = false;
  editingMarca: Marca | null = null;
  deleteDialog: { mode: 'single' | 'bulk'; marcas: Marca[] } | null = null;
  logoLoadErrors = new Set<number>();
  readonly pageSizeOptions = [5, 10, 20, 50];
  readonly brandColumns: TableColumn<Marca>[] = [
    { key: 'nombre_marca', label: 'Marca' },
    { key: 'descripcion_marca', label: 'Descripción', cellClass: 'text-gray font-medium', emptyText: '-' },
    { key: 'productos', label: 'Productos', value: (marca) => this.getProductCountLabel(marca), width: '130px' },
    { key: 'estado_marca', label: 'Estado', width: '120px' },
    // { key: 'fecha_modificacion', label: 'Actualizado', cellClass: 'text-gray font-medium', width: '170px' },
  ];
  readonly brandExcelConfig: ExcelDataConfig = {
    entityLabel: 'marcas',
    fileName: 'marcas',
    sheetName: 'Marcas',
    uniqueKey: 'nombre_marca',
    uniqueLabel: 'Marca',
    columns: [
      {
        key: 'nombre_marca',
        header: 'Marca',
        aliases: ['nombre', 'nombre_marca', 'marca'],
        required: true,
        exampleValue: 'Acme Beauty',
        maxLength: 100,
        transform: (value) => String(value ?? '').trim(),
      },
      {
        key: 'descripcion_marca',
        header: 'Descripción',
        aliases: ['descripcion', 'descripción', 'descripcion_marca'],
        exampleValue: 'Marca de cuidado personal',
        maxLength: 255,
        transform: (value) => String(value ?? '').trim(),
      },
      {
        key: 'estado_marca',
        header: 'Estado',
        aliases: ['estado', 'estado_marca'],
        defaultValue: 'activo',
        exampleValue: 'activo',
        transform: (value) => this.normalizeExcelText(String(value ?? 'activo')) || 'activo',
        validate: (value) => {
          const estado = String(value ?? '').trim();
          return estado === 'activo' || estado === 'inactivo'
            ? null
            : 'Estado debe ser activo o inactivo.';
        },
      },
    ],
  };
  readonly searchTerm = signal('');
  readonly estadoFilter = signal<EstadoFilter>('todos');
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly successMessage = signal<string | null>(null);

  // Reactive state from service
  readonly marcas = this.marcasService.marcas;
  readonly loading = this.marcasService.loading;
  readonly error = this.marcasService.error;
  readonly total = this.marcasService.total;
  readonly filteredMarcas = computed(() => {
    const term = this.normalizeText(this.searchTerm());
    const estado = this.estadoFilter();

    return this.marcas().filter((marca) => {
      const matchesEstado = estado === 'todos' || marca.estado_marca === estado;
      const searchable = [
        marca.nombre_marca,
        marca.descripcion_marca ?? '',
        marca.estado_marca,
        String(marca.id_marca),
      ].join(' ');

      return matchesEstado && (!term || this.normalizeText(searchable).includes(term));
    });
  });
  readonly filteredTotal = computed(() => this.filteredMarcas().length);
  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredTotal() / this.pageSize()))
  );
  readonly safeCurrentPage = computed(() =>
    Math.min(this.currentPage(), this.totalPages())
  );
  readonly paginatedMarcas = computed(() => {
    const start = (this.safeCurrentPage() - 1) * this.pageSize();
    return this.filteredMarcas().slice(start, start + this.pageSize());
  });
  readonly visiblePages = computed<PageItem[]>(() => {
    const total = this.totalPages();
    const current = this.safeCurrentPage();

    if (total <= 5) {
      return Array.from({ length: total }, (_, index) => index + 1);
    }

    const pages = new Set<number>([1, total, current, current - 1, current + 1]);
    const sortedPages = [...pages]
      .filter((page) => page >= 1 && page <= total)
      .sort((a, b) => a - b);

    return sortedPages.flatMap((page, index) => {
      const previous = sortedPages[index - 1];
      return previous && page - previous > 1 ? ['ellipsis' as const, page] : [page];
    });
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
  readonly brandFilterConfig = computed(() => ({
    filters: BRAND_FILTERS,
    searchValue: this.searchTerm(),
    filterValues: { estado: this.estadoFilter() },
    showClearButton: Boolean(this.searchTerm()) || this.estadoFilter() !== 'todos',
    actionDisabled: this.loading(),
    searchPlaceholder: 'Buscar por nombre, ID, estado o descripción',
    actionLabel: 'Nueva Marca',
  }));

  ngOnInit(): void {
    this.marcasService.findAll().subscribe();
  }

  openBrandImport(): void {
    this.brandExcelManager?.openImport();
  }

  exportBrands(): void {
    this.brandExcelManager?.exportData();
  }

  handleBrandExcelImport(event: ExcelImportCommit): void {
    const tasks: Array<() => Observable<Marca>> = [
      ...event.inserts.map((row) => () => this.marcasService.create(this.toCreateMarcaDto(row))),
      ...event.updates.map((row) => () => this.marcasService.update(this.getExistingMarca(row).id_marca, this.toUpdateMarcaDto(row, false))),
      ...event.replaces.map((row) => () => this.marcasService.update(this.getExistingMarca(row).id_marca, this.toUpdateMarcaDto(row, true))),
    ];

    if (!tasks.length) {
      this.showSuccess('No se importaron registros. Todas las filas fueron omitidas.');
      return;
    }

    this.clearMessages();
    this.runImportTasks(tasks, 0, tasks.length);
  }

  // ── Form Actions ────────────────────────────────────────────────────────

  openForm(): void {
    this.editingMarca = null;
    this.isFormOpen = true;
  }

  openEditForm(marca: Marca): void {
    this.editingMarca = marca;
    this.isFormOpen = true;
  }

  closeForm(): void {
    this.isFormOpen = false;
    this.editingMarca = null;
  }

  saveMarca(value: MarcaFormValue): void {
    this.clearMessages();

    if (this.editingMarca) {
      // Update existing
      const dto: UpdateMarcaDto = {
        nombre_marca: value.name,
        descripcion_marca: value.description || undefined,
        estado_marca: value.estado_marca,
      };
      this.marcasService.update(this.editingMarca.id_marca, dto).subscribe({
        next: (marca) => this.finishSaveWithLogo(
          marca,
          value.logoFile,
          'La marca se actualizó correctamente.'
        ),
        error: () => {}, // error is handled by the service signal
      });
    } else {
      // Create new
      const dto: CreateMarcaDto = {
        nombre_marca: value.name,
        descripcion_marca: value.description || undefined,
        estado_marca: value.estado_marca,
      };
      this.marcasService.create(dto).subscribe({
        next: (marca) => this.finishSaveWithLogo(
          marca,
          value.logoFile,
          'La nueva marca ya está disponible en el directorio.'
        ),
        error: () => {},
      });
    }
  }

  // ── Delete Actions ──────────────────────────────────────────────────────

  requestDeleteMarca(marca: Marca): void {
    this.deleteDialog = { mode: 'single', marcas: [marca] };
  }

  requestDeleteSelected(): void {
    if (this.selectedItems.length === 0) {
      return;
    }

    this.deleteDialog = { mode: 'bulk', marcas: [...this.selectedItems] };
  }

  closeDeleteDialog(): void {
    this.deleteDialog = null;
  }

  confirmDelete(): void {
    if (!this.deleteDialog) {
      return;
    }

    if (this.deleteDialog.mode === 'single') {
      this.deleteMarca(this.deleteDialog.marcas[0]);
      return;
    }

    this.deleteSelected(this.deleteDialog.marcas);
  }

  private deleteMarca(marca: Marca): void {
    this.clearMessages();

    this.marcasService.remove(marca.id_marca).subscribe({
      next: () => {
        if (this.activeItem?.id_marca === marca.id_marca) {
          this.activeItem = null;
        }
        this.selectedItems = this.selectedItems.filter(
          (s) => s.id_marca !== marca.id_marca
        );
        this.closeDeleteDialog();
        this.showSuccess(`La marca ${marca.nombre_marca} fue eliminada.`);
      },
    });
  }

  private deleteSelected(items: Marca[]): void {
    const ids = items.map((m) => m.id_marca);
    const selectedCount = ids.length;

    this.clearMessages();

    this.marcasService.removeBatch(ids).subscribe({
      next: () => {
        this.selectedItems = [];
        if (this.activeItem && ids.includes(this.activeItem.id_marca)) {
          this.activeItem = null;
        }
        this.closeDeleteDialog();
        this.showSuccess(`${selectedCount} marcas fueron eliminadas correctamente.`);
      },
    });
  }

  // ── Detail Panel ────────────────────────────────────────────────────────

  showDetails(item: Marca): void {
    this.activeItem = item;
  }

  showRowDetails(event: TableRowEvent<Marca>): void {
    this.showDetails(event.item);
  }

  closeDetails(): void {
    this.activeItem = null;
  }

  // ── Selection ───────────────────────────────────────────────────────────

  isSelected(item: Marca): boolean {
    return this.selectedItems.some((s) => s.id_marca === item.id_marca);
  }

  toggleSelection(item: Marca, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedItems = checked
      ? this.isSelected(item)
        ? this.selectedItems
        : [...this.selectedItems, item]
      : this.selectedItems.filter((s) => s.id_marca !== item.id_marca);
  }

  toggleAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const pageItems = this.paginatedMarcas();

    this.selectedItems = checked
      ? [
          ...this.selectedItems.filter(
            (selected) => !pageItems.some((item) => item.id_marca === selected.id_marca)
          ),
          ...pageItems,
        ]
      : this.selectedItems.filter(
          (selected) => !pageItems.some((item) => item.id_marca === selected.id_marca)
        );
  }

  areAllSelected(): boolean {
    const visibleIds = new Set(this.paginatedMarcas().map((marca) => marca.id_marca));

    return visibleIds.size > 0 && [...visibleIds].every((id) =>
      this.selectedItems.some((item) => item.id_marca === id)
    );
  }

  hasPartialSelection(): boolean {
    const selectedOnPage = this.paginatedMarcas().filter((item) => this.isSelected(item)).length;

    return selectedOnPage > 0 && !this.areAllSelected();
  }

  clearSelection(): void {
    this.selectedItems = [];
  }

  // ── Utilities ───────────────────────────────────────────────────────────

  refreshData(): void {
    this.clearMessages();
    this.marcasService.refresh().subscribe();
  }

  clearError(): void {
    this.marcasService.clearError();
  }

  clearMessages(): void {
    this.clearError();
    this.successMessage.set(null);
  }

  setBrandFilterState(state: BarraFiltrosState): void {
    this.searchTerm.set(state.search);
    this.estadoFilter.set(this.toEstadoFilter(state.filters['estado']));
    this.resetListView();
  }

  clearSearch(): void {
    this.searchTerm.set('');
    this.estadoFilter.set('todos');
    this.resetListView();
  }

  getRangeText(): string {
    const count = this.filteredTotal();

    return count > 0 ? `${this.getStartItem()}-${this.getEndItem()}` : '0';
  }

  getStartItem(): number {
    return this.filteredTotal() === 0
      ? 0
      : (this.safeCurrentPage() - 1) * this.pageSize() + 1;
  }

  getEndItem(): number {
    return Math.min(this.safeCurrentPage() * this.pageSize(), this.filteredTotal());
  }

  setPageSize(value: number | string): void {
    this.pageSize.set(Number(value));
    this.currentPage.set(1);
    this.clearSelection();
  }

  goToPage(page: number): void {
    this.currentPage.set(Math.min(Math.max(page, 1), this.totalPages()));
  }

  previousPage(): void {
    this.goToPage(this.safeCurrentPage() - 1);
  }

  nextPage(): void {
    this.goToPage(this.safeCurrentPage() + 1);
  }

  isFirstPage(): boolean {
    return this.safeCurrentPage() <= 1;
  }

  isLastPage(): boolean {
    return this.safeCurrentPage() >= this.totalPages();
  }

  /** Genera un color de fondo consistente basado en el ID */
  getBrandColor(marca: Marca): string {
    const colors = ['#1b2559', '#05cd99', '#ffb01a', '#ff5b5b', '#4318ff', '#a3aed1', '#868cff'];
    return colors[Number(marca.id_marca) % colors.length];
  }

  /** Obtiene la inicial de la marca para el logo */
  getBrandInitial(marca: Marca): string {
    return marca.nombre_marca.trim().charAt(0).toUpperCase() || 'M';
  }

  getProductCount(marca: Marca): number {
    return marca._count?.t_productos ?? 0;
  }

  getProductCountLabel(marca: Marca): string {
    const count = this.getProductCount(marca);
    return count === 1 ? '1 producto' : `${count} productos`;
  }

  getLogoUrl(marca: Marca): string | null {
    if (!marca.logo_url || this.logoLoadErrors.has(marca.id_marca)) {
      return null;
    }

    if (/^https?:\/\//i.test(marca.logo_url)) {
      return marca.logo_url;
    }

    return `${environment.apiUrl.replace(/\/api$/, '')}${marca.logo_url}`;
  }

  markLogoAsMissing(marca: Marca): void {
    this.logoLoadErrors.add(marca.id_marca);
  }

  private finishSaveWithLogo(marca: Marca, logoFile: File | null, successMessage: string): void {
    if (!logoFile) {
      this.closeForm();
      this.showSuccess(successMessage);
      return;
    }

    this.marcasService.uploadLogo(marca.id_marca, logoFile).subscribe({
      next: (updated) => {
        this.logoLoadErrors.delete(updated.id_marca);
        this.closeForm();
        this.showSuccess(`${successMessage} Logo actualizado.`);
      },
      error: () => {},
    });
  }

  private showSuccess(message: string): void {
    this.successMessage.set(message);
  }

  private runImportTasks(tasks: Array<() => Observable<Marca>>, index: number, total: number): void {
    if (index >= tasks.length) {
      this.showSuccess(`${total} marcas fueron procesadas correctamente desde Excel.`);
      this.currentPage.set(1);
      return;
    }

    tasks[index]().subscribe({
      next: () => this.runImportTasks(tasks, index + 1, total),
      error: () => {},
    });
  }

  private toCreateMarcaDto(row: ExcelReviewRow): CreateMarcaDto {
    return {
      nombre_marca: String(row.data['nombre_marca'] ?? '').trim(),
      descripcion_marca: String(row.data['descripcion_marca'] ?? '').trim() || undefined,
      estado_marca: this.toEstadoGenerico(row.data['estado_marca']),
    };
  }

  private toUpdateMarcaDto(row: ExcelReviewRow, replace: boolean): UpdateMarcaDto {
    const description = String(row.data['descripcion_marca'] ?? '').trim();

    return {
      nombre_marca: String(row.data['nombre_marca'] ?? '').trim(),
      ...(replace || description ? { descripcion_marca: description } : {}),
      estado_marca: this.toEstadoGenerico(row.data['estado_marca']),
    };
  }

  private getExistingMarca(row: ExcelReviewRow): Marca {
    return row.existingRecord as Marca;
  }

  private toEstadoGenerico(value: unknown): 'activo' | 'inactivo' {
    return this.normalizeExcelText(String(value ?? 'activo')) === 'inactivo' ? 'inactivo' : 'activo';
  }

  private resetListView(): void {
    this.currentPage.set(1);
    this.selectedItems = this.selectedItems.filter((selected) =>
      this.filteredMarcas().some((marca) => marca.id_marca === selected.id_marca)
    );
  }

  private normalizeText(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  private normalizeExcelText(value: string): string {
    return this.normalizeText(value);
  }

  private toEstadoFilter(value: string | undefined): EstadoFilter {
    return value === 'activo' || value === 'inactivo' ? value : 'todos';
  }
}
