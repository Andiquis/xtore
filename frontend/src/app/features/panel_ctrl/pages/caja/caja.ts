import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Banknote,
  CreditCard,
  Eraser,
  Eye,
  LockKeyhole,
  Plus,
  Printer,
  Receipt,
  Search,
  TrendingDown,
  TrendingUp,
  UnlockKeyhole,
  WalletCards,
  XCircle,
  Clock,
  User,
  ArrowUpRight,
  ArrowDownRight,
  X,
  Smartphone,
  CheckCircle2,
  History,
  AlertCircle,
} from 'lucide-angular';

@Component({
  selector: 'app-caja',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  templateUrl: './caja.html',
  styleUrl: './caja.scss',
})
export class Caja {
  // ── Iconos ──
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  PrintIcon = Printer;
  CloseIcon = LockKeyhole;
  OpenIcon = UnlockKeyhole;
  CancelIcon = XCircle;
  ClockIcon = Clock;
  UserIcon = User;
  ArrowUpIcon = ArrowUpRight;
  ArrowDownIcon = ArrowDownRight;
  XIcon = X;
  CheckIcon = CheckCircle2;
  HistoryIcon = History;
  AlertIcon = AlertCircle;

  // ── Estado de caja ──
  isOpen = true;
  responsable = 'Anderson';
  horaApertura = '08:00 AM';
  montoInicial = 500;
  montoContado = 0;
  observacionCierre = '';

  // ── KPIs ──
  kpis = [
    { label: 'Caja esperada', value: 'S/ 6,842.50', helper: 'Turno actual', icon: WalletCards, tone: 'blue' },
    { label: 'Ingresos', value: 'S/ 7,120.00', helper: '18 movimientos', icon: TrendingUp, tone: 'green' },
    { label: 'Egresos', value: 'S/ 277.50', helper: '3 gastos registrados', icon: TrendingDown, tone: 'amber' },
    { label: 'Diferencia', value: 'S/ 0.00', helper: 'Sin descuadre', icon: Banknote, tone: 'rose' },
  ];

  // ── Movimientos ──
  movements = [
    { id: 'MOV-305', type: 'Ingreso', concept: 'Venta B001-000442', method: 'Tarjeta', user: 'Anderson', time: '14:32', amount: 380.0, status: 'Confirmado' },
    { id: 'MOV-304', type: 'Ingreso', concept: 'Venta B001-000441', method: 'Yape', user: 'Lucía', time: '13:55', amount: 145.5, status: 'Confirmado' },
    { id: 'MOV-303', type: 'Egreso', concept: 'Compra de bolsas', method: 'Efectivo', user: 'Carlos', time: '12:40', amount: 42.5, status: 'Registrado' },
    { id: 'MOV-302', type: 'Ingreso', concept: 'Venta F001-000093', method: 'Transferencia', user: 'Lucía', time: '11:48', amount: 1850.0, status: 'Confirmado' },
    { id: 'MOV-301', type: 'Ingreso', concept: 'Venta B001-000438', method: 'Efectivo', user: 'Anderson', time: '10:42', amount: 458.9, status: 'Confirmado' },
    { id: 'MOV-300', type: 'Ingreso', concept: 'Venta F001-000092', method: 'Tarjeta', user: 'Lucía', time: '10:18', amount: 1280.0, status: 'Confirmado' },
    { id: 'MOV-299', type: 'Egreso', concept: 'Movilidad proveedor', method: 'Efectivo', user: 'Carlos', time: '09:54', amount: 35.0, status: 'Registrado' },
    { id: 'MOV-298', type: 'Ingreso', concept: 'Venta B001-000437', method: 'Yape', user: 'Anderson', time: '09:21', amount: 224.5, status: 'Confirmado' },
    { id: 'MOV-297', type: 'Egreso', concept: 'Útiles de limpieza', method: 'Efectivo', user: 'Anderson', time: '08:45', amount: 200.0, status: 'Registrado' },
    { id: 'MOV-296', type: 'Ingreso', concept: 'Apertura de caja', method: 'Efectivo', user: 'Anderson', time: '08:00', amount: 500.0, status: 'Apertura' },
  ];

  // ── Distribución por método ──
  methodBreakdown = [
    { name: 'Efectivo', value: 2450.40, icon: Banknote, percent: 37, color: '#d97706' },
    { name: 'Tarjeta', value: 3120.80, icon: CreditCard, percent: 47, color: '#4318ff' },
    { name: 'Yape', value: 1020.30, icon: Smartphone, percent: 10, color: '#05cd99' },
    { name: 'Transferencia', value: 450.00, icon: WalletCards, percent: 6, color: '#0ea5e9' },
  ];

  // ── Historial de cierres ──
  closingHistory = [
    { date: '02 May 2026', responsable: 'Anderson', esperado: 5280.0, contado: 5280.0, diferencia: 0, status: 'Cuadrado' },
    { date: '01 May 2026', responsable: 'Lucía', esperado: 6120.5, contado: 6100.0, diferencia: -20.5, status: 'Faltante' },
    { date: '30 Abr 2026', responsable: 'Anderson', esperado: 4890.0, contado: 4890.0, diferencia: 0, status: 'Cuadrado' },
    { date: '29 Abr 2026', responsable: 'Carlos', esperado: 3720.0, contado: 3740.0, diferencia: 20.0, status: 'Sobrante' },
  ];

  // ── Selección ──
  activeMovement: any = null;
  selectedMovements: any[] = [];

  // ── Cálculos ──
  get totalIngresos() {
    return this.movements.filter(m => m.type === 'Ingreso').reduce((sum, m) => sum + m.amount, 0);
  }

  get totalEgresos() {
    return this.movements.filter(m => m.type === 'Egreso').reduce((sum, m) => sum + m.amount, 0);
  }

  get cajaEsperada() {
    return this.totalIngresos - this.totalEgresos;
  }

  get diferencia() {
    if (!this.montoContado) return 0;
    return this.montoContado - this.cajaEsperada;
  }

  // ── Métodos ──
  showMovementDetails(movement: any) {
    this.activeMovement = movement;
  }

  closeMovementDetails() {
    this.activeMovement = null;
  }

  isMovementSelected(movement: any) {
    return this.selectedMovements.some(selected => selected.id === movement.id);
  }

  toggleMovementSelection(movement: any, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedMovements = checked
      ? this.isMovementSelected(movement) ? this.selectedMovements : [...this.selectedMovements, movement]
      : this.selectedMovements.filter(selected => selected.id !== movement.id);
  }

  toggleAllMovements(event: Event) {
    this.selectedMovements = (event.target as HTMLInputElement).checked ? [...this.movements] : [];
  }

  areAllMovementsSelected() {
    return this.movements.length > 0 && this.selectedMovements.length === this.movements.length;
  }

  hasPartialSelection() {
    return this.selectedMovements.length > 0 && !this.areAllMovementsSelected();
  }

  clearSelection() {
    this.selectedMovements = [];
  }

  getMovementClass(type: string) {
    return type === 'Ingreso' ? 'move-income' : 'move-expense';
  }

  getClosingClass(status: string) {
    return {
      'Cuadrado': 'closing-ok',
      'Faltante': 'closing-short',
      'Sobrante': 'closing-over',
    }[status] || 'closing-ok';
  }
}
