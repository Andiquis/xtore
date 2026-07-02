import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AlertCircle,
  CheckCircle2,
  Edit2,
  Eraser,
  Eye,
  FolderTree,
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
import { CategoriaForm, CategoriaFormValue } from './categoria-form/categoria-form';
import {
  Categoria,
  CategoriasService,
  CreateCategoriaDto,
  UpdateCategoriaDto,
} from './categorias.service';

type PageItem = number | 'ellipsis';
type EstadoFilter = 'todos' | 'activo' | 'inactivo';
type JerarquiaFilter = 'todos' | 'principales' | 'subcategorias';

const CATEGORY_FILTERS = [
  {
    id: 'estado',
    ariaLabel: 'Estado',
    options: [
      { label: 'Estado', value: 'todos' },
      { label: 'Activo', value: 'activo' },
      { label: 'Inactivo', value: 'inactivo' },
    ],
  },
  {
    id: 'jerarquia',
    ariaLabel: 'Jerarquía',
    options: [
      { label: 'Jerarquía', value: 'todos' },
      { label: 'Principales', value: 'principales' },
      { label: 'Subcategorías', value: 'subcategorias' },
    ],
  },
] as const satisfies readonly BarraFiltroItem[];

@Component({
  selector: 'app-productos-categorias',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    CategoriaForm,
    BarraFiltros,
    Table,
    TableCellTemplate,
    ExcelDataManager,
  ],
  templateUrl: './productos-categorias.html',
  styleUrl: '../productos.scss',
})
export class ProductosCategorias implements OnInit {
  @ViewChild('categoryExcelManager') categoryExcelManager?: ExcelDataManager;

  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  AlertIcon = AlertCircle;
  SuccessIcon = CheckCircle2;
  CloseIcon = X;
  FolderTreeIcon = FolderTree;

  private readonly categoriasService = inject(CategoriasService);

  activeItem: Categoria | null = null;
  selectedItems: Categoria[] = [];
  isFormOpen = false;
  editingCategoria: Categoria | null = null;
  deleteDialog: { mode: 'single' | 'bulk'; categorias: Categoria[] } | null = null;
  readonly pageSizeOptions = [5, 10, 20, 50];
  readonly categoryColumns: TableColumn<Categoria>[] = [
    { key: 'nombre_categoria', label: 'Categoría' },
    { key: 'padre', label: 'Categoría padre', value: (categoria) => this.getParentName(categoria), width: '180px' },
    { key: 'productos', label: 'Productos', value: (categoria) => this.getProductCountLabel(categoria), width: '130px' },
    { key: 'subcategorias', label: 'Subcategorías', value: (categoria) => this.getSubcategoryCountLabel(categoria), width: '150px' },
    { key: 'estado_categoria', label: 'Estado', width: '120px' },
    // { key: 'fecha_modificacion', label: 'Actualizado', cellClass: 'text-gray font-medium', width: '170px' },
  ];
  readonly categoryExcelConfig: ExcelDataConfig = {
    entityLabel: 'categorías',
    fileName: 'categorias',
    sheetName: 'Categorías',
    uniqueKey: 'nombre_categoria',
    uniqueLabel: 'Categoría + padre',
    uniqueValue: (value) => this.getCategoryUniqueValue(value),
    columns: [
      {
        key: 'nombre_categoria',
        header: 'Categoría',
        aliases: ['nombre', 'nombre_categoria', 'categoria', 'categoría'],
        required: true,
        exampleValue: 'Cuidado facial',
        maxLength: 120,
        transform: (value) => String(value ?? '').trim(),
      },
      {
        key: 'categoria_padre_nombre',
        header: 'Categoría padre',
        aliases: ['padre', 'categoria_padre', 'categoría padre', 'categoria_padre_nombre'],
        exampleValue: 'Belleza',
        transform: (value) => String(value ?? '').trim(),
        exportValue: (record) => this.getParentName(record as Categoria) === 'Categoría principal'
          ? ''
          : this.getParentName(record as Categoria),
        validate: (value, row) => this.validateParentName(value, row),
      },
      {
        key: 'estado_categoria',
        header: 'Estado',
        aliases: ['estado', 'estado_categoria'],
        defaultValue: 'activo',
        exampleValue: 'activo',
        transform: (value) => this.normalizeText(String(value ?? 'activo')) || 'activo',
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
  readonly jerarquiaFilter = signal<JerarquiaFilter>('todos');
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly successMessage = signal<string | null>(null);

  readonly categorias = this.categoriasService.categorias;
  readonly loading = this.categoriasService.loading;
  readonly error = this.categoriasService.error;
  readonly total = this.categoriasService.total;
  readonly filteredCategorias = computed(() => {
    const term = this.normalizeText(this.searchTerm());
    const estado = this.estadoFilter();
    const jerarquia = this.jerarquiaFilter();

    return this.categorias().filter((categoria) => {
      const matchesEstado = estado === 'todos' || categoria.estado_categoria === estado;
      const matchesJerarquia =
        jerarquia === 'todos'
        || (jerarquia === 'principales' && !categoria.id_categoria_padre)
        || (jerarquia === 'subcategorias' && Boolean(categoria.id_categoria_padre));
      const searchable = [
        categoria.nombre_categoria,
        this.getParentName(categoria),
        categoria.estado_categoria,
        String(categoria.id_categoria),
      ].join(' ');

      return matchesEstado && matchesJerarquia && (!term || this.normalizeText(searchable).includes(term));
    });
  });
  readonly filteredTotal = computed(() => this.filteredCategorias().length);
  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredTotal() / this.pageSize()))
  );
  readonly safeCurrentPage = computed(() =>
    Math.min(this.currentPage(), this.totalPages())
  );
  readonly paginatedCategorias = computed(() => {
    const start = (this.safeCurrentPage() - 1) * this.pageSize();
    return this.filteredCategorias().slice(start, start + this.pageSize());
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
  readonly categoryFilterConfig = computed(() => ({
    filters: CATEGORY_FILTERS,
    searchValue: this.searchTerm(),
    filterValues: {
      estado: this.estadoFilter(),
      jerarquia: this.jerarquiaFilter(),
    },
    showClearButton: Boolean(this.searchTerm())
      || this.estadoFilter() !== 'todos'
      || this.jerarquiaFilter() !== 'todos',
    actionDisabled: this.loading(),
    searchPlaceholder: 'Buscar por nombre, ID, estado o categoría padre',
    actionLabel: 'Nueva Categoría',
  }));

  ngOnInit(): void {
    this.categoriasService.findAll().subscribe();
  }

  openCategoryImport(): void {
    this.categoryExcelManager?.openImport();
  }

  exportCategories(): void {
    this.categoryExcelManager?.exportData();
  }

  handleCategoryExcelImport(event: ExcelImportCommit): void {
    const tasks: Array<() => Observable<Categoria>> = [
      ...event.inserts.map((row) => () => this.categoriasService.create(this.toCreateCategoriaDto(row))),
      ...event.updates.map((row) => () => this.categoriasService.update(this.getExistingCategoria(row).id_categoria, this.toUpdateCategoriaDto(row))),
      ...event.replaces.map((row) => () => this.categoriasService.update(this.getExistingCategoria(row).id_categoria, this.toUpdateCategoriaDto(row))),
    ];

    if (!tasks.length) {
      this.showSuccess('No se importaron registros. Todas las filas fueron omitidas.');
      return;
    }

    this.clearMessages();
    this.runImportTasks(tasks, 0, tasks.length);
  }

  openForm(): void {
    this.editingCategoria = null;
    this.isFormOpen = true;
  }

  openEditForm(categoria: Categoria): void {
    this.editingCategoria = categoria;
    this.isFormOpen = true;
  }

  closeForm(): void {
    this.isFormOpen = false;
    this.editingCategoria = null;
  }

  saveCategoria(value: CategoriaFormValue): void {
    this.clearMessages();

    if (this.editingCategoria) {
      const dto: UpdateCategoriaDto = {
        nombre_categoria: value.name,
        id_categoria_padre: value.id_categoria_padre,
        estado_categoria: value.estado_categoria,
      };

      this.categoriasService.update(this.editingCategoria.id_categoria, dto).subscribe({
        next: (updated) => {
          this.syncUpdatedCategoria(updated);
          this.closeForm();
          this.showSuccess('La categoría se actualizó correctamente.');
        },
        error: () => {},
      });
      return;
    }

    const dto: CreateCategoriaDto = {
      nombre_categoria: value.name,
      id_categoria_padre: value.id_categoria_padre,
      estado_categoria: value.estado_categoria,
    };

    this.categoriasService.create(dto).subscribe({
      next: () => {
        this.currentPage.set(1);
        this.closeForm();
        this.showSuccess('La nueva categoría ya está disponible en el catálogo.');
      },
      error: () => {},
    });
  }

  requestDeleteCategoria(categoria: Categoria): void {
    this.deleteDialog = { mode: 'single', categorias: [categoria] };
  }

  requestDeleteSelected(): void {
    if (this.selectedItems.length === 0) {
      return;
    }

    this.deleteDialog = { mode: 'bulk', categorias: [...this.selectedItems] };
  }

  closeDeleteDialog(): void {
    this.deleteDialog = null;
  }

  confirmDelete(): void {
    if (!this.deleteDialog) {
      return;
    }

    if (this.deleteDialog.mode === 'single') {
      this.deleteCategoria(this.deleteDialog.categorias[0]);
      return;
    }

    this.deleteSelected(this.deleteDialog.categorias);
  }

  private deleteCategoria(categoria: Categoria): void {
    this.clearMessages();

    this.categoriasService.remove(categoria.id_categoria).subscribe({
      next: () => {
        if (this.activeItem?.id_categoria === categoria.id_categoria) {
          this.activeItem = null;
        }
        this.selectedItems = this.selectedItems.filter(
          (selected) => selected.id_categoria !== categoria.id_categoria
        );
        this.closeDeleteDialog();
        this.showSuccess(`La categoría ${categoria.nombre_categoria} fue eliminada.`);
      },
    });
  }

  private deleteSelected(items: Categoria[]): void {
    const ids = items.map((categoria) => categoria.id_categoria);
    const selectedCount = ids.length;

    this.clearMessages();

    this.categoriasService.removeBatch(ids).subscribe({
      next: () => {
        this.selectedItems = [];
        if (this.activeItem && ids.includes(this.activeItem.id_categoria)) {
          this.activeItem = null;
        }
        this.closeDeleteDialog();
        this.showSuccess(`${selectedCount} categorías fueron eliminadas correctamente.`);
      },
    });
  }

  showDetails(item: Categoria): void {
    this.activeItem = item;
  }

  showRowDetails(event: TableRowEvent<Categoria>): void {
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
    this.categoriasService.refresh().subscribe();
  }

  clearError(): void {
    this.categoriasService.clearError();
  }

  clearMessages(): void {
    this.clearError();
    this.successMessage.set(null);
  }

  setCategoryFilterState(state: BarraFiltrosState): void {
    this.searchTerm.set(state.search);
    this.estadoFilter.set(this.toEstadoFilter(state.filters['estado']));
    this.jerarquiaFilter.set(this.toJerarquiaFilter(state.filters['jerarquia']));
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

  getParentName(categoria: Categoria): string {
    return categoria.categoria_padre?.nombre_categoria ?? 'Categoría principal';
  }

  getHierarchyLabel(categoria: Categoria): string {
    return categoria.id_categoria_padre ? 'Subcategoría' : 'Principal';
  }

  getSubcategoryCount(categoria: Categoria): number {
    return categoria._count?.subcategorias ?? categoria.subcategorias?.length ?? 0;
  }

  getSubcategoryCountLabel(categoria: Categoria): string {
    const count = this.getSubcategoryCount(categoria);
    return count === 1 ? '1 subcategoría' : `${count} subcategorías`;
  }

  getProductCount(categoria: Categoria): number {
    return categoria._count?.t_productos ?? 0;
  }

  getProductCountLabel(categoria: Categoria): string {
    const count = this.getProductCount(categoria);
    return count === 1 ? '1 producto' : `${count} productos`;
  }

  private showSuccess(message: string): void {
    this.successMessage.set(message);
  }

  private runImportTasks(tasks: Array<() => Observable<Categoria>>, index: number, total: number): void {
    if (index >= tasks.length) {
      this.showSuccess(`${total} categorías fueron procesadas correctamente desde Excel.`);
      this.currentPage.set(1);
      return;
    }

    tasks[index]().subscribe({
      next: () => this.runImportTasks(tasks, index + 1, total),
      error: () => {},
    });
  }

  private toCreateCategoriaDto(row: ExcelReviewRow): CreateCategoriaDto {
    return {
      nombre_categoria: String(row.data['nombre_categoria'] ?? '').trim(),
      id_categoria_padre: this.resolveParentId(row.data['categoria_padre_nombre']),
      estado_categoria: this.toEstadoGenerico(row.data['estado_categoria']),
    };
  }

  private toUpdateCategoriaDto(row: ExcelReviewRow): UpdateCategoriaDto {
    return {
      nombre_categoria: String(row.data['nombre_categoria'] ?? '').trim(),
      id_categoria_padre: this.resolveParentId(row.data['categoria_padre_nombre']),
      estado_categoria: this.toEstadoGenerico(row.data['estado_categoria']),
    };
  }

  private getExistingCategoria(row: ExcelReviewRow): Categoria {
    return row.existingRecord as Categoria;
  }

  private syncUpdatedCategoria(updated: Categoria): void {
    if (this.activeItem?.id_categoria === updated.id_categoria) {
      this.activeItem = updated;
    }

    this.selectedItems = this.selectedItems.map((selected) =>
      selected.id_categoria === updated.id_categoria ? updated : selected
    );
  }

  private resetListView(): void {
    this.currentPage.set(1);
    this.selectedItems = this.selectedItems.filter((selected) =>
      this.filteredCategorias().some((categoria) => categoria.id_categoria === selected.id_categoria)
    );
  }

  private normalizeText(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  private getCategoryUniqueValue(value: Record<string, unknown> | unknown): string {
    if (!value || typeof value !== 'object') {
      return '';
    }

    const data = value as Record<string, unknown>;
    const name = this.normalizeText(String(data['nombre_categoria'] ?? ''));
    const parentId = 'id_categoria_padre' in data
      ? data['id_categoria_padre'] ?? null
      : this.resolveParentId(data['categoria_padre_nombre']);

    return `${name}::${parentId ?? 'principal'}`;
  }

  private validateParentName(value: unknown, row: Record<string, unknown>): string | null {
    const parentName = String(value ?? '').trim();

    if (!parentName) {
      return null;
    }

    const parent = this.findCategoryByName(parentName);

    if (!parent) {
      return `Categoría padre "${parentName}" no existe. Déjala vacía para categoría principal o créala antes.`;
    }

    const categoryName = String(row['nombre_categoria'] ?? '').trim();
    const existing = this.findCategoryByName(categoryName);

    if (existing && existing.id_categoria === parent.id_categoria) {
      return 'Una categoría no puede ser su propia categoría padre.';
    }

    return null;
  }

  private resolveParentId(value: unknown): number | null {
    const parentName = String(value ?? '').trim();

    if (!parentName) {
      return null;
    }

    return this.findCategoryByName(parentName)?.id_categoria ?? null;
  }

  private findCategoryByName(value: string): Categoria | undefined {
    const normalized = this.normalizeText(value);

    return this.categorias().find((categoria) =>
      this.normalizeText(categoria.nombre_categoria) === normalized
    );
  }

  private toEstadoGenerico(value: unknown): 'activo' | 'inactivo' {
    return this.normalizeText(String(value ?? 'activo')) === 'inactivo' ? 'inactivo' : 'activo';
  }

  private toEstadoFilter(value: string | undefined): EstadoFilter {
    return value === 'activo' || value === 'inactivo' ? value : 'todos';
  }

  private toJerarquiaFilter(value: string | undefined): JerarquiaFilter {
    return value === 'principales' || value === 'subcategorias' ? value : 'todos';
  }
}
