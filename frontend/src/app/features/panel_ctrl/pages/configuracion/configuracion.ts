import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Building2,
  Receipt,
  Coins,
  FileText,
  Package,
  ShoppingCart,
  CreditCard,
  Settings,
  Save,
  RotateCcw,
  Upload,
  Globe,
  Clock,
  Mail,
  Phone,
  MapPin,
  Shield,
  Bell,
  Palette,
} from 'lucide-angular';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  templateUrl: './configuracion.html',
  styleUrl: './configuracion.scss',
})
export class Configuracion {
  // ── Iconos ──
  SaveIcon = Save;
  ResetIcon = RotateCcw;
  UploadIcon = Upload;

  // ── Estado ──
  activeTab = 'empresa';
  isSaved = false;

  tabs = [
    { id: 'empresa', label: 'Empresa', icon: Building2 },
    { id: 'fiscal', label: 'Fiscal', icon: Receipt },
    { id: 'moneda', label: 'Moneda e Impuestos', icon: Coins },
    { id: 'comprobantes', label: 'Comprobantes', icon: FileText },
    { id: 'inventario', label: 'Inventario', icon: Package },
    { id: 'ventas', label: 'Ventas', icon: ShoppingCart },
    { id: 'pagos', label: 'Métodos de Pago', icon: CreditCard },
    { id: 'sistema', label: 'Sistema', icon: Settings },
  ];

  // ── Datos Mock: Empresa ──
  empresa = {
    nombre: 'Mi Tienda XYZ',
    razonSocial: 'Mi Tienda XYZ S.A.C.',
    ruc: '20612345678',
    direccion: 'Av. Arequipa 1234, Miraflores, Lima',
    telefono: '+51 987 654 321',
    email: 'admin@mitiendaxyz.pe',
    web: 'www.mitiendaxyz.pe',
    logo: null as string | null,
  };

  // ── Datos Mock: Fiscal ──
  fiscal = {
    regimenTributario: 'Régimen MYPE Tributario',
    tipoContribuyente: 'Persona Jurídica',
    actividadEconomica: 'Venta al por menor de productos textiles y calzado',
    ubigeo: '150132',
    codigoEstablecimiento: '0001',
  };

  // ── Datos Mock: Moneda e Impuestos ──
  moneda = {
    monedaPrincipal: 'PEN',
    simbolo: 'S/',
    igv: 18,
    igvIncluido: true,
    redondeo: 2,
  };

  // ── Datos Mock: Comprobantes ──
  comprobantes = {
    serieBoleta: 'B001',
    serieFactura: 'F001',
    correlativoBoleta: 438,
    correlativoFactura: 92,
    piePagina: 'Gracias por su compra. Visítenos en www.mitiendaxyz.pe',
    emisionElectronica: true,
  };

  // ── Datos Mock: Inventario ──
  inventarioConfig = {
    stockMinimo: 5,
    alertaStock: true,
    permitirVentaSinStock: false,
    metodoValuacion: 'PEPS',
    autoAjusteCompra: true,
  };

  // ── Datos Mock: Ventas ──
  ventasConfig = {
    descuentoMaximo: 30,
    permitirDescuentoManual: true,
    imprimirAutomatico: false,
    clienteObligatorio: false,
    montoMinimoFactura: 0,
  };

  // ── Datos Mock: Métodos de Pago ──
  metodosPago = [
    { id: 1, nombre: 'Efectivo', activo: true, comision: 0 },
    { id: 2, nombre: 'Tarjeta Visa/MC', activo: true, comision: 3.5 },
    { id: 3, nombre: 'Yape', activo: true, comision: 0 },
    { id: 4, nombre: 'Plin', activo: true, comision: 0 },
    { id: 5, nombre: 'Transferencia Bancaria', activo: true, comision: 0 },
    { id: 6, nombre: 'Crédito', activo: false, comision: 0 },
  ];

  // ── Datos Mock: Sistema ──
  sistemaConfig = {
    idioma: 'Español',
    zonaHoraria: 'America/Lima',
    formatoFecha: 'DD/MM/YYYY',
    formatoHora: '12h',
    notificaciones: true,
    sonidoAlerta: true,
    modoOscuro: false,
    sesionDuracion: 8,
  };

  // ── Métodos ──
  setTab(tabId: string) {
    this.activeTab = tabId;
    this.isSaved = false;
  }

  guardarConfiguracion() {
    this.isSaved = true;
    setTimeout(() => this.isSaved = false, 3000);
  }

  toggleMetodoPago(metodo: any) {
    metodo.activo = !metodo.activo;
  }
}
