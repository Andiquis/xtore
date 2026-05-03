import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Banknote,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Eraser,
  Eye,
  FileText,
  Minus,
  MoreHorizontal,
  Plus,
  Printer,
  RotateCcw,
  Search,
  ShoppingBag,
  Trash2,
  User,
  WalletCards,
  XCircle,
  X,
  Percent,
  Receipt,
  Smartphone,
} from 'lucide-angular';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.scss',
})
export class Ventas {
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  MinusIcon = Minus;
  EyeIcon = Eye;
  PrintIcon = Printer;
  CancelIcon = XCircle;
  RefundIcon = RotateCcw;
  MoreIcon = MoreHorizontal;
  ReceiptIcon = FileText;
  CustomerIcon = User;
  PaymentIcon = CreditCard;
  TotalIcon = Banknote;
  TrashIcon = Trash2;
  CloseIcon = X;
  PercentIcon = Percent;
  ReceiptAltIcon = Receipt;
  PhoneIcon = Smartphone;

  // ── Estado del POS ──
  selectedPaymentMethod = 'Efectivo';
  selectedComprobante = 'Boleta';
  clienteNombre = '';
  clienteDocumento = '';
  productSearch = '';
  globalDiscount = 0;

  paymentMethods = [
    { name: 'Efectivo', icon: Banknote },
    { name: 'Tarjeta', icon: CreditCard },
    { name: 'Yape', icon: Smartphone },
    { name: 'Transferencia', icon: WalletCards },
  ];

  // ── Catálogo de productos (para búsqueda) ──
  productCatalog = [
    { id: 'PRD-001', name: 'Zapatillas Urban Pro', price: 249.9, sku: 'ZPT-URB-01' },
    { id: 'PRD-002', name: 'Polo Classic Fit Blanco', price: 45.0, sku: 'POL-CLA-02' },
    { id: 'PRD-003', name: 'Mochila Explorer 40L', price: 189.9, sku: 'MOC-EXP-03' },
    { id: 'PRD-004', name: 'Gorra Snapback Retro', price: 35.5, sku: 'GOR-SNA-04' },
    { id: 'PRD-005', name: 'Casaca Térmica Wind', price: 135.0, sku: 'CAS-TER-05' },
    { id: 'PRD-006', name: 'Reloj SmartFit X', price: 320.0, sku: 'REL-SMA-06' },
  ];

  get filteredProducts() {
    if (!this.productSearch || this.productSearch.length < 2) return [];
    const q = this.productSearch.toLowerCase();
    return this.productCatalog.filter(p =>
      p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
    ).slice(0, 5);
  }

  // ── KPIs ──
  kpis = [
    { label: 'Ventas de hoy', value: 'S/ 8,420.50', helper: '+14.2% vs ayer', icon: Banknote, tone: 'blue' },
    { label: 'Comprobantes', value: '38', helper: '32 boletas · 6 facturas', icon: FileText, tone: 'green' },
    { label: 'Ticket promedio', value: 'S/ 221.59', helper: 'Promedio del día', icon: ShoppingBag, tone: 'amber' },
    { label: 'Pendientes', value: '4', helper: 'Requieren revisión', icon: CalendarDays, tone: 'rose' },
  ];

  // ── Datos Mock: Ventas ──
  sales = [
    {
      id: 'VTA-1048', comprobante: 'B001-000438', cliente: 'María López', vendedor: 'Anderson',
      fecha: '24 Abr 2026', hora: '10:42', metodo: 'Tarjeta', estado: 'Pagada', total: 458.9,
      items: [
        { name: 'Zapatillas Urban Pro', qty: 1, price: 249.9 },
        { name: 'Polo Classic Fit Blanco', qty: 2, price: 45 },
        { name: 'Gorra Snapback Retro', qty: 1, price: 35.5 },
      ],
    },
    {
      id: 'VTA-1047', comprobante: 'F001-000092', cliente: 'Comercial Rivera SAC', vendedor: 'Lucía',
      fecha: '24 Abr 2026', hora: '10:18', metodo: 'Transferencia', estado: 'Emitida', total: 1280,
      items: [
        { name: 'Mochila Explorer 40L', qty: 4, price: 189.9 },
        { name: 'Reloj SmartFit X', qty: 1, price: 320 },
      ],
    },
    {
      id: 'VTA-1046', comprobante: 'B001-000437', cliente: 'Luis Torres', vendedor: 'Anderson',
      fecha: '24 Abr 2026', hora: '09:55', metodo: 'Efectivo', estado: 'Pagada', total: 135,
      items: [{ name: 'Casaca Térmica Wind', qty: 1, price: 135 }],
    },
    {
      id: 'VTA-1045', comprobante: 'B001-000436', cliente: 'Ana Paredes', vendedor: 'Carlos',
      fecha: '23 Abr 2026', hora: '18:22', metodo: 'Yape', estado: 'Pendiente', total: 224.5,
      items: [
        { name: 'Gorra Snapback Retro', qty: 3, price: 35.5 },
        { name: 'Polo Classic Fit Blanco', qty: 2, price: 45 },
      ],
    },
    {
      id: 'VTA-1044', comprobante: 'B001-000435', cliente: 'Diego Salas', vendedor: 'Lucía',
      fecha: '23 Abr 2026', hora: '17:04', metodo: 'Tarjeta', estado: 'Anulada', total: 320,
      items: [{ name: 'Reloj SmartFit X', qty: 1, price: 320 }],
    },
    {
      id: 'VTA-1043', comprobante: 'B001-000434', cliente: 'Rosa Mendoza', vendedor: 'Anderson',
      fecha: '23 Abr 2026', hora: '15:30', metodo: 'Efectivo', estado: 'Pagada', total: 375.4,
      items: [
        { name: 'Polo Classic Fit Blanco', qty: 3, price: 45 },
        { name: 'Mochila Explorer 40L', qty: 1, price: 189.9 },
      ],
    },
    {
      id: 'VTA-1042', comprobante: 'F001-000091', cliente: 'Distribuidora Lima SAC', vendedor: 'Carlos',
      fecha: '23 Abr 2026', hora: '14:10', metodo: 'Transferencia', estado: 'Pagada', total: 2490,
      items: [
        { name: 'Zapatillas Urban Pro', qty: 8, price: 249.9 },
        { name: 'Casaca Térmica Wind', qty: 3, price: 135 },
      ],
    },
  ];

  // ── Carrito del POS ──
  cartItems: { name: string; qty: number; price: number; discount: number }[] = [
    { name: 'Zapatillas Urban Pro', qty: 1, price: 249.9, discount: 0 },
    { name: 'Polo Classic Fit Blanco', qty: 2, price: 45, discount: 0 },
    { name: 'Gorra Snapback Retro', qty: 1, price: 35.5, discount: 10 },
  ];

  activeSale: any = null;
  selectedSales: any[] = [];

  // ── Cálculos del carrito ──
  get subtotal() {
    return this.cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
  }

  get discountTotal() {
    const itemDiscounts = this.cartItems.reduce((sum, item) => {
      return sum + (item.qty * item.price * item.discount / 100);
    }, 0);
    const globalDiscountAmount = (this.subtotal - itemDiscounts) * this.globalDiscount / 100;
    return itemDiscounts + globalDiscountAmount;
  }

  get subtotalAfterDiscount() {
    return this.subtotal - this.discountTotal;
  }

  get tax() {
    return this.subtotalAfterDiscount * 0.18;
  }

  get total() {
    return this.subtotalAfterDiscount + this.tax;
  }

  get cartItemCount() {
    return this.cartItems.reduce((sum, item) => sum + item.qty, 0);
  }

  // ── Acciones del carrito ──
  addToCart(product: any) {
    const existing = this.cartItems.find(item => item.name === product.name);
    if (existing) {
      existing.qty++;
    } else {
      this.cartItems = [...this.cartItems, { name: product.name, qty: 1, price: product.price, discount: 0 }];
    }
    this.productSearch = '';
  }

  incrementQty(item: any) {
    item.qty++;
  }

  decrementQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
    }
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  clearCart() {
    this.cartItems = [];
    this.globalDiscount = 0;
    this.clienteNombre = '';
    this.clienteDocumento = '';
  }

  // ── Selección de tabla ──
  showSaleDetails(sale: any) {
    this.activeSale = sale;
  }

  closeSaleDetails() {
    this.activeSale = null;
  }

  isSaleSelected(sale: any) {
    return this.selectedSales.some(selected => selected.id === sale.id);
  }

  toggleSaleSelection(sale: any, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedSales = checked
      ? this.isSaleSelected(sale) ? this.selectedSales : [...this.selectedSales, sale]
      : this.selectedSales.filter(selected => selected.id !== sale.id);
  }

  toggleAllSales(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedSales = checked ? [...this.sales] : [];
  }

  areAllSalesSelected() {
    return this.sales.length > 0 && this.selectedSales.length === this.sales.length;
  }

  hasPartialSelection() {
    return this.selectedSales.length > 0 && !this.areAllSalesSelected();
  }

  clearSelection() {
    this.selectedSales = [];
  }

  getStatusClass(status: string) {
    return {
      Pagada: 'status-paid',
      Emitida: 'status-issued',
      Pendiente: 'status-pending',
      Anulada: 'status-cancelled',
    }[status] || 'status-issued';
  }

  getPaymentIcon(method: string) {
    if (method === 'Efectivo') return WalletCards;
    if (method === 'Transferencia') return Banknote;
    if (method === 'Yape') return CheckCircle2;
    return CreditCard;
  }
}
