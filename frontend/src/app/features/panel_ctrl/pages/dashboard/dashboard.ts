import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  LucideAngularModule, 
  Banknote, 
  Package, 
  Users, 
  BarChart3, 
  ShoppingCart, 
  PackagePlus, 
  User, 
  AlertTriangle, 
  CreditCard 
} from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  currentDate = new Date().toLocaleDateString('es-PE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  // ── KPI Cards ──
  kpis = [
    { icon: Banknote, label: 'Ventas Hoy',        value: 'S/ 3,240',  change: '+12.5%', positive: true,  bgColor: 'linear-gradient(135deg, #4318ff20, #868cff20)', color: '#4318ff' },
    { icon: Package,  label: 'Pedidos',            value: '48',         change: '+8.2%',  positive: true,  bgColor: 'linear-gradient(135deg, #05cd9920, #00e4a120)', color: '#05cd99' },
    { icon: Users,    label: 'Clientes Nuevos',    value: '12',         change: '+3.1%',  positive: true,  bgColor: 'linear-gradient(135deg, #ffb01a20, #ffd76020)', color: '#ffb01a' },
    { icon: BarChart3,label: 'Productos en Stock', value: '1,520',      change: '-2.4%',  positive: false, bgColor: 'linear-gradient(135deg, #ff5b5b20, #ff8a8a20)', color: '#ff5b5b' },
  ];

  // ── Weekly Chart Data ──
  weeklyBars = [
    { day: 'Lun', percent: 65, color: '#4318ff' },
    { day: 'Mar', percent: 82, color: '#4318ff' },
    { day: 'Mié', percent: 45, color: '#4318ff' },
    { day: 'Jue', percent: 90, color: '#4318ff' },
    { day: 'Vie', percent: 72, color: '#4318ff' },
    { day: 'Sáb', percent: 95, color: '#868cff' },
    { day: 'Dom', percent: 38, color: '#a3aed1' },
  ];
  weeklyTotal = '18,350';

  // ── Summary Items ──
  summaryItems = [
    { name: 'Ingresos',       value: 'S/ 12,400', color: '#4318ff' },
    { name: 'Gastos',         value: 'S/ 3,200',  color: '#ff5b5b' },
    { name: 'Utilidad Neta',  value: 'S/ 9,200',  color: '#05cd99' },
    { name: 'Devoluciones',   value: 'S/ 480',    color: '#ffb01a' },
  ];
  monthlyGoalPercent = 73;

  // ── Top Products ──
  topProducts = [
    { name: 'Zapatillas Urban Pro',   category: 'Calzado',       sold: 142, percent: 100, color: '#4318ff' },
    { name: 'Polo Classic Fit',       category: 'Ropa',          sold: 118, percent: 83,  color: '#868cff' },
    { name: 'Mochila Explorer 40L',   category: 'Accesorios',    sold: 95,  percent: 67,  color: '#05cd99' },
    { name: 'Gorra Snapback Retro',   category: 'Accesorios',    sold: 87,  percent: 61,  color: '#ffb01a' },
    { name: 'Casaca Térmica Wind',    category: 'Ropa',          sold: 64,  percent: 45,  color: '#ff5b5b' },
  ];

  // ── Recent Activity ──
  recentActivity = [
    { icon: ShoppingCart, title: 'Nueva venta registrada',    description: 'Pedido #1042 — 3 productos',       time: 'Hace 5 min',  bgColor: '#4318ff15', color: '#4318ff' },
    { icon: PackagePlus,  title: 'Stock actualizado',          description: 'Polo Classic Fit +50 unidades',     time: 'Hace 22 min', bgColor: '#05cd9915', color: '#05cd99' },
    { icon: User,         title: 'Nuevo cliente registrado',   description: 'María López — Cusco',               time: 'Hace 1h',     bgColor: '#ffb01a15', color: '#ffb01a' },
    { icon: AlertTriangle,title: 'Stock bajo',                 description: 'Gorra Snapback — quedan 5 uds',    time: 'Hace 2h',     bgColor: '#ff5b5b15', color: '#ff5b5b' },
    { icon: CreditCard,   title: 'Pago confirmado',            description: 'Pedido #1039 — S/ 450.00',          time: 'Hace 3h',     bgColor: '#868cff15', color: '#868cff' },
  ];

  // ── Donut Chart (Ventas por Categoría) ──
  donutCategories = [
    { name: 'Calzado',     percent: 38, color: '#4318ff' },
    { name: 'Ropa',        percent: 28, color: '#868cff' },
    { name: 'Accesorios',  percent: 20, color: '#05cd99' },
    { name: 'Electrónica', percent: 14, color: '#ffb01a' },
  ];

  get donutGradient(): string {
    let acc = 0;
    const stops = this.donutCategories.map(c => {
      const start = acc;
      acc += c.percent;
      return `${c.color} ${start}% ${acc}%`;
    });
    return `conic-gradient(${stops.join(', ')})`;
  }

  // ── Flujo de Caja (Line Chart — Ingresos vs Gastos) ──
  cashFlowMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
  cashFlowIngresos = [12400, 15800, 13200, 18900, 22100, 19500];
  cashFlowGastos   = [8200,  9400,  10800, 11200, 12600, 10900];

  // SVG viewBox: 300 x 160, with padding
  private chartW = 280;
  private chartH = 130;
  private padX = 10;
  private padY = 10;

  get lineMax(): number {
    return Math.max(...this.cashFlowIngresos, ...this.cashFlowGastos);
  }

  toPoints(data: number[]): string {
    const max = this.lineMax;
    return data.map((v, i) => {
      const x = this.padX + (i / (data.length - 1)) * this.chartW;
      const y = this.padY + this.chartH - (v / max) * this.chartH;
      return `${x},${y}`;
    }).join(' ');
  }

  toAreaPoints(data: number[]): string {
    const max = this.lineMax;
    const bottom = this.padY + this.chartH;
    const pts = data.map((v, i) => {
      const x = this.padX + (i / (data.length - 1)) * this.chartW;
      const y = this.padY + this.chartH - (v / max) * this.chartH;
      return `${x},${y}`;
    });
    const firstX = this.padX;
    const lastX = this.padX + this.chartW;
    return `${firstX},${bottom} ${pts.join(' ')} ${lastX},${bottom}`;
  }

  dotPositions(data: number[]): { x: number; y: number; value: number }[] {
    const max = this.lineMax;
    return data.map((v, i) => ({
      x: this.padX + (i / (data.length - 1)) * this.chartW,
      y: this.padY + this.chartH - (v / max) * this.chartH,
      value: v,
    }));
  }

  cashFlowNeto = 'S/ 37,500';

  // ── Sales Channels ──
  salesChannels = [
    { name: 'Tienda física',   percent: 45, color: '#4318ff', value: 'S/ 8,280', icon: '🏪', bg: 'rgba(67, 24, 255, 0.08)' },
    { name: 'E-commerce',      percent: 32, color: '#868cff', value: 'S/ 5,880', icon: '🌐', bg: 'rgba(134, 140, 255, 0.08)' },
    { name: 'Redes sociales',  percent: 15, color: '#05cd99', value: 'S/ 2,760', icon: '📱', bg: 'rgba(5, 205, 153, 0.08)' },
    { name: 'Mayorista',       percent: 8,  color: '#ffb01a', value: 'S/ 1,430', icon: '📦', bg: 'rgba(255, 176, 26, 0.08)' },
  ];

  // ── Quick Shortcuts ──
  shortcuts = [
    { label: 'Nueva Venta',    icon: '🛒', route: '/panel/ventas',      color: '#4318ff', bg: 'rgba(67, 24, 255, 0.08)' },
    { label: 'Productos',      icon: '📦', route: '/panel/productos',   color: '#05cd99', bg: 'rgba(5, 205, 153, 0.08)' },
    { label: 'Inventario',     icon: '📋', route: '/panel/inventario',  color: '#ffb01a', bg: 'rgba(255, 176, 26, 0.08)' },
    { label: 'Reportes',       icon: '📊', route: '/panel/reportes',    color: '#868cff', bg: 'rgba(134, 140, 255, 0.08)' },
    { label: 'Caja',           icon: '💰', route: '/panel/caja',        color: '#059669', bg: 'rgba(5, 150, 105, 0.08)' },
    { label: 'Usuarios',       icon: '👥', route: '/panel/usuarios',    color: '#ff5b5b', bg: 'rgba(255, 91, 91, 0.08)' },
  ];
}
