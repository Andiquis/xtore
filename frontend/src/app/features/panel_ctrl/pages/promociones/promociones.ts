import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Search,
  Eraser,
  Plus,
  Eye,
  Edit2,
  Trash2,
  Pause,
  Play,
  MoreVertical,
  Tag,
  Percent,
  CalendarDays,
  TrendingUp,
  ShoppingBag,
  Gift,
  Clock,
  X,
  BarChart3,
  DollarSign,
  Users,
  Zap,
} from 'lucide-angular';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './promociones.html',
  styleUrl: './promociones.scss',
})
export class Promociones {
  // ── Iconos ──
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  PauseIcon = Pause;
  PlayIcon = Play;
  MoreIcon = MoreVertical;
  TagIcon = Tag;
  PercentIcon = Percent;
  CalendarIcon = CalendarDays;
  TrendingIcon = TrendingUp;
  ShoppingIcon = ShoppingBag;
  GiftIcon = Gift;
  ClockIcon = Clock;
  CloseIcon = X;
  ChartIcon = BarChart3;
  DollarIcon = DollarSign;
  UsersIcon = Users;
  ZapIcon = Zap;

  // ── Estado ──
  activePromotion: any = null;
  selectedPromotions: any[] = [];

  // ── KPIs ──
  kpis = [
    { label: 'Activas', value: '6', helper: '3 por vencer esta semana', icon: Zap, tone: 'blue' },
    { label: 'Ventas con descuento', value: '248', helper: '+18.5% vs mes anterior', icon: ShoppingBag, tone: 'green' },
    { label: 'Ahorro generado', value: 'S/ 4,820', helper: 'Descuentos aplicados', icon: DollarSign, tone: 'amber' },
    { label: 'Tasa de conversión', value: '34.2%', helper: 'Promociones → Ventas', icon: TrendingUp, tone: 'rose' },
  ];

  // ── Datos Mock: Promociones ──
  promotions = [
    {
      id: 'PROMO-001',
      name: 'Descuento de Temporada',
      description: 'Descuento especial en toda la línea de ropa para la temporada de otoño.',
      type: 'Porcentaje',
      value: '20%',
      category: 'Ropa',
      productsCount: 24,
      products: ['Polo Classic Fit', 'Casaca Térmica Wind', 'Pantalón Sport Flex'],
      startDate: '01 May 2026',
      endDate: '31 May 2026',
      status: 'Activa',
      salesCount: 142,
      revenue: 8420,
      minPurchase: null,
      conditions: 'Aplicable a compras presenciales y online.',
    },
    {
      id: 'PROMO-002',
      name: '2x1 en Accesorios',
      description: 'Lleva 2 accesorios seleccionados y paga solo 1. Ideal para regalos.',
      type: '2x1',
      value: '2x1',
      category: 'Accesorios',
      productsCount: 18,
      products: ['Gorra Snapback Retro', 'Mochila Explorer 40L', 'Cinturón Leather'],
      startDate: '15 Abr 2026',
      endDate: '15 May 2026',
      status: 'Activa',
      salesCount: 89,
      revenue: 3200,
      minPurchase: null,
      conditions: 'El producto de menor precio es el gratuito.',
    },
    {
      id: 'PROMO-003',
      name: 'Flash Sale Electrónica',
      description: 'Descuento exclusivo de S/ 50 en productos electrónicos seleccionados.',
      type: 'Monto fijo',
      value: 'S/ 50',
      category: 'Electrónica',
      productsCount: 8,
      products: ['Reloj SmartFit X', 'Audífonos BT Pro', 'Cargador Dual USB'],
      startDate: '10 May 2026',
      endDate: '12 May 2026',
      status: 'Programada',
      salesCount: 0,
      revenue: 0,
      minPurchase: 'S/ 150',
      conditions: 'Válido solo para compras mayores a S/ 150.',
    },
    {
      id: 'PROMO-004',
      name: 'Descuento Cumpleañeros',
      description: '15% de descuento para clientes que cumplan años durante el mes en curso.',
      type: 'Porcentaje',
      value: '15%',
      category: 'General',
      productsCount: 0,
      products: [],
      startDate: '01 Ene 2026',
      endDate: '31 Dic 2026',
      status: 'Activa',
      salesCount: 54,
      revenue: 2180,
      minPurchase: null,
      conditions: 'Presentar DNI para verificar fecha de nacimiento.',
    },
    {
      id: 'PROMO-005',
      name: 'Combo Deportivo',
      description: 'Zapatillas + camiseta deportiva con 30% de descuento en el combo.',
      type: 'Combo',
      value: '30%',
      category: 'Deportes',
      productsCount: 6,
      products: ['Zapatillas Urban Pro', 'Camiseta Dry-Fit', 'Short Running'],
      startDate: '01 Mar 2026',
      endDate: '30 Abr 2026',
      status: 'Vencida',
      salesCount: 67,
      revenue: 5340,
      minPurchase: null,
      conditions: 'Debe incluir al menos 1 zapatilla + 1 prenda.',
    },
    {
      id: 'PROMO-006',
      name: 'Black Friday Anticipado',
      description: 'Hasta 40% de descuento en productos seleccionados antes del Black Friday.',
      type: 'Porcentaje',
      value: '40%',
      category: 'General',
      productsCount: 45,
      products: ['Varios productos de todas las categorías'],
      startDate: '20 Nov 2026',
      endDate: '30 Nov 2026',
      status: 'Programada',
      salesCount: 0,
      revenue: 0,
      minPurchase: null,
      conditions: 'Hasta agotar stock. No acumulable con otras promociones.',
    },
    {
      id: 'PROMO-007',
      name: 'Happy Hour Viernes',
      description: '10% de descuento en todas las compras realizadas los viernes entre 5pm y 8pm.',
      type: 'Porcentaje',
      value: '10%',
      category: 'General',
      productsCount: 0,
      products: [],
      startDate: '01 Abr 2026',
      endDate: '30 Jun 2026',
      status: 'Pausada',
      salesCount: 23,
      revenue: 890,
      minPurchase: 'S/ 50',
      conditions: 'Solo viernes de 5:00pm a 8:00pm. Compra mínima S/ 50.',
    },
  ];

  // ── Métricas del panel lateral ──
  get activePromotionsCount() {
    return this.promotions.filter(p => p.status === 'Activa').length;
  }

  get totalRevenue() {
    return this.promotions.reduce((sum, p) => sum + p.revenue, 0);
  }

  get totalSales() {
    return this.promotions.reduce((sum, p) => sum + p.salesCount, 0);
  }

  // ── Métodos de interacción ──
  showPromotionDetails(promo: any) {
    this.activePromotion = promo;
  }

  closePromotionDetails() {
    this.activePromotion = null;
  }

  isPromoSelected(promo: any) {
    return this.selectedPromotions.some(s => s.id === promo.id);
  }

  togglePromoSelection(promo: any, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedPromotions = checked
      ? this.isPromoSelected(promo) ? this.selectedPromotions : [...this.selectedPromotions, promo]
      : this.selectedPromotions.filter(s => s.id !== promo.id);
  }

  toggleAllPromos(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedPromotions = checked ? [...this.promotions] : [];
  }

  areAllPromosSelected() {
    return this.promotions.length > 0 && this.selectedPromotions.length === this.promotions.length;
  }

  hasPartialSelection() {
    return this.selectedPromotions.length > 0 && !this.areAllPromosSelected();
  }

  clearSelection() {
    this.selectedPromotions = [];
  }

  getStatusClass(status: string) {
    return {
      Activa: 'status-active',
      Programada: 'status-scheduled',
      Vencida: 'status-expired',
      Pausada: 'status-paused',
    }[status] || 'status-active';
  }

  getTypeIcon(type: string) {
    if (type === 'Porcentaje') return Percent;
    if (type === '2x1') return Gift;
    if (type === 'Monto fijo') return DollarSign;
    if (type === 'Combo') return ShoppingBag;
    return Tag;
  }
}
