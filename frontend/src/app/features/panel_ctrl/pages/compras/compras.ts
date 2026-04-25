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

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
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

  kpis = [
    { label: 'Compras del mes', value: 'S/ 18,940', helper: '24 órdenes registradas', icon: ShoppingBag, tone: 'blue' },
    { label: 'Por recibir', value: '7', helper: 'Órdenes pendientes', icon: Truck, tone: 'amber' },
    { label: 'Confirmadas', value: '16', helper: 'Actualizan inventario', icon: PackageCheck, tone: 'green' },
    { label: 'Cuentas por pagar', value: 'S/ 4,320', helper: '3 proveedores', icon: Banknote, tone: 'rose' },
  ];

  purchases = [
    { id: 'COM-208', doc: 'OC-000208', supplier: 'Distribuidora Norte SAC', date: '24 Abr 2026', status: 'Pendiente', payment: 'Por pagar', responsible: 'Anderson', total: 2450, items: [{ name: 'Zapatillas Urban Pro', qty: 20, cost: 118 }, { name: 'Gorra Snapback Retro', qty: 35, cost: 18 }] },
    { id: 'COM-207', doc: 'OC-000207', supplier: 'Textiles Rivera', date: '23 Abr 2026', status: 'Recibida', payment: 'Pagada', responsible: 'Lucía', total: 1320, items: [{ name: 'Polo Classic Fit Blanco', qty: 60, cost: 22 }] },
    { id: 'COM-206', doc: 'FC-F001-903', supplier: 'Importadora Global', date: '22 Abr 2026', status: 'Confirmada', payment: 'Parcial', responsible: 'Carlos', total: 3890, items: [{ name: 'Reloj SmartFit X', qty: 10, cost: 260 }] },
    { id: 'COM-205', doc: 'OC-000205', supplier: 'Outdoor Proveedores', date: '21 Abr 2026', status: 'Anulada', payment: 'Anulada', responsible: 'Anderson', total: 980, items: [{ name: 'Mochila Explorer 40L', qty: 8, cost: 122.5 }] },
  ];

  draftItems = [
    { name: 'Polo Classic Fit Blanco', qty: 40, cost: 22 },
    { name: 'Gorra Snapback Retro', qty: 20, cost: 18 },
  ];

  activePurchase: any = null;
  selectedPurchases: any[] = [];

  get subtotal() {
    return this.draftItems.reduce((sum, item) => sum + item.qty * item.cost, 0);
  }

  get tax() {
    return this.subtotal * 0.18;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  showPurchaseDetails(purchase: any) {
    this.activePurchase = purchase;
  }

  closePurchaseDetails() {
    this.activePurchase = null;
  }

  isPurchaseSelected(purchase: any) {
    return this.selectedPurchases.some(selected => selected.id === purchase.id);
  }

  togglePurchaseSelection(purchase: any, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedPurchases = checked
      ? this.isPurchaseSelected(purchase) ? this.selectedPurchases : [...this.selectedPurchases, purchase]
      : this.selectedPurchases.filter(selected => selected.id !== purchase.id);
  }

  toggleAllPurchases(event: Event) {
    this.selectedPurchases = (event.target as HTMLInputElement).checked ? [...this.purchases] : [];
  }

  areAllPurchasesSelected() {
    return this.purchases.length > 0 && this.selectedPurchases.length === this.purchases.length;
  }

  hasPartialSelection() {
    return this.selectedPurchases.length > 0 && !this.areAllPurchasesSelected();
  }

  clearSelection() {
    this.selectedPurchases = [];
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
}
