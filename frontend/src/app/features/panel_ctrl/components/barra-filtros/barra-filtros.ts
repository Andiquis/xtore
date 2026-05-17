import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Eraser, Plus, Search } from 'lucide-angular';

export interface BarraFiltroItem {
  id: string;
  options: readonly BarraFiltroOption[];
  value?: string;
  ariaLabel?: string;
}

export type BarraFiltroOption = string | {
  label: string;
  value: string;
};

export interface BarraFiltrosConfig {
  searchPlaceholder?: string;
  searchValue?: string;
  filters?: readonly BarraFiltroItem[];
  filterValues?: Record<string, string>;
  showClearButton?: boolean;
  actionLabel?: string;
  actionDisabled?: boolean;
}

export interface BarraFiltrosState {
  search: string;
  filters: Record<string, string>;
}

@Component({
  selector: 'app-barra-filtros',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './barra-filtros.html',
  styleUrl: './barra-filtros.scss',
})
export class BarraFiltros implements OnChanges {
  @Input() config: BarraFiltrosConfig | null = null;
  @Input() searchPlaceholder = 'Buscar';
  @Input() searchValue = '';
  @Input() filters: readonly BarraFiltroItem[] = [];
  @Input() filterValues: Record<string, string> = {};
  @Input() actionLabel = '';
  @Input() actionDisabled = false;
  @Input() showClearButton = true;

  @Output() searchChange = new EventEmitter<string>();
  @Output() filtersChange = new EventEmitter<Record<string, string>>();
  @Output() clearFilters = new EventEmitter<void>();
  @Output() actionClick = new EventEmitter<void>();
  @Output() stateChange = new EventEmitter<BarraFiltrosState>();

  readonly SearchIcon = Search;
  readonly EraserIcon = Eraser;
  readonly PlusIcon = Plus;

  searchTerm = '';
  selectedFilters: Record<string, string> = {};

  ngOnChanges(): void {
    this.searchTerm = this.resolvedSearchValue;
    this.syncSelectedFilters();
  }

  onSearchChange(): void {
    this.searchChange.emit(this.searchTerm);
    this.emitState();
  }

  onFilterChange(): void {
    this.filtersChange.emit({ ...this.selectedFilters });
    this.emitState();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedFilters = this.getDefaultFilterValues();
    this.searchChange.emit(this.searchTerm);
    this.filtersChange.emit({ ...this.selectedFilters });
    this.emitState();
    this.clearFilters.emit();
  }

  private syncSelectedFilters(): void {
    this.selectedFilters = this.resolvedFilters.reduce<Record<string, string>>((selected, filter) => {
      selected[filter.id] =
        this.resolvedFilterValues[filter.id] ?? filter.value ?? this.getOptionValue(filter.options[0]);
      return selected;
    }, {});
  }

  private getDefaultFilterValues(): Record<string, string> {
    return this.resolvedFilters.reduce<Record<string, string>>((selected, filter) => {
      selected[filter.id] = filter.value ?? this.getOptionValue(filter.options[0]);
      return selected;
    }, {});
  }

  private emitState(): void {
    this.stateChange.emit({
      search: this.searchTerm,
      filters: { ...this.selectedFilters },
    });
  }

  getOptionLabel(option: BarraFiltroOption): string {
    return typeof option === 'string' ? option : option.label;
  }

  getOptionValue(option: BarraFiltroOption | undefined): string {
    if (!option) {
      return '';
    }

    return typeof option === 'string' ? option : option.value;
  }

  get resolvedSearchPlaceholder(): string {
    return this.config?.searchPlaceholder ?? this.searchPlaceholder;
  }

  get resolvedSearchValue(): string {
    return this.config?.searchValue ?? this.searchValue;
  }

  get resolvedFilters(): readonly BarraFiltroItem[] {
    return this.config?.filters ?? this.filters;
  }

  get resolvedFilterValues(): Record<string, string> {
    return this.config?.filterValues ?? this.filterValues;
  }

  get resolvedShowClearButton(): boolean {
    return this.config?.showClearButton ?? this.showClearButton;
  }

  get resolvedActionLabel(): string {
    return this.config?.actionLabel ?? this.actionLabel;
  }

  get resolvedActionDisabled(): boolean {
    return this.config?.actionDisabled ?? this.actionDisabled;
  }
}
