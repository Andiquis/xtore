import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabButton, TabButtonItem } from '../../components/tab-button/tab-button';

import {
  LucideAngularModule,
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  CreditCard,
  FileDown,
  FileText,
  FileSpreadsheet,
  Calendar,
  Filter,
  Eraser,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Layers,
  PieChart,
} from 'lucide-angular';

type ReportTabId = 'ventas' | 'inventario' | 'productos' | 'compras' | 'caja';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TabButton],
  templateUrl: './reportes.html',
  styleUrl: './reportes.scss',
})
export class Reportes {
  // ── Iconos ──
  ChartIcon = BarChart3;
  TrendUpIcon = TrendingUp;
  TrendDownIcon = TrendingDown;
  DollarIcon = DollarSign;
  CartIcon = ShoppingCart;
  PackageIcon = Package;
  UsersIcon = Users;
  CreditIcon = CreditCard;
  DownloadIcon = FileDown;
  PdfIcon = FileText;
  ExcelIcon = FileSpreadsheet;
  CalendarIcon = Calendar;
  FilterIcon = Filter;
  EraserIcon = Eraser;
  ArrowUpIcon = ArrowUpRight;
  ArrowDownIcon = ArrowDownRight;
  WalletIcon = Wallet;
  LayersIcon = Layers;
  PieIcon = PieChart;

  // ── Estado ──
  activeReport: ReportTabId = 'ventas';
  selectedPeriod: string = 'Este mes';

  reportTabs: TabButtonItem[] = [
    { id: 'ventas', label: 'Ventas', icon: ShoppingCart },
    { id: 'inventario', label: 'Inventario', icon: Package },
    { id: 'productos', label: 'Productos', icon: Layers },
    { id: 'compras', label: 'Compras', icon: CreditCard },
    { id: 'caja', label: 'Caja', icon: Wallet },
  ];

  // ── KPIs dinámicos por tipo de reporte ──
  kpiSets: Record<ReportTabId, any[]> = {
    ventas: [
      {
        label: 'Ingresos totales',
        value: 'S/ 48,320',
        change: '+14.2%',
        positive: true,
        icon: DollarSign,
        tone: 'blue',
      },
      {
        label: 'Ventas realizadas',
        value: '312',
        change: '+8.5%',
        positive: true,
        icon: ShoppingCart,
        tone: 'green',
      },
      {
        label: 'Ticket promedio',
        value: 'S/ 154.87',
        change: '+3.1%',
        positive: true,
        icon: BarChart3,
        tone: 'amber',
      },
      {
        label: 'Devoluciones',
        value: 'S/ 1,240',
        change: '-22%',
        positive: true,
        icon: TrendingDown,
        tone: 'rose',
      },
    ],
    inventario: [
      {
        label: 'Productos en stock',
        value: '1,520',
        change: '-2.4%',
        positive: false,
        icon: Package,
        tone: 'blue',
      },
      {
        label: 'Bajo stock',
        value: '23',
        change: '+5',
        positive: false,
        icon: TrendingDown,
        tone: 'rose',
      },
      { label: 'Agotados', value: '7', change: '-2', positive: true, icon: Layers, tone: 'amber' },
      {
        label: 'Rotación promedio',
        value: '4.2x',
        change: '+0.3',
        positive: true,
        icon: TrendingUp,
        tone: 'green',
      },
    ],
    productos: [
      {
        label: 'Total productos',
        value: '486',
        change: '+12',
        positive: true,
        icon: Package,
        tone: 'blue',
      },
      {
        label: 'Más vendido',
        value: 'Zapatillas Urban',
        change: '142 uds',
        positive: true,
        icon: TrendingUp,
        tone: 'green',
      },
      {
        label: 'Categorías activas',
        value: '8',
        change: '0',
        positive: true,
        icon: Layers,
        tone: 'amber',
      },
      {
        label: 'Sin movimiento',
        value: '34',
        change: '+3',
        positive: false,
        icon: TrendingDown,
        tone: 'rose',
      },
    ],
    compras: [
      {
        label: 'Total compras',
        value: 'S/ 22,180',
        change: '+6.8%',
        positive: true,
        icon: CreditCard,
        tone: 'blue',
      },
      {
        label: 'Órdenes',
        value: '28',
        change: '+4',
        positive: true,
        icon: FileText,
        tone: 'green',
      },
      {
        label: 'Proveedores activos',
        value: '12',
        change: '0',
        positive: true,
        icon: Users,
        tone: 'amber',
      },
      {
        label: 'Pendientes de pago',
        value: 'S/ 3,400',
        change: '+2',
        positive: false,
        icon: Wallet,
        tone: 'rose',
      },
    ],
    caja: [
      {
        label: 'Ingresos caja',
        value: 'S/ 52,140',
        change: '+11.3%',
        positive: true,
        icon: DollarSign,
        tone: 'blue',
      },
      {
        label: 'Egresos',
        value: 'S/ 8,420',
        change: '+3.2%',
        positive: false,
        icon: TrendingDown,
        tone: 'rose',
      },
      {
        label: 'Saldo neto',
        value: 'S/ 43,720',
        change: '+15.1%',
        positive: true,
        icon: Wallet,
        tone: 'green',
      },
      {
        label: 'Cierres realizados',
        value: '26',
        change: '100%',
        positive: true,
        icon: BarChart3,
        tone: 'amber',
      },
    ],
  };

  get currentKpis() {
    return this.kpiSets[this.activeReport] || this.kpiSets['ventas'];
  }

  // ── Gráfico de barras (ventas semanales) ──
  weeklyBars = [
    { label: 'Sem 1', value: 8420, percent: 62 },
    { label: 'Sem 2', value: 11200, percent: 82 },
    { label: 'Sem 3', value: 13650, percent: 100 },
    { label: 'Sem 4', value: 10200, percent: 75 },
  ];

  // ── Distribución por método de pago ──
  paymentDistribution = [
    { method: 'Efectivo', amount: 'S/ 18,240', percent: 38, color: '#4318ff' },
    { method: 'Tarjeta', amount: 'S/ 15,680', percent: 32, color: '#868cff' },
    { method: 'Yape', amount: 'S/ 8,400', percent: 17, color: '#05cd99' },
    { method: 'Transferencia', amount: 'S/ 4,200', percent: 9, color: '#ffb01a' },
    { method: 'Plin', amount: 'S/ 1,800', percent: 4, color: '#ff5b5b' },
  ];

  // ── Top productos del periodo ──
  topProducts = [
    { name: 'Zapatillas Urban Pro', category: 'Calzado', sold: 142, revenue: 35430, percent: 100 },
    { name: 'Polo Classic Fit', category: 'Ropa', sold: 118, revenue: 5310, percent: 83 },
    { name: 'Mochila Explorer 40L', category: 'Accesorios', sold: 95, revenue: 18040, percent: 67 },
    { name: 'Gorra Snapback Retro', category: 'Accesorios', sold: 87, revenue: 3088, percent: 61 },
    { name: 'Casaca Térmica Wind', category: 'Ropa', sold: 64, revenue: 8640, percent: 45 },
  ];

  // ── Resumen financiero ──
  financialSummary = [
    { label: 'Ventas brutas', value: 'S/ 48,320' },
    { label: 'Descuentos aplicados', value: '- S/ 4,820' },
    { label: 'Devoluciones', value: '- S/ 1,240' },
    { label: 'Ventas netas', value: 'S/ 42,260', highlight: true },
    { label: 'Costo de ventas', value: '- S/ 18,900' },
    { label: 'Utilidad bruta', value: 'S/ 23,360', highlight: true },
    { label: 'Gastos operativos', value: '- S/ 6,200' },
    { label: 'Utilidad neta', value: 'S/ 17,160', highlight: true, accent: true },
  ];

  // ── Ventas diarias (tabla de detalle) ──
  dailySales = [
    { date: '01 May', count: 18, total: 2840, avg: 157.78 },
    { date: '02 May', count: 22, total: 3520, avg: 160.0 },
    { date: '03 May', count: 15, total: 2180, avg: 145.33 },
    { date: '04 May', count: 28, total: 4650, avg: 166.07 },
    { date: '05 May', count: 12, total: 1420, avg: 118.33 },
    { date: '06 May', count: 32, total: 5240, avg: 163.75 },
    { date: '07 May', count: 25, total: 3890, avg: 155.6 },
  ];

  // ── Métodos ──
  setReport(reportId: string) {
    if (this.isReportTab(reportId)) {
      this.activeReport = reportId;
    }
  }

  private isReportTab(reportId: string): reportId is ReportTabId {
    return ['ventas', 'inventario', 'productos', 'compras', 'caja'].includes(reportId);
  }
}
