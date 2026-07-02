import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Banknote,
  Building2,
  CheckCircle2,
  Clock3,
  Eraser,
  Eye,
  FileText,
  PackageCheck,
  Plus,
  Printer,
  Search,
  ShoppingBag,
  Truck,
  XCircle,
} from 'lucide-angular';
import {
  BarraFiltroItem,
  BarraFiltros,
  BarraFiltrosConfig,
  BarraFiltrosState,
} from '../../components/barra-filtros/barra-filtros';
import {
  Table,
  TableCellTemplate,
  TableColumn,
  TableRowEvent,
} from '../../components/table/table';

type PurchasePeriodFilter = 'mes' | 'hoy' | 'semana';
type PurchaseStatusFilter = 'todos' | 'Pendiente' | 'Recibida' | 'Confirmada' | 'Anulada';
type PurchasePaymentFilter = 'todos' | 'Pagada' | 'Por pagar' | 'Parcial' | 'Anulada';
type PurchaseFilterId = 'periodo' | 'estado' | 'pago';

interface PurchaseItem {
  name: string;
  qty: number;
  cost: number;
}

interface Purchase {
  id: string;
  doc: string;
  supplier: string;
  date: string;
  status: PurchaseStatusFilter;
  payment: PurchasePaymentFilter;
  responsible: string;
  total: number;
  items: PurchaseItem[];
}

const DEFAULT_PURCHASE_FILTERS: Record<PurchaseFilterId, string> = {
  periodo: 'mes',
  estado: 'todos',
  pago: 'todos',
};

const PURCHASE_FILTERS = [
  {
    id: 'periodo',
    ariaLabel: 'Periodo',
    options: [
      { label: 'Este mes', value: 'mes' },
      { label: 'Hoy', value: 'hoy' },
      { label: 'Esta semana', value: 'semana' },
    ],
  },
  {
    id: 'estado',
    ariaLabel: 'Recepción',
    options: [
      { label: 'Todos los estados', value: 'todos' },
      { label: 'Pendiente', value: 'Pendiente' },
      { label: 'Recibida', value: 'Recibida' },
      { label: 'Confirmada', value: 'Confirmada' },
      { label: 'Anulada', value: 'Anulada' },
    ],
  },
  {
    id: 'pago',
    ariaLabel: 'Pago',
    options: [
      { label: 'Estado de pago', value: 'todos' },
      { label: 'Pagada', value: 'Pagada' },
      { label: 'Por pagar', value: 'Por pagar' },
      { label: 'Parcial', value: 'Parcial' },
      { label: 'Anulada', value: 'Anulada' },
    ],
  },
] as const satisfies readonly BarraFiltroItem[];

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, BarraFiltros, Table, TableCellTemplate],
  templateUrl: './compras.html',
  styleUrl: './compras.scss',
})
export class Compras {
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  PrintIcon = Printer;
  CancelIcon = XCircle;
  ConfirmIcon = CheckCircle2;
  SupplierIcon = Building2;
  TruckIcon = Truck;

  searchTerm = '';
  purchaseFilterValues: Record<PurchaseFilterId, string> = { ...DEFAULT_PURCHASE_FILTERS };
  currentPage = 1;
  pageSize = 5;
  readonly pageSizeOptions = [5, 10, 25];

  readonly purchaseColumns: TableColumn<Purchase>[] = [
    { key: 'doc', label: 'Documento' },
    { key: 'supplier', label: 'Proveedor' },
    { key: 'date', label: 'Fecha', cellClass: 'muted-cell', width: '130px' },
    { key: 'status', label: 'Recepción', width: '130px' },
    { key: 'payment', label: 'Pago', width: '130px' },
    { key: 'total', label: 'Total', headerClass: 'text-right', cellClass: 'text-right total-cell', align: 'right', width: '130px' },
  ];

  kpis = [
    { label: 'Compras del mes', value: 'S/ 18,940', helper: '24 órdenes registradas', icon: ShoppingBag, tone: 'blue' },
    { label: 'Por recibir', value: '7', helper: 'Órdenes pendientes', icon: Truck, tone: 'amber' },
    { label: 'Confirmadas', value: '16', helper: 'Actualizan inventario', icon: PackageCheck, tone: 'green' },
    { label: 'Cuentas por pagar', value: 'S/ 4,320', helper: '3 proveedores', icon: Banknote, tone: 'rose' },
  ];

  purchases: Purchase[] = [
    { id: 'COM-208', doc: 'OC-000208', supplier: 'Distribuidora Norte SAC', date: '24 Abr 2026', status: 'Pendiente', payment: 'Por pagar', responsible: 'Anderson', total: 2450, items: [{ name: 'Zapatillas Urban Pro', qty: 20, cost: 118 }, { name: 'Gorra Snapback Retro', qty: 35, cost: 18 }] },
    { id: 'COM-207', doc: 'OC-000207', supplier: 'Textiles Rivera', date: '23 Abr 2026', status: 'Recibida', payment: 'Pagada', responsible: 'Lucía', total: 1320, items: [{ name: 'Polo Classic Fit Blanco', qty: 60, cost: 22 }] },
    { id: 'COM-206', doc: 'FC-F001-903', supplier: 'Importadora Global', date: '22 Abr 2026', status: 'Confirmada', payment: 'Parcial', responsible: 'Carlos', total: 3890, items: [{ name: 'Reloj SmartFit X', qty: 10, cost: 260 }] },
    { id: 'COM-205', doc: 'OC-000205', supplier: 'Outdoor Proveedores', date: '21 Abr 2026', status: 'Anulada', payment: 'Anulada', responsible: 'Anderson', total: 980, items: [{ name: 'Mochila Explorer 40L', qty: 8, cost: 122.5 }] },
  ];

  draftItems = [
    { name: 'Polo Classic Fit Blanco', qty: 40, cost: 22 },
    { name: 'Gorra Snapback Retro', qty: 20, cost: 18 },
  ];

  activePurchase: Purchase | null = null;
  selectedPurchases: Purchase[] = [];

  get purchaseFilterConfig(): BarraFiltrosConfig {
    return {
      filters: PURCHASE_FILTERS,
      filterValues: this.purchaseFilterValues,
      searchValue: this.searchTerm,
      showClearButton: this.hasActivePurchaseFilters,
      searchPlaceholder: 'Buscar por proveedor, orden o documento',
      actionLabel: 'Nueva compra',
    };
  }

  get hasActivePurchaseFilters(): boolean {
    return (
      Boolean(this.searchTerm) ||
      Object.entries(this.purchaseFilterValues).some(
        ([key, value]) => value !== DEFAULT_PURCHASE_FILTERS[key as PurchaseFilterId],
      )
    );
  }

  get filteredPurchases(): Purchase[] {
    const query = this.normalizeText(this.searchTerm);

    return this.purchases.filter((purchase) => {
      const matchesSearch =
        !query ||
        this.normalizeText([
          purchase.id,
          purchase.doc,
          purchase.supplier,
          purchase.responsible,
          purchase.status,
          purchase.payment,
        ].join(' ')).includes(query);

      const matchesStatus =
        this.purchaseFilterValues.estado === DEFAULT_PURCHASE_FILTERS.estado ||
        purchase.status === this.purchaseFilterValues.estado;

      const matchesPayment =
        this.purchaseFilterValues.pago === DEFAULT_PURCHASE_FILTERS.pago ||
        purchase.payment === this.purchaseFilterValues.pago;

      return matchesSearch && matchesStatus && matchesPayment;
    });
  }

  get paginatedPurchases(): Purchase[] {
    const start = (this.safeCurrentPage - 1) * this.pageSize;
    return this.filteredPurchases.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredPurchases.length / this.pageSize));
  }

  get safeCurrentPage(): number {
    return Math.min(this.currentPage, this.totalPages);
  }

  get subtotal() {
    return this.draftItems.reduce((sum, item) => sum + item.qty * item.cost, 0);
  }

  get tax() {
    return this.subtotal * 0.18;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  showPurchaseDetails(purchase: Purchase) {
    this.activePurchase = purchase;
  }

  showPurchaseRowDetails(event: TableRowEvent<Purchase>) {
    this.showPurchaseDetails(event.item);
  }

  closePurchaseDetails() {
    this.activePurchase = null;
  }

  clearSelection() {
    this.selectedPurchases = [];
  }

  setPurchaseFilterState(state: BarraFiltrosState): void {
    this.searchTerm = state.search;
    this.purchaseFilterValues = {
      periodo: state.filters['periodo'] ?? DEFAULT_PURCHASE_FILTERS.periodo,
      estado: state.filters['estado'] ?? DEFAULT_PURCHASE_FILTERS.estado,
      pago: state.filters['pago'] ?? DEFAULT_PURCHASE_FILTERS.pago,
    };
    this.currentPage = 1;
    this.selectedPurchases = this.selectedPurchases.filter((selected) =>
      this.filteredPurchases.some((purchase) => purchase.id === selected.id),
    );
  }

  setPage(page: number): void {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }

  setPageSize(value: number): void {
    this.pageSize = Number(value);
    this.currentPage = 1;
    this.clearSelection();
  }

  getStatusClass(status: string) {
    return {
      Pendiente: 'status-pending',
      Recibida: 'status-received',
      Confirmada: 'status-confirmed',
      Anulada: 'status-cancelled',
    }[status] || 'status-pending';
  }

  getPaymentClass(status: string) {
    return {
      Pagada: 'pay-paid',
      'Por pagar': 'pay-pending',
      Parcial: 'pay-partial',
      Anulada: 'pay-cancelled',
    }[status] || 'pay-pending';
  }

  private normalizeText(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }
}
