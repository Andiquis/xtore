import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileDown, FileUp, LucideAngularModule } from 'lucide-angular';
import {
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';

export type TableValueGetter<T> = keyof T | ((item: T, index: number) => unknown);
export type TableClassResolver<T> = string | string[] | Record<string, boolean> | ((item: T, index: number) => string | string[] | Record<string, boolean>);

export interface TableColumn<T = unknown> {
  key: string;
  label: string;
  value?: TableValueGetter<T>;
  dataLabel?: string;
  headerClass?: string | string[] | Record<string, boolean>;
  cellClass?: TableClassResolver<T>;
  width?: string;
  align?: 'left' | 'center' | 'right';
  emptyText?: string;
  formatter?: (value: unknown, item: T, index: number) => string | number;
}

export interface TableRowEvent<T = unknown> {
  item: T;
  index: number;
  event: MouseEvent | KeyboardEvent;
}

export interface TableSelectionEvent<T = unknown> {
  selectedItems: T[];
  changedItem?: T;
  checked: boolean;
}

export interface TableCellContext<T = unknown> {
  $implicit: T;
  item: T;
  column: TableColumn<T>;
  value: unknown;
  index: number;
  selected: boolean;
  active: boolean;
}

export type TablePageItem = number | 'ellipsis';

@Directive({
  selector: 'ng-template[appTableCell]',
  standalone: true,
})
export class TableCellTemplate<T = unknown> {
  @Input('appTableCell') columnKey = '';

  constructor(public readonly template: TemplateRef<TableCellContext<T>>) {}
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table<T = unknown> {
  ImportIcon = FileUp;
  ExportIcon = FileDown;

  @Input() title = '';
  @Input() description = '';
  @Input() countLabel = '';
  @Input() emptyMessage = 'No hay registros para mostrar.';
  @Input() showEmptyState = true;
  @Input() showDataActions = false;
  @Input() minWidth = '800px';

  @Input() showPagination = false;
  @Input() totalItems: number | null = null;
  @Input() currentPage = 1;
  @Input() pageSize: number | null = null;
  @Input() pageSizeOptions: readonly number[] = [];
  @Input() showPageSize = false;
  @Input() showPageStatus = false;
  @Input() itemLabel = 'registros';
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();
  @Output() importClick = new EventEmitter<void>();
  @Output() exportClick = new EventEmitter<void>();

  @Input() items: readonly T[] = [];
  @Input() columns: readonly TableColumn<T>[] = [];
  @Input() keyField: keyof T | ((item: T) => unknown) = 'id' as keyof T;

  @Input() selectable = false;
  @Input() selectedItems: readonly T[] = [];
  @Output() selectedItemsChange = new EventEmitter<T[]>();
  @Output() selectionChange = new EventEmitter<TableSelectionEvent<T>>();

  @Input() activeItem: T | null = null;
  @Output() activeItemChange = new EventEmitter<T | null>();

  @Input() rowClickable = true;
  @Output() rowClick = new EventEmitter<TableRowEvent<T>>();
  @Output() rowDoubleClick = new EventEmitter<TableRowEvent<T>>();

  @ContentChildren(TableCellTemplate) cellTemplates?: QueryList<TableCellTemplate<T>>;
  @ViewChildren('selectionCheckbox') selectionCheckboxes?: QueryList<ElementRef<HTMLInputElement>>;

  private selectionAnchorIndex: number | null = null;
  private keyboardRangeKeys = new Set<unknown>();

  get hasHeader(): boolean {
    return !!(this.title || this.description || this.countLabel);
  }

  get hasRows(): boolean {
    return this.items.length > 0;
  }

  get resolvedPageSize(): number {
    return this.pageSize ?? Math.max(this.items.length, 1);
  }

  get resolvedTotalItems(): number {
    return this.totalItems ?? this.items.length;
  }

  get resolvedTotalPages(): number {
    return Math.max(1, Math.ceil(this.resolvedTotalItems / this.resolvedPageSize));
  }

  get safeCurrentPage(): number {
    return Math.min(Math.max(this.currentPage, 1), this.resolvedTotalPages);
  }

  get pageStart(): number {
    if (this.resolvedTotalItems === 0) {
      return 0;
    }

    return (this.safeCurrentPage - 1) * this.resolvedPageSize + 1;
  }

  get pageEnd(): number {
    if (this.resolvedTotalItems === 0) {
      return 0;
    }

    return Math.min(this.safeCurrentPage * this.resolvedPageSize, this.resolvedTotalItems);
  }

  get visiblePages(): TablePageItem[] {
    const total = this.resolvedTotalPages;
    const current = this.safeCurrentPage;

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
  }

  trackByItem = (index: number, item: T): unknown => this.getItemKey(item) ?? index;

  getCellTemplate(columnKey: string): TableCellTemplate<T> | undefined {
    return this.cellTemplates?.find((cellTemplate) => cellTemplate.columnKey === columnKey);
  }

  getCellContext(item: T, column: TableColumn<T>, index: number): TableCellContext<T> {
    return {
      $implicit: item,
      item,
      column,
      value: this.getCellValue(item, column, index),
      index,
      selected: this.isSelected(item),
      active: this.isActive(item),
    };
  }

  getCellValue(item: T, column: TableColumn<T>, index: number): unknown {
    if (typeof column.value === 'function') {
      return column.value(item, index);
    }

    const key = column.value ?? column.key;
    return this.readValue(item, key as string);
  }

  getDisplayValue(item: T, column: TableColumn<T>, index: number): string | number {
    const value = this.getCellValue(item, column, index);

    if (column.formatter) {
      return column.formatter(value, item, index);
    }

    if (value === null || value === undefined || value === '') {
      return column.emptyText ?? '-';
    }

    return String(value);
  }

  getCellClass(item: T, column: TableColumn<T>, index: number): string | string[] | Record<string, boolean> | null {
    if (!column.cellClass) {
      return null;
    }

    return typeof column.cellClass === 'function'
      ? column.cellClass(item, index)
      : column.cellClass;
  }

  getColumnStyle(column: TableColumn<T>): Record<string, string> | null {
    if (!column.width && !column.align) {
      return null;
    }

    return {
      ...(column.width ? { width: column.width } : {}),
      ...(column.align ? { 'text-align': column.align } : {}),
    };
  }

  isActive(item: T): boolean {
    return !!this.activeItem && this.sameItem(this.activeItem, item);
  }

  isSelected(item: T): boolean {
    return this.selectedItems.some((selectedItem) => this.sameItem(selectedItem, item));
  }

  areAllSelected(): boolean {
    return this.items.length > 0 && this.items.every((item) => this.isSelected(item));
  }

  hasPartialSelection(): boolean {
    const selectedVisibleCount = this.items.filter((item) => this.isSelected(item)).length;
    return selectedVisibleCount > 0 && selectedVisibleCount < this.items.length;
  }

  onRowClick(item: T, index: number, event: MouseEvent | KeyboardEvent): void {
    if (!this.rowClickable) {
      return;
    }

    this.activeItem = item;
    this.activeItemChange.emit(item);
    this.rowClick.emit({ item, index, event });
  }

  onRowDoubleClick(item: T, index: number, event: MouseEvent): void {
    this.rowDoubleClick.emit({ item, index, event });
  }

  onRowKeydown(item: T, index: number, event: KeyboardEvent): void {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    this.onRowClick(item, index, event);
  }

  toggleSelection(item: T, index: number, event: Event): void {
    event.stopPropagation();
    const checked = (event.target as HTMLInputElement).checked;
    this.setSingleSelection(item, index, checked);
  }

  toggleSelectionFromCell(item: T, index: number, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.setSingleSelection(item, index, !this.isSelected(item));
    this.focusSelectionCheckbox(index);
  }

  onSelectionCellKeydown(item: T, index: number, event: KeyboardEvent): void {
    if (event.target instanceof HTMLInputElement || (event.key !== 'Enter' && event.key !== ' ')) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.setSingleSelection(item, index, !this.isSelected(item));
    this.focusSelectionCheckbox(index);
  }

  onSelectionKeydown(item: T, index: number, event: KeyboardEvent): void {
    if (!event.shiftKey || (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const direction = event.key === 'ArrowDown' ? 1 : -1;
    const targetIndex = Math.min(Math.max(index + direction, 0), this.items.length - 1);

    if (targetIndex === index && this.selectionAnchorIndex !== null) {
      return;
    }

    if (this.selectionAnchorIndex === null) {
      this.selectionAnchorIndex = index;
    }

    const rangeStart = Math.min(this.selectionAnchorIndex, targetIndex);
    const rangeEnd = Math.max(this.selectionAnchorIndex, targetIndex);
    const rangeItems = this.items.slice(rangeStart, rangeEnd + 1);
    const rangeKeys = new Set(rangeItems.map((rangeItem) => this.getItemKey(rangeItem)));
    const selectedOutsidePreviousKeyboardRange = this.selectedItems.filter(
      (selectedItem) => !this.keyboardRangeKeys.has(this.getItemKey(selectedItem)),
    );
    const nextSelectedItems = [...selectedOutsidePreviousKeyboardRange];

    rangeItems.forEach((rangeItem) => {
      if (!nextSelectedItems.some((selectedItem) => this.sameItem(selectedItem, rangeItem))) {
        nextSelectedItems.push(rangeItem);
      }
    });

    this.keyboardRangeKeys = rangeKeys;
    this.emitSelection(nextSelectedItems, true, this.items[targetIndex]);
    this.focusSelectionCheckbox(targetIndex);
  }

  toggleAll(event: Event): void {
    event.stopPropagation();
    const checked = (event.target as HTMLInputElement).checked;
    const nextSelectedItems = checked ? this.mergeSelectedWithVisible() : this.removeVisibleFromSelection();
    this.selectionAnchorIndex = null;
    this.keyboardRangeKeys.clear();
    this.emitSelection(nextSelectedItems, checked);
  }

  goToPage(page: number): void {
    const safePage = Math.min(Math.max(page, 1), this.resolvedTotalPages);

    if (safePage !== this.safeCurrentPage) {
      this.pageChange.emit(safePage);
    }
  }

  previousPage(): void {
    this.goToPage(this.safeCurrentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.safeCurrentPage + 1);
  }

  onPageSizeChange(value: number | string): void {
    this.pageSizeChange.emit(Number(value));
  }

  private emitSelection(selectedItems: T[], checked: boolean, changedItem?: T): void {
    this.selectedItems = selectedItems;
    this.selectedItemsChange.emit(selectedItems);
    this.selectionChange.emit({ selectedItems, checked, changedItem });
  }

  private setSingleSelection(item: T, index: number, checked: boolean): void {
    const selectedItems = checked
      ? this.isSelected(item) ? [...this.selectedItems] : [...this.selectedItems, item]
      : this.selectedItems.filter((selectedItem) => !this.sameItem(selectedItem, item));

    this.selectionAnchorIndex = index;
    this.keyboardRangeKeys.clear();
    this.emitSelection(selectedItems, checked, item);
  }

  private focusSelectionCheckbox(index: number): void {
    setTimeout(() => {
      this.selectionCheckboxes?.get(index)?.nativeElement.focus();
    });
  }

  private mergeSelectedWithVisible(): T[] {
    const selectedItems = [...this.selectedItems];

    this.items.forEach((item) => {
      if (!selectedItems.some((selectedItem) => this.sameItem(selectedItem, item))) {
        selectedItems.push(item);
      }
    });

    return selectedItems;
  }

  private removeVisibleFromSelection(): T[] {
    return this.selectedItems.filter(
      (selectedItem) => !this.items.some((item) => this.sameItem(selectedItem, item)),
    );
  }

  private sameItem(first: T, second: T): boolean {
    return this.getItemKey(first) === this.getItemKey(second);
  }

  private getItemKey(item: T): unknown {
    return typeof this.keyField === 'function'
      ? this.keyField(item)
      : this.readValue(item, this.keyField as string);
  }

  private readValue(item: T, path: string): unknown {
    if (!item || !path) {
      return undefined;
    }

    return path.split('.').reduce<unknown>((value, key) => {
      if (value && typeof value === 'object' && key in value) {
        return (value as Record<string, unknown>)[key];
      }

      return undefined;
    }, item);
  }
}
