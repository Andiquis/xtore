import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
} from 'lucide-angular';

@Component({
  selector: 'app-caja',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './caja.html',
  styleUrl: './caja.scss',
})
export class Caja {
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  PrintIcon = Printer;
  CloseIcon = LockKeyhole;
  OpenIcon = UnlockKeyhole;
  CancelIcon = XCircle;

  kpis = [
    { label: 'Caja esperada', value: 'S/ 6,842.50', helper: 'Turno actual', icon: WalletCards, tone: 'blue' },
    { label: 'Ingresos', value: 'S/ 7,120.00', helper: 'Ventas y abonos', icon: TrendingUp, tone: 'green' },
    { label: 'Egresos', value: 'S/ 277.50', helper: 'Gastos manuales', icon: TrendingDown, tone: 'amber' },
    { label: 'Diferencia', value: 'S/ 0.00', helper: 'Sin descuadre', icon: Banknote, tone: 'rose' },
  ];

  movements = [
    { id: 'MOV-301', type: 'Ingreso', concept: 'Venta B001-000438', method: 'Efectivo', user: 'Anderson', time: '10:42', amount: 458.9, status: 'Confirmado' },
    { id: 'MOV-300', type: 'Ingreso', concept: 'Venta F001-000092', method: 'Tarjeta', user: 'Lucía', time: '10:18', amount: 1280, status: 'Confirmado' },
    { id: 'MOV-299', type: 'Egreso', concept: 'Movilidad proveedor', method: 'Efectivo', user: 'Carlos', time: '09:54', amount: 35, status: 'Registrado' },
    { id: 'MOV-298', type: 'Ingreso', concept: 'Venta B001-000437', method: 'Yape', user: 'Anderson', time: '09:21', amount: 224.5, status: 'Confirmado' },
  ];

  methods = [
    { name: 'Efectivo', value: 2450.4, icon: Banknote },
    { name: 'Tarjeta', value: 3120.8, icon: CreditCard },
    { name: 'Yape/Plin', value: 1020.3, icon: Receipt },
  ];

  activeMovement: any = null;
  selectedMovements: any[] = [];

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
}
