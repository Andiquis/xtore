import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Banknote,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Eraser,
  Eye,
  FileText,
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
} from 'lucide-angular';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.scss',
})
export class Ventas {
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  PrintIcon = Printer;
  CancelIcon = XCircle;
  RefundIcon = RotateCcw;
  MoreIcon = MoreHorizontal;
  ReceiptIcon = FileText;
  CustomerIcon = User;
  PaymentIcon = CreditCard;
  TotalIcon = Banknote;

  kpis = [
    { label: 'Ventas de hoy', value: 'S/ 8,420.50', helper: '+14.2% vs ayer', icon: Banknote, tone: 'blue' },
    { label: 'Comprobantes', value: '38', helper: '32 boletas · 6 facturas', icon: FileText, tone: 'green' },
    { label: 'Ticket promedio', value: 'S/ 221.59', helper: 'Promedio del día', icon: ShoppingBag, tone: 'amber' },
    { label: 'Pendientes', value: '4', helper: 'Requieren revisión', icon: CalendarDays, tone: 'rose' },
  ];

  sales = [
    {
      id: 'VTA-1048',
      comprobante: 'B001-000438',
      cliente: 'María López',
      vendedor: 'Anderson',
      fecha: '24 Abr 2026',
      hora: '10:42',
      metodo: 'Tarjeta',
      estado: 'Pagada',
      total: 458.9,
      items: [
        { name: 'Zapatillas Urban Pro', qty: 1, price: 249.9 },
        { name: 'Polo Classic Fit Blanco', qty: 2, price: 45 },
        { name: 'Gorra Snapback Retro', qty: 1, price: 35.5 },
      ],
    },
    {
      id: 'VTA-1047',
      comprobante: 'F001-000092',
      cliente: 'Comercial Rivera SAC',
      vendedor: 'Lucía',
      fecha: '24 Abr 2026',
      hora: '10:18',
      metodo: 'Transferencia',
      estado: 'Emitida',
      total: 1280,
      items: [
        { name: 'Mochila Explorer 40L', qty: 4, price: 189.9 },
        { name: 'Reloj SmartFit X', qty: 1, price: 320 },
      ],
    },
    {
      id: 'VTA-1046',
      comprobante: 'B001-000437',
      cliente: 'Luis Torres',
      vendedor: 'Anderson',
      fecha: '24 Abr 2026',
      hora: '09:55',
      metodo: 'Efectivo',
      estado: 'Pagada',
      total: 135,
      items: [
        { name: 'Casaca Térmica Wind', qty: 1, price: 135 },
      ],
    },
    {
      id: 'VTA-1045',
      comprobante: 'B001-000436',
      cliente: 'Ana Paredes',
      vendedor: 'Carlos',
      fecha: '23 Abr 2026',
      hora: '18:22',
      metodo: 'Yape',
      estado: 'Pendiente',
      total: 224.5,
      items: [
        { name: 'Gorra Snapback Retro', qty: 3, price: 35.5 },
        { name: 'Polo Classic Fit Blanco', qty: 2, price: 45 },
      ],
    },
    {
      id: 'VTA-1044',
      comprobante: 'B001-000435',
      cliente: 'Diego Salas',
      vendedor: 'Lucía',
      fecha: '23 Abr 2026',
      hora: '17:04',
      metodo: 'Tarjeta',
      estado: 'Anulada',
      total: 320,
      items: [
        { name: 'Reloj SmartFit X', qty: 1, price: 320 },
      ],
    },
  ];

  cartItems = [
    { name: 'Zapatillas Urban Pro', qty: 1, price: 249.9 },
    { name: 'Polo Classic Fit Blanco', qty: 2, price: 45 },
    { name: 'Gorra Snapback Retro', qty: 1, price: 35.5 },
  ];

  activeSale: any = null;
  selectedSales: any[] = [];

  get subtotal() {
    return this.cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
  }

  get tax() {
    return this.subtotal * 0.18;
  }

  get total() {
    return this.subtotal + this.tax;
  }

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
