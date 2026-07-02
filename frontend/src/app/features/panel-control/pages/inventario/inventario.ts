import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  AlertTriangle,
  ArrowDownToLine,
  ArrowUpFromLine,
  Boxes,
  CalendarDays,
  ClipboardList,
  Edit2,
  Eraser,
  Eye,
  History,
  MoreHorizontal,
  Package,
  PackageCheck,
  PackageX,
  Plus,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Trash2,
  User,
} from 'lucide-angular';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.scss',
})
export class Inventario {
  SearchIcon = Search;
  AlertIcon = AlertTriangle;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  HistoryIcon = History;
  EntryIcon = ArrowDownToLine;
  ExitIcon = ArrowUpFromLine;
  AdjustIcon = SlidersHorizontal;
  ResetIcon = RotateCcw;
  MoreIcon = MoreHorizontal;
  ProductIcon = Package;
  UserIcon = User;
  DateIcon = CalendarDays;

  kpis = [
    { label: 'Productos en stock', value: '1,520', helper: '84 referencias activas', icon: Boxes, tone: 'blue' },
    { label: 'Stock saludable', value: '68', helper: 'Por encima del mínimo', icon: PackageCheck, tone: 'green' },
    { label: 'Bajo stock', value: '11', helper: 'Requieren reposición', icon: AlertTriangle, tone: 'amber' },
    { label: 'Agotados', value: '5', helper: 'Sin unidades disponibles', icon: PackageX, tone: 'rose' },
  ];

  stockItems = [
    {
      id: 'INV-001',
      sku: 'ZPT-URB-01',
      product: 'Zapatillas Urban Pro',
      category: 'Calzado',
      location: 'A-01',
      stock: 34,
      min: 12,
      max: 80,
      lastMove: '24 Abr 2026 · Entrada',
      status: 'Saludable',
      responsible: 'Anderson',
      movements: [
        { type: 'Entrada', qty: 20, reason: 'Compra confirmada', user: 'Anderson', date: '24 Abr 2026 09:40' },
        { type: 'Salida', qty: 3, reason: 'Venta registrada', user: 'Lucía', date: '24 Abr 2026 10:42' },
        { type: 'Ajuste', qty: -1, reason: 'Corrección física', user: 'Carlos', date: '23 Abr 2026 18:12' },
      ],
    },
    {
      id: 'INV-002',
      sku: 'POL-CLA-02',
      product: 'Polo Classic Fit Blanco',
      category: 'Ropa',
      location: 'B-04',
      stock: 8,
      min: 20,
      max: 120,
      lastMove: '24 Abr 2026 · Salida',
      status: 'Bajo stock',
      responsible: 'Lucía',
      movements: [
        { type: 'Salida', qty: 6, reason: 'Ventas del día', user: 'Lucía', date: '24 Abr 2026 11:03' },
        { type: 'Entrada', qty: 40, reason: 'Compra proveedor', user: 'Anderson', date: '20 Abr 2026 15:10' },
      ],
    },
    {
      id: 'INV-003',
      sku: 'MOC-EXP-03',
      product: 'Mochila Explorer 40L',
      category: 'Accesorios',
      location: 'C-02',
      stock: 0,
      min: 10,
      max: 45,
      lastMove: '23 Abr 2026 · Salida',
      status: 'Agotado',
      responsible: 'Carlos',
      movements: [
        { type: 'Salida', qty: 2, reason: 'Venta registrada', user: 'Carlos', date: '23 Abr 2026 17:24' },
        { type: 'Ajuste', qty: -1, reason: 'Producto dañado', user: 'Anderson', date: '22 Abr 2026 12:00' },
      ],
    },
    {
      id: 'INV-004',
      sku: 'GOR-SNA-04',
      product: 'Gorra Snapback Retro',
      category: 'Accesorios',
      location: 'C-08',
      stock: 15,
      min: 15,
      max: 90,
      lastMove: '24 Abr 2026 · Ajuste',
      status: 'En mínimo',
      responsible: 'Anderson',
      movements: [
        { type: 'Ajuste', qty: 2, reason: 'Conteo físico', user: 'Anderson', date: '24 Abr 2026 08:25' },
        { type: 'Salida', qty: 5, reason: 'Venta registrada', user: 'Lucía', date: '23 Abr 2026 16:19' },
      ],
    },
    {
      id: 'INV-005',
      sku: 'CAS-TER-05',
      product: 'Casaca Térmica Wind',
      category: 'Ropa',
      location: 'B-12',
      stock: 48,
      min: 10,
      max: 70,
      lastMove: '22 Abr 2026 · Entrada',
      status: 'Saludable',
      responsible: 'Lucía',
      movements: [
        { type: 'Entrada', qty: 25, reason: 'Reposición', user: 'Lucía', date: '22 Abr 2026 10:32' },
      ],
    },
  ];

  recentMovements = [
    { type: 'Entrada', product: 'Zapatillas Urban Pro', qty: 20, user: 'Anderson', time: 'Hace 15 min' },
    { type: 'Salida', product: 'Polo Classic Fit Blanco', qty: 6, user: 'Lucía', time: 'Hace 34 min' },
    { type: 'Ajuste', product: 'Gorra Snapback Retro', qty: 2, user: 'Anderson', time: 'Hace 1h' },
  ];

  activeItem: any = null;
  selectedItems: any[] = [];

  showInventoryDetails(item: any) {
    this.activeItem = item;
  }

  closeInventoryDetails() {
    this.activeItem = null;
  }

  isItemSelected(item: any) {
    return this.selectedItems.some(selected => selected.id === item.id);
  }

  toggleItemSelection(item: any, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedItems = checked
      ? this.isItemSelected(item) ? this.selectedItems : [...this.selectedItems, item]
      : this.selectedItems.filter(selected => selected.id !== item.id);
  }

  toggleAllItems(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedItems = checked ? [...this.stockItems] : [];
  }

  areAllItemsSelected() {
    return this.stockItems.length > 0 && this.selectedItems.length === this.stockItems.length;
  }

  hasPartialSelection() {
    return this.selectedItems.length > 0 && !this.areAllItemsSelected();
  }

  clearSelection() {
    this.selectedItems = [];
  }

  getStockPercent(item: any) {
    return Math.min(100, Math.round((item.stock / item.max) * 100));
  }

  getStatusClass(status: string) {
    return {
      Saludable: 'status-healthy',
      'Bajo stock': 'status-low',
      Agotado: 'status-out',
      'En mínimo': 'status-min',
    }[status] || 'status-min';
  }

  getMovementClass(type: string) {
    return {
      Entrada: 'move-entry',
      Salida: 'move-exit',
      Ajuste: 'move-adjust',
    }[type] || 'move-adjust';
  }

  getMovementIcon(type: string) {
    if (type === 'Entrada') return this.EntryIcon;
    if (type === 'Salida') return this.ExitIcon;
    return this.AdjustIcon;
  }
}
