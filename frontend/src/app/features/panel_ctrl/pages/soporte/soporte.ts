import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Search,
  Eraser,
  Plus,
  Eye,
  MessageSquare,
  Clock,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Headphones,
  Send,
  MoreVertical,
  ArrowUpRight,
  User,
  X,
  Inbox,
  Loader2,
  ShieldCheck,
  CreditCard,
  Package,
  Settings,
  HelpCircle,
} from 'lucide-angular';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './soporte.html',
  styleUrl: './soporte.scss',
})
export class Soporte {
  // ── Iconos ──
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  MessageIcon = MessageSquare;
  ClockIcon = Clock;
  AlertIcon = AlertCircle;
  CheckIcon = CheckCircle2;
  XCircleIcon = XCircle;
  HeadphonesIcon = Headphones;
  SendIcon = Send;
  MoreIcon = MoreVertical;
  ArrowIcon = ArrowUpRight;
  UserIcon = User;
  CloseIcon = X;
  InboxIcon = Inbox;
  LoaderIcon = Loader2;
  ShieldIcon = ShieldCheck;
  HelpIcon = HelpCircle;

  // ── Estado ──
  activeTicket: any = null;
  selectedTickets: any[] = [];

  // ── KPIs ──
  kpis = [
    { label: 'Abiertos', value: '8', helper: '3 nuevos hoy', icon: Inbox, tone: 'blue' },
    { label: 'En progreso', value: '5', helper: '2 asignados a ti', icon: Loader2, tone: 'amber' },
    { label: 'Resueltos hoy', value: '12', helper: '+25% vs ayer', icon: CheckCircle2, tone: 'green' },
    { label: 'Tiempo promedio', value: '2.4h', helper: 'De respuesta', icon: Clock, tone: 'rose' },
  ];

  // ── Datos Mock: Tickets ──
  tickets = [
    {
      id: 'TKT-001',
      subject: 'Error al procesar pago con tarjeta',
      customer: 'María López',
      customerEmail: 'maria.lopez@email.com',
      priority: 'Alta',
      status: 'Abierto',
      assignee: 'Anderson',
      category: 'Pagos',
      categoryIcon: CreditCard,
      createdAt: '03 May 2026',
      lastUpdate: 'Hace 15 min',
      messages: [
        { sender: 'María López', role: 'cliente', text: 'Buenos días, intenté pagar con mi tarjeta Visa y me sale error "Transacción rechazada". Ya verifiqué con mi banco y no hay problema.', time: '10:15 AM' },
        { sender: 'Anderson', role: 'agente', text: 'Hola María, gracias por contactarnos. Voy a revisar los logs de la pasarela de pago. ¿Podrías indicarme los últimos 4 dígitos de tu tarjeta?', time: '10:22 AM' },
        { sender: 'María López', role: 'cliente', text: 'Claro, terminan en 4582. El monto era S/ 458.90.', time: '10:25 AM' },
      ]
    },
    {
      id: 'TKT-002',
      subject: 'Producto recibido dañado',
      customer: 'Carlos Ramírez',
      customerEmail: 'carlos.r@email.com',
      priority: 'Alta',
      status: 'En Progreso',
      assignee: 'Lucía',
      category: 'Productos',
      categoryIcon: Package,
      createdAt: '02 May 2026',
      lastUpdate: 'Hace 1h',
      messages: [
        { sender: 'Carlos Ramírez', role: 'cliente', text: 'Recibí mi pedido #1038 pero la caja de las zapatillas estaba aplastada y el producto tiene una marca.', time: '09:00 AM' },
        { sender: 'Lucía', role: 'agente', text: 'Lamentamos mucho la situación, Carlos. ¿Podrías enviarnos fotos del producto y del empaque?', time: '09:30 AM' },
      ]
    },
    {
      id: 'TKT-003',
      subject: 'No puedo cambiar mi contraseña',
      customer: 'Ana Paredes',
      customerEmail: 'ana.p@email.com',
      priority: 'Media',
      status: 'Abierto',
      assignee: null,
      category: 'Cuenta',
      categoryIcon: Settings,
      createdAt: '03 May 2026',
      lastUpdate: 'Hace 30 min',
      messages: [
        { sender: 'Ana Paredes', role: 'cliente', text: 'Intento cambiar mi contraseña desde el perfil pero el botón de guardar no funciona.', time: '11:00 AM' },
      ]
    },
    {
      id: 'TKT-004',
      subject: 'Consulta sobre garantía de reloj',
      customer: 'Diego Salas',
      customerEmail: 'diego.s@email.com',
      priority: 'Baja',
      status: 'Resuelto',
      assignee: 'Anderson',
      category: 'General',
      categoryIcon: HelpCircle,
      createdAt: '01 May 2026',
      lastUpdate: 'Hace 2 días',
      messages: [
        { sender: 'Diego Salas', role: 'cliente', text: '¿Mi Reloj SmartFit X tiene garantía? Lo compré hace 2 meses.', time: '02:00 PM' },
        { sender: 'Anderson', role: 'agente', text: 'Hola Diego, sí. El Reloj SmartFit X tiene garantía de 12 meses contra defectos de fábrica. Puedes presentar tu comprobante de compra en tienda.', time: '02:15 PM' },
        { sender: 'Diego Salas', role: 'cliente', text: 'Perfecto, muchas gracias por la información.', time: '02:20 PM' },
      ]
    },
    {
      id: 'TKT-005',
      subject: 'Solicitud de factura electrónica',
      customer: 'Comercial Rivera SAC',
      customerEmail: 'admin@rivera.pe',
      priority: 'Media',
      status: 'En Progreso',
      assignee: 'Carlos',
      category: 'Pagos',
      categoryIcon: CreditCard,
      createdAt: '02 May 2026',
      lastUpdate: 'Hace 4h',
      messages: [
        { sender: 'Comercial Rivera SAC', role: 'cliente', text: 'Necesitamos la factura electrónica del pedido F001-000092 para nuestro registro contable.', time: '08:00 AM' },
        { sender: 'Carlos', role: 'agente', text: 'Buenos días, estamos generando la factura. Se la enviaremos al correo registrado en un máximo de 24 horas.', time: '08:45 AM' },
      ]
    },
    {
      id: 'TKT-006',
      subject: 'Stock incorrecto en la web',
      customer: 'Luis Torres',
      customerEmail: 'luis.t@email.com',
      priority: 'Media',
      status: 'Cerrado',
      assignee: 'Lucía',
      category: 'Productos',
      categoryIcon: Package,
      createdAt: '28 Abr 2026',
      lastUpdate: 'Hace 5 días',
      messages: [
        { sender: 'Luis Torres', role: 'cliente', text: 'La web muestra 20 unidades de la Mochila Explorer pero en tienda me dicen que no hay.', time: '03:00 PM' },
        { sender: 'Lucía', role: 'agente', text: 'Gracias por reportar esto, Luis. Ya actualizamos el stock. Lamentamos la confusión.', time: '03:30 PM' },
      ]
    },
  ];

  // ── Métodos ──
  showTicketDetails(ticket: any) {
    this.activeTicket = ticket;
  }

  closeTicketDetails() {
    this.activeTicket = null;
  }

  isTicketSelected(ticket: any) {
    return this.selectedTickets.some(s => s.id === ticket.id);
  }

  toggleTicketSelection(ticket: any, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedTickets = checked
      ? this.isTicketSelected(ticket) ? this.selectedTickets : [...this.selectedTickets, ticket]
      : this.selectedTickets.filter(s => s.id !== ticket.id);
  }

  toggleAllTickets(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedTickets = checked ? [...this.tickets] : [];
  }

  areAllTicketsSelected() {
    return this.tickets.length > 0 && this.selectedTickets.length === this.tickets.length;
  }

  hasPartialSelection() {
    return this.selectedTickets.length > 0 && !this.areAllTicketsSelected();
  }

  clearSelection() {
    this.selectedTickets = [];
  }

  getStatusClass(status: string) {
    return {
      'Abierto': 'status-open',
      'En Progreso': 'status-progress',
      'Resuelto': 'status-resolved',
      'Cerrado': 'status-closed',
    }[status] || 'status-open';
  }

  getPriorityClass(priority: string) {
    return {
      'Alta': 'priority-high',
      'Media': 'priority-medium',
      'Baja': 'priority-low',
    }[priority] || 'priority-low';
  }
}
