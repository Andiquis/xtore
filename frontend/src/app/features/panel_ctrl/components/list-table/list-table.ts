import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef,
  computed,
  signal,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ─── Interfaces ────────────────────────────────────────────────
export interface TableColumn<T = any> {
  field: keyof T & string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'number' | 'date' | 'badge' | 'actions' | 'custom';
  badgeConfig?: BadgeConfig;
  format?: (value: any, row: T) => string;
}

export interface BadgeConfig {
  [key: string]: {
    variant: 'green' | 'amber' | 'rust' | 'blue' | 'purple';
    label?: string;
  };
}

export interface TableAction<T = any> {
  icon: string;
  label: string;
  callback: (row: T) => void;
  visible?: (row: T) => boolean;
  disabled?: (row: T) => boolean;
  variant?: 'default' | 'danger' | 'primary';
}

export interface PaginationConfig {
  enabled: boolean;
  pageSize: number;
  pageSizeOptions: number[];
}

export interface SortState {
  field: string;
  direction: 'asc' | 'desc' | null;
}

export interface TableConfig {
  title?: string;
  subtitle?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  selectable?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
  stickyHeader?: boolean;
  emptyMessage?: string;
  loadingMessage?: string;
}

// ─── Component ─────────────────────────────────────────────────
@Component({
  selector: 'app-list-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-table.html',
  styleUrl: './list-table.scss',
})
export class ListTable<T extends Record<string, any> = any> implements OnInit {
  // ─── Inputs ────────────────────────────────────────────────────
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = [];
  @Input() actions: TableAction<T>[] = [];
  @Input() loading = false;
  @Input() config: TableConfig = {};

  @Input() pagination: PaginationConfig = {
    enabled: false,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50],
  };

  // ─── Outputs ───────────────────────────────────────────────────
  @Output() rowClick = new EventEmitter<T>();
  @Output() rowDoubleClick = new EventEmitter<T>();
  @Output() selectionChange = new EventEmitter<T[]>();
  @Output() sortChange = new EventEmitter<SortState>();
  @Output() pageChange = new EventEmitter<{ page: number; pageSize: number }>();

  // ─── Content Children (Templates) ─────────────────────────────
  @ContentChild('cellTemplate') cellTemplate?: TemplateRef<any>;
  @ContentChild('headerTemplate') headerTemplate?: TemplateRef<any>;
  @ContentChild('emptyTemplate') emptyTemplate?: TemplateRef<any>;
  @ContentChild('loadingTemplate') loadingTemplate?: TemplateRef<any>;

  // ─── Signals (State) ───────────────────────────────────────────
  searchQuery = signal('');
  sortState = signal<SortState>({ field: '', direction: null });
  currentPage = signal(1);
  selectedRows = signal<Set<T>>(new Set());
  selectAll = signal(false);

  // ─── Computed Values ───────────────────────────────────────────
  filteredData = computed(() => {
    let result = [...this.data];
    const query = this.searchQuery().toLowerCase().trim();

    // Filtrar por búsqueda
    if (query) {
      result = result.filter((row) =>
        this.columns.some((col) => {
          const value = row[col.field];
          return value?.toString().toLowerCase().includes(query);
        }),
      );
    }

    // Ordenar
    const sort = this.sortState();
    if (sort.field && sort.direction) {
      result.sort((a, b) => {
        const aVal = a[sort.field];
        const bVal = b[sort.field];

        if (aVal === bVal) return 0;
        if (aVal === null || aVal === undefined) return 1;
        if (bVal === null || bVal === undefined) return -1;

        const comparison = aVal < bVal ? -1 : 1;
        return sort.direction === 'asc' ? comparison : -comparison;
      });
    }

    return result;
  });

  paginatedData = computed(() => {
    const filtered = this.filteredData();

    if (!this.pagination.enabled) {
      return filtered;
    }

    const start = (this.currentPage() - 1) * this.pagination.pageSize;
    const end = start + this.pagination.pageSize;
    return filtered.slice(start, end);
  });

  totalPages = computed(() => {
    if (!this.pagination.enabled) return 1;
    return Math.ceil(this.filteredData().length / this.pagination.pageSize);
  });

  totalRecords = computed(() => this.filteredData().length);

  paginationInfo = computed(() => {
    const total = this.totalRecords();
    const page = this.currentPage();
    const size = this.pagination.pageSize;
    const start = (page - 1) * size + 1;
    const end = Math.min(page * size, total);

    return { start, end, total };
  });

  // ─── Lifecycle ─────────────────────────────────────────────────
  ngOnInit(): void {
    // Configuración por defecto
    this.config = {
      searchable: true,
      searchPlaceholder: 'Buscar...',
      hoverable: true,
      emptyMessage: 'No hay datos disponibles',
      loadingMessage: 'Cargando datos...',
      ...this.config,
    };
  }

  // ─── Methods ───────────────────────────────────────────────────
  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
    this.currentPage.set(1); // Reset a primera página
  }

  onSort(column: TableColumn<T>): void {
    if (!column.sortable) return;

    const current = this.sortState();
    let direction: 'asc' | 'desc' | null = 'asc';

    if (current.field === column.field) {
      if (current.direction === 'asc') direction = 'desc';
      else if (current.direction === 'desc') direction = null;
    }

    const newState: SortState = { field: column.field, direction };
    this.sortState.set(newState);
    this.sortChange.emit(newState);
  }

  getSortIcon(column: TableColumn<T>): string {
    const sort = this.sortState();
    if (sort.field !== column.field || !sort.direction) return '↕';
    return sort.direction === 'asc' ? '↑' : '↓';
  }

  onRowClick(row: T): void {
    this.rowClick.emit(row);
  }

  onRowDoubleClick(row: T): void {
    this.rowDoubleClick.emit(row);
  }

  toggleRowSelection(row: T): void {
    const selected = new Set(this.selectedRows());
    if (selected.has(row)) {
      selected.delete(row);
    } else {
      selected.add(row);
    }
    this.selectedRows.set(selected);
    this.selectAll.set(selected.size === this.paginatedData().length);
    this.selectionChange.emit(Array.from(selected));
  }

  toggleSelectAll(): void {
    const allSelected = !this.selectAll();
    this.selectAll.set(allSelected);

    if (allSelected) {
      this.selectedRows.set(new Set(this.paginatedData()));
    } else {
      this.selectedRows.set(new Set());
    }
    this.selectionChange.emit(Array.from(this.selectedRows()));
  }

  isSelected(row: T): boolean {
    return this.selectedRows().has(row);
  }

  // ─── Pagination ────────────────────────────────────────────────
  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage.set(page);
    this.pageChange.emit({ page, pageSize: this.pagination.pageSize });
  }

  onPageSizeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.pagination.pageSize = Number(target.value);
    this.currentPage.set(1);
    this.pageChange.emit({ page: 1, pageSize: this.pagination.pageSize });
  }

  getPageNumbers(): number[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];

    // Mostrar máximo 5 páginas
    let start = Math.max(1, current - 2);
    let end = Math.min(total, start + 4);

    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  // ─── Cell Rendering ────────────────────────────────────────────
  getCellValue(row: T, column: TableColumn<T>): any {
    const value = row[column.field];

    if (column.format) {
      return column.format(value, row);
    }

    if (column.type === 'date' && value) {
      return new Date(value).toLocaleDateString('es-PE');
    }

    return value ?? '—';
  }

  getBadgeClass(value: any, column: TableColumn<T>): string {
    if (!column.badgeConfig || !column.badgeConfig[value]) {
      return 'badge--default';
    }
    return `badge--${column.badgeConfig[value].variant}`;
  }

  getBadgeLabel(value: any, column: TableColumn<T>): string {
    if (!column.badgeConfig || !column.badgeConfig[value]) {
      return value;
    }
    return column.badgeConfig[value].label ?? value;
  }

  // ─── Actions ───────────────────────────────────────────────────
  isActionVisible(action: TableAction<T>, row: T): boolean {
    return action.visible ? action.visible(row) : true;
  }

  isActionDisabled(action: TableAction<T>, row: T): boolean {
    return action.disabled ? action.disabled(row) : false;
  }

  executeAction(action: TableAction<T>, row: T, event: Event): void {
    event.stopPropagation();
    if (!this.isActionDisabled(action, row)) {
      action.callback(row);
    }
  }

  // ─── Utilities ─────────────────────────────────────────────────
  trackByField(index: number, row: T): any {
    return row['id'] ?? index;
  }

  trackByColumn(index: number, column: TableColumn<T>): string {
    return column.field;
  }

  getColumnStyle(column: TableColumn<T>): Record<string, string> {
    const style: Record<string, string> = {};

    if (column.width) {
      style['width'] = column.width;
      style['min-width'] = column.width;
    }

    if (column.align) {
      style['text-align'] = column.align;
    }

    return style;
  }

  getTableClasses(): string[] {
    const classes = ['data-table'];

    if (this.config.striped) classes.push('data-table--striped');
    if (this.config.hoverable) classes.push('data-table--hoverable');
    if (this.config.bordered) classes.push('data-table--bordered');
    if (this.config.compact) classes.push('data-table--compact');
    if (this.config.stickyHeader) classes.push('data-table--sticky');

    return classes;
  }
}
