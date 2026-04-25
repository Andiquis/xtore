import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  BadgeCheck,
  Eraser,
  Eye,
  KeyRound,
  LockKeyhole,
  Mail,
  Plus,
  Search,
  ShieldCheck,
  Trash2,
  UserCog,
  UserPlus,
  Users as UsersIcon,
  XCircle,
} from 'lucide-angular';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios {
  SearchIcon = Search;
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EyeIcon = Eye;
  KeyIcon = KeyRound;
  LockIcon = LockKeyhole;
  DeleteIcon = Trash2;
  MailIcon = Mail;
  RoleIcon = ShieldCheck;
  UserIcon = UserCog;

  kpis = [
    { label: 'Usuarios activos', value: '18', helper: 'Acceso habilitado', icon: UsersIcon, tone: 'blue' },
    { label: 'Administradores', value: '4', helper: 'Permisos completos', icon: ShieldCheck, tone: 'green' },
    { label: 'Pendientes', value: '3', helper: 'Sin primer acceso', icon: UserPlus, tone: 'amber' },
    { label: 'Bloqueados', value: '2', helper: 'Requieren revisión', icon: XCircle, tone: 'rose' },
  ];

  users = [
    { id: 'USR-001', name: 'Anderson Vega', email: 'anderson@xtore.pe', username: 'anderson', role: 'Administrador', status: 'Activo', access: 'Hoy 09:42', permissions: ['Dashboard', 'Ventas', 'Productos', 'Inventario', 'Reportes'] },
    { id: 'USR-002', name: 'Lucía Ramos', email: 'lucia@xtore.pe', username: 'lramos', role: 'Vendedor', status: 'Activo', access: 'Hoy 10:18', permissions: ['Ventas', 'Caja', 'Clientes'] },
    { id: 'USR-003', name: 'Carlos Medina', email: 'carlos@xtore.pe', username: 'cmedina', role: 'Inventario', status: 'Pendiente', access: 'Sin acceso', permissions: ['Inventario', 'Compras', 'Productos'] },
    { id: 'USR-004', name: 'Ana Torres', email: 'ana@xtore.pe', username: 'atorres', role: 'Cajero', status: 'Bloqueado', access: '22 Abr 2026', permissions: ['Caja', 'Ventas'] },
  ];

  roles = [
    { name: 'Administrador', count: 4, description: 'Acceso total al panel' },
    { name: 'Vendedor', count: 7, description: 'Ventas, clientes y comprobantes' },
    { name: 'Inventario', count: 3, description: 'Stock, compras y kardex' },
  ];

  activeUser: any = null;
  selectedUsers: any[] = [];

  showUserDetails(user: any) {
    this.activeUser = user;
  }

  closeUserDetails() {
    this.activeUser = null;
  }

  isUserSelected(user: any) {
    return this.selectedUsers.some(selected => selected.id === user.id);
  }

  toggleUserSelection(user: any, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedUsers = checked
      ? this.isUserSelected(user) ? this.selectedUsers : [...this.selectedUsers, user]
      : this.selectedUsers.filter(selected => selected.id !== user.id);
  }

  toggleAllUsers(event: Event) {
    this.selectedUsers = (event.target as HTMLInputElement).checked ? [...this.users] : [];
  }

  areAllUsersSelected() {
    return this.users.length > 0 && this.selectedUsers.length === this.users.length;
  }

  hasPartialSelection() {
    return this.selectedUsers.length > 0 && !this.areAllUsersSelected();
  }

  clearSelection() {
    this.selectedUsers = [];
  }

  getStatusClass(status: string) {
    return {
      Activo: 'status-active',
      Pendiente: 'status-pending',
      Bloqueado: 'status-blocked',
      Inactivo: 'status-inactive',
    }[status] || 'status-inactive';
  }
}
