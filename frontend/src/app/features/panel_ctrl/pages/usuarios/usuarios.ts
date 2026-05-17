import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Eraser,
  Eye,
  KeyRound,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Trash2,
  UserCog,
  UserPlus,
  Users as UsersIcon,
  XCircle,
} from 'lucide-angular';
import {
  BarraFiltroItem,
  BarraFiltros,
  BarraFiltrosConfig,
  BarraFiltrosState,
} from '../../components/barra-filtros/barra-filtros';

type UserFilterId = 'role' | 'status' | 'access';

const DEFAULT_USER_FILTERS: Record<UserFilterId, string> = {
  role: 'todos',
  status: 'todos',
  access: 'todos',
};

const USER_ROLE_OPTIONS = ['Administrador', 'Vendedor', 'Inventario', 'Cajero'] as const;
const USER_STATUS_OPTIONS = ['Activo', 'Pendiente', 'Bloqueado'] as const;
const USER_ACCESS_OPTIONS = [
  { label: 'Hoy', value: 'hoy' },
  { label: 'Esta semana', value: 'semana' },
  { label: 'Sin acceso', value: 'sin-acceso' },
] as const;

const USER_FILTERS = [
  {
    id: 'role',
    ariaLabel: 'Rol',
    options: [
      { label: 'Todos los roles', value: DEFAULT_USER_FILTERS.role },
      ...USER_ROLE_OPTIONS,
    ],
  },
  {
    id: 'status',
    ariaLabel: 'Estado',
    options: [
      { label: 'Todos los estados', value: DEFAULT_USER_FILTERS.status },
      ...USER_STATUS_OPTIONS,
    ],
  },
  {
    id: 'access',
    ariaLabel: 'Último acceso',
    options: [
      { label: 'Último acceso', value: DEFAULT_USER_FILTERS.access },
      ...USER_ACCESS_OPTIONS,
    ],
  },
] as const satisfies readonly BarraFiltroItem[];

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, BarraFiltros],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios {
  EraserIcon = Eraser;
  EyeIcon = Eye;
  KeyIcon = KeyRound;
  LockIcon = LockKeyhole;
  DeleteIcon = Trash2;
  MailIcon = Mail;
  RoleIcon = ShieldCheck;
  UserIcon = UserCog;

  kpis = [
    {
      label: 'Usuarios activos',
      value: '18',
      helper: 'Acceso habilitado',
      icon: UsersIcon,
      tone: 'blue',
    },
    {
      label: 'Administradores',
      value: '4',
      helper: 'Permisos completos',
      icon: ShieldCheck,
      tone: 'green',
    },
    { label: 'Pendientes', value: '3', helper: 'Sin primer acceso', icon: UserPlus, tone: 'amber' },
    { label: 'Bloqueados', value: '2', helper: 'Requieren revisión', icon: XCircle, tone: 'rose' },
  ];

  users = [
    {
      id: 'USR-001',
      name: 'Anderson Vega',
      email: 'anderson@xtore.pe',
      username: 'anderson',
      role: 'Administrador',
      status: 'Activo',
      access: 'Hoy 09:42',
      permissions: ['Dashboard', 'Ventas', 'Productos', 'Inventario', 'Reportes'],
    },
    {
      id: 'USR-002',
      name: 'Lucía Ramos',
      email: 'lucia@xtore.pe',
      username: 'lramos',
      role: 'Vendedor',
      status: 'Activo',
      access: 'Hoy 10:18',
      permissions: ['Ventas', 'Caja', 'Clientes'],
    },
    {
      id: 'USR-003',
      name: 'Carlos Medina',
      email: 'carlos@xtore.pe',
      username: 'cmedina',
      role: 'Inventario',
      status: 'Pendiente',
      access: 'Sin acceso',
      permissions: ['Inventario', 'Compras', 'Productos'],
    },
    {
      id: 'USR-004',
      name: 'Ana Torres',
      email: 'ana@xtore.pe',
      username: 'atorres',
      role: 'Cajero',
      status: 'Bloqueado',
      access: '22 Abr 2026',
      permissions: ['Caja', 'Ventas'],
    },
  ];

  roles = [
    { name: 'Administrador', count: 4, description: 'Acceso total al panel' },
    { name: 'Vendedor', count: 7, description: 'Ventas, clientes y comprobantes' },
    { name: 'Inventario', count: 3, description: 'Stock, compras y kardex' },
  ];

  activeUser: any = null;
  selectedUsers: any[] = [];
  searchTerm = '';
  userFilterValues: Record<UserFilterId, string> = { ...DEFAULT_USER_FILTERS };

  get userFilterConfig(): BarraFiltrosConfig {
    return {
      filters: USER_FILTERS,
      filterValues: this.userFilterValues,
      searchValue: this.searchTerm,
      showClearButton: this.hasActiveUserFilters,
      searchPlaceholder: 'Buscar por nombre, correo o usuario',
      actionLabel: 'Nuevo usuario',
    };
  }

  get hasActiveUserFilters(): boolean {
    return (
      Boolean(this.searchTerm) ||
      Object.entries(this.userFilterValues).some(
        ([key, value]) => value !== DEFAULT_USER_FILTERS[key as UserFilterId],
      )
    );
  }

  get filteredUsers() {
    const term = this.normalizeText(this.searchTerm);

    return this.users.filter((user) => {
      const searchable = [user.name, user.email, user.username, user.role, user.status].join(' ');
      const matchesSearch = !term || this.normalizeText(searchable).includes(term);
      const matchesRole =
        this.userFilterValues.role === DEFAULT_USER_FILTERS.role ||
        user.role === this.userFilterValues.role;
      const matchesStatus =
        this.userFilterValues.status === DEFAULT_USER_FILTERS.status ||
        user.status === this.userFilterValues.status;
      const matchesAccess =
        this.userFilterValues.access === DEFAULT_USER_FILTERS.access ||
        this.matchesAccessFilter(user.access, this.userFilterValues.access);

      return matchesSearch && matchesRole && matchesStatus && matchesAccess;
    });
  }

  setUserFilterState(state: BarraFiltrosState) {
    this.searchTerm = state.search;
    this.userFilterValues = {
      role: state.filters['role'] ?? DEFAULT_USER_FILTERS.role,
      status: state.filters['status'] ?? DEFAULT_USER_FILTERS.status,
      access: state.filters['access'] ?? DEFAULT_USER_FILTERS.access,
    };
    this.selectedUsers = this.selectedUsers.filter((selected) =>
      this.filteredUsers.some((user) => user.id === selected.id),
    );
  }

  showUserDetails(user: any) {
    this.activeUser = user;
  }

  closeUserDetails() {
    this.activeUser = null;
  }

  isUserSelected(user: any) {
    return this.selectedUsers.some((selected) => selected.id === user.id);
  }

  toggleUserSelection(user: any, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedUsers = checked
      ? this.isUserSelected(user)
        ? this.selectedUsers
        : [...this.selectedUsers, user]
      : this.selectedUsers.filter((selected) => selected.id !== user.id);
  }

  toggleAllUsers(event: Event) {
    this.selectedUsers = (event.target as HTMLInputElement).checked ? [...this.filteredUsers] : [];
  }

  areAllUsersSelected() {
    return this.filteredUsers.length > 0 && this.selectedUsers.length === this.filteredUsers.length;
  }

  hasPartialSelection() {
    return this.selectedUsers.length > 0 && !this.areAllUsersSelected();
  }

  clearSelection() {
    this.selectedUsers = [];
  }

  getStatusClass(status: string) {
    return (
      {
        Activo: 'status-active',
        Pendiente: 'status-pending',
        Bloqueado: 'status-blocked',
        Inactivo: 'status-inactive',
      }[status] || 'status-inactive'
    );
  }

  private matchesAccessFilter(access: string, filter: string): boolean {
    if (filter === 'hoy') {
      return access.startsWith('Hoy');
    }

    if (filter === 'sin-acceso') {
      return access === 'Sin acceso';
    }

    return filter === 'semana' && access !== 'Sin acceso';
  }

  private normalizeText(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }
}
