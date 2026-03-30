import { Component } from '@angular/core';
import { CrudButtons } from '../../components/crud-buttons/crud-buttons';
import {
  ListTable,
  TableColumn,
  TableAction,
  TableConfig,
  PaginationConfig,
  BadgeConfig,
} from '../../components/list-table/list-table';
import { Form1, FormField, FormConfig, FormErrors } from '../../components/form1/form1';
import {
  RevealCardComponent,
  CardContent,
} from '../../../../shared/components/reveal-card/reveal-card';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';

// ─── Interfaces ────────────────────────────────────────────────
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  estado: 'Activo' | 'Inactivo' | 'Pendiente';
  rol: string;
  fechaCreacion: string;
}

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    CrudButtons,
    ListTable,
    Form1,
    RevealCardComponent,
    MatButtonModule,
    MatIconModule,
    ButtonModule,
  ],
  templateUrl: './crud.html',
  styleUrls: ['./crud.scss'],
})
export class Crud {
  // ─── Reveal Cards ───────────────────────────────────────────────
  directions: ('top' | 'bottom' | 'left' | 'right')[] = ['bottom', 'top', 'left', 'right'];

  revealCards: CardContent[] = [
    {
      title: 'Crear Registro',
      subtitle: 'Agregar nuevo',
      icon: '➕',
      badge: 'Acción',
      description: 'Crea un nuevo registro en la base de datos con validaciones completas.',
      stats: [
        { label: 'Campos', value: '4' },
        { label: 'Tiempo', value: '2s' },
      ],
      actions: [
        { label: 'Crear', callback: () => this.onAction('crear') },
        { label: 'Cancelar', callback: () => console.log('Cancelado') },
      ],
    },
    {
      title: 'Ver Detalles',
      subtitle: 'Información completa',
      icon: '👁️',
      badge: 'Ver',
      description: 'Consulta la información detallada de cualquier registro existente.',
      stats: [
        { label: 'Registros', value: '8' },
        { label: 'Campos', value: '6' },
      ],
      actions: [
        { label: 'Ver', callback: () => this.onAction('leer') },
        { label: 'Cerrar', callback: () => console.log('Cerrado') },
      ],
    },
    {
      title: 'Actualizar',
      subtitle: 'Editar registro',
      icon: '✏️',
      badge: 'Editar',
      description: 'Modifica los datos de un registro existente de forma segura.',
      stats: [
        { label: 'Editable', value: '100%' },
        { label: 'Historial', value: 'Sí' },
      ],
      actions: [
        { label: 'Editar', callback: () => this.onAction('actualizar') },
        { label: 'Descartar', callback: () => console.log('Descartado') },
      ],
    },
    {
      title: 'Eliminar',
      subtitle: 'Remover registro',
      icon: '🗑️',
      badge: 'Peligro',
      description: 'Elimina un registro de forma permanente. Esta acción no se puede deshacer.',
      stats: [
        { label: 'Confirmar', value: 'Requerido' },
        { label: 'Reversible', value: 'No' },
      ],
      actions: [
        { label: 'Eliminar', callback: () => this.onAction('eliminar') },
        { label: 'Cancelar', callback: () => console.log('Cancelado') },
      ],
    },
  ];

  getRevealDirection(index: number): 'top' | 'bottom' | 'left' | 'right' {
    return this.directions[index % this.directions.length];
  }

  // ─── Table Configuration ────────────────────────────────────────
  tableConfig: TableConfig = {
    title: 'Usuarios del Sistema',
    subtitle: 'Gestión de usuarios',
    searchable: true,
    searchPlaceholder: 'Buscar por nombre, email...',
    selectable: true,
    hoverable: true,
    emptyMessage: 'No se encontraron usuarios',
    loadingMessage: 'Cargando usuarios...',
  };

  paginationConfig: PaginationConfig = {
    enabled: true,
    pageSize: 5,
    pageSizeOptions: [5, 10, 25, 50],
  };

  // Badge configuration for status column
  estadoBadgeConfig: BadgeConfig = {
    Activo: { variant: 'green', label: 'Activo' },
    Inactivo: { variant: 'rust', label: 'Inactivo' },
    Pendiente: { variant: 'amber', label: 'Pendiente' },
  };

  // Column definitions with full typing
  columns: TableColumn<Usuario>[] = [
    {
      field: 'id',
      header: 'ID',
      sortable: true,
      width: '80px',
      align: 'center',
      type: 'number',
    },
    {
      field: 'nombre',
      header: 'Nombre',
      sortable: true,
      filterable: true,
    },
    {
      field: 'email',
      header: 'Email',
      sortable: true,
      filterable: true,
    },
    {
      field: 'rol',
      header: 'Rol',
      sortable: true,
    },
    {
      field: 'estado',
      header: 'Estado',
      sortable: true,
      type: 'badge',
      badgeConfig: this.estadoBadgeConfig,
      align: 'center',
    },
    {
      field: 'fechaCreacion',
      header: 'Fecha Creación',
      sortable: true,
      type: 'date',
      align: 'center',
    },
  ];

  // Table actions
  tableActions: TableAction<Usuario>[] = [
    {
      icon: '👁️',
      label: 'Ver detalles',
      callback: (row) => this.viewUser(row),
      variant: 'default',
    },
    {
      icon: '✏️',
      label: 'Editar',
      callback: (row) => this.editUser(row),
      variant: 'primary',
    },
    {
      icon: '🗑️',
      label: 'Eliminar',
      callback: (row) => this.deleteUser(row),
      variant: 'danger',
      visible: (row) => row.estado !== 'Activo', // Solo mostrar si no está activo
    },
  ];

  // Sample data
  data: Usuario[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan@email.com',
      estado: 'Activo',
      rol: 'Administrador',
      fechaCreacion: '2024-01-15',
    },
    {
      id: 2,
      nombre: 'Ana Torres',
      email: 'ana@email.com',
      estado: 'Activo',
      rol: 'Editor',
      fechaCreacion: '2024-02-20',
    },
    {
      id: 3,
      nombre: 'Carlos Vega',
      email: 'carlos@email.com',
      estado: 'Inactivo',
      rol: 'Viewer',
      fechaCreacion: '2024-03-10',
    },
    {
      id: 4,
      nombre: 'María López',
      email: 'maria@email.com',
      estado: 'Pendiente',
      rol: 'Editor',
      fechaCreacion: '2024-03-25',
    },
    {
      id: 5,
      nombre: 'Pedro Sánchez',
      email: 'pedro@email.com',
      estado: 'Activo',
      rol: 'Viewer',
      fechaCreacion: '2024-04-01',
    },
    {
      id: 6,
      nombre: 'Laura García',
      email: 'laura@email.com',
      estado: 'Activo',
      rol: 'Administrador',
      fechaCreacion: '2024-04-05',
    },
    {
      id: 7,
      nombre: 'Roberto Díaz',
      email: 'roberto@email.com',
      estado: 'Inactivo',
      rol: 'Viewer',
      fechaCreacion: '2024-04-10',
    },
    {
      id: 8,
      nombre: 'Carmen Ruiz',
      email: 'carmen@email.com',
      estado: 'Pendiente',
      rol: 'Editor',
      fechaCreacion: '2024-04-15',
    },
  ];

  selectedUsers: Usuario[] = [];
  isLoading = false;

  // ─── Form Configuration ─────────────────────────────────────────
  formConfig: FormConfig = {
    title: 'Nuevo Usuario',
    subtitle: 'Complete los datos del usuario',
    layout: 'vertical',
    columns: 2,
    showReset: true,
    submitLabel: 'Guardar Usuario',
    resetLabel: 'Limpiar Formulario',
    submitIcon: '💾',
    variant: 'floating',
    loading: false,
  };

  formFields: FormField[] = [
    {
      name: 'nombre',
      label: 'Nombre Completo',
      type: 'text',
      placeholder: 'Ingrese nombre completo',
      icon: '👤',
      hint: 'Nombre y apellidos del usuario',
      validations: [
        { type: 'required', message: 'El nombre es obligatorio' },
        { type: 'minLength', value: 3, message: 'Mínimo 3 caracteres' },
        { type: 'maxLength', value: 100, message: 'Máximo 100 caracteres' },
      ],
      width: 'half',
    },
    {
      name: 'email',
      label: 'Correo Electrónico',
      type: 'email',
      placeholder: 'usuario@ejemplo.com',
      icon: '📧',
      hint: 'Se usará para iniciar sesión',
      validations: [
        { type: 'required', message: 'El email es obligatorio' },
        { type: 'email', message: 'Ingrese un email válido' },
      ],
      width: 'half',
    },
    {
      name: 'rol',
      label: 'Rol del Usuario',
      type: 'select',
      placeholder: 'Seleccionar rol...',
      icon: '🎭',
      options: [
        { value: 'Administrador', label: 'Administrador' },
        { value: 'Editor', label: 'Editor' },
        { value: 'Viewer', label: 'Visualizador' },
      ],
      validations: [{ type: 'required', message: 'Debe seleccionar un rol' }],
      width: 'half',
    },
    {
      name: 'estado',
      label: 'Estado',
      type: 'select',
      placeholder: 'Seleccionar estado...',
      icon: '📊',
      options: [
        { value: 'Activo', label: 'Activo' },
        { value: 'Inactivo', label: 'Inactivo' },
        { value: 'Pendiente', label: 'Pendiente' },
      ],
      validations: [{ type: 'required', message: 'Debe seleccionar un estado' }],
      width: 'half',
    },
    {
      name: 'telefono',
      label: 'Teléfono',
      type: 'tel',
      placeholder: '+51 999 999 999',
      icon: '📱',
      hint: 'Opcional - Número de contacto',
      width: 'half',
    },
    {
      name: 'fechaNacimiento',
      label: 'Fecha de Nacimiento',
      type: 'date',
      icon: '🎂',
      hint: 'Opcional - Para personalización',
      width: 'half',
    },
    {
      name: 'notificaciones',
      label: 'Recibir Notificaciones',
      type: 'switch',
      placeholder: 'Activar notificaciones por email',
      defaultValue: true,
      width: 'full',
    },
    {
      name: 'biografia',
      label: 'Biografía',
      type: 'textarea',
      placeholder: 'Breve descripción del usuario...',
      rows: 4,
      hint: 'Opcional - Máximo 500 caracteres',
      validations: [{ type: 'maxLength', value: 500, message: 'Máximo 500 caracteres' }],
      width: 'full',
    },
  ];

  formModel: Partial<Usuario> = {};

  // ─── Table Event Handlers ───────────────────────────────────────
  onRowClick(user: Usuario): void {
    console.log('Row clicked:', user);
  }

  onRowDoubleClick(user: Usuario): void {
    console.log('Row double-clicked:', user);
    this.editUser(user);
  }

  onSelectionChange(users: Usuario[]): void {
    this.selectedUsers = users;
    console.log('Selection changed:', users);
  }

  onSortChange(sort: { field: string; direction: 'asc' | 'desc' | null }): void {
    console.log('Sort changed:', sort);
  }

  onPageChange(page: { page: number; pageSize: number }): void {
    console.log('Page changed:', page);
  }

  // ─── Form Event Handlers ────────────────────────────────────────
  onFormValueChange(event: { field: string; value: any }): void {
    console.log('Form value changed:', event);
  }

  onFormValidationChange(event: { valid: boolean; errors: FormErrors }): void {
    console.log('Form validation:', event);
  }

  onFormReset(): void {
    console.log('Form reset');
    this.formModel = {};
  }

  // ─── Action Handlers ────────────────────────────────────────────
  viewUser(user: Usuario): void {
    console.log('Viewing user:', user);
    alert(`Ver usuario: ${user.nombre}\nEmail: ${user.email}\nRol: ${user.rol}`);
  }

  editUser(user: Usuario): void {
    console.log('Editing user:', user);
    this.formModel = { ...user };
    this.formConfig = {
      ...this.formConfig,
      title: 'Editar Usuario',
      subtitle: `Editando: ${user.nombre}`,
    };
  }

  deleteUser(user: Usuario): void {
    if (confirm(`¿Estás seguro de eliminar a ${user.nombre}?`)) {
      this.data = this.data.filter((u) => u.id !== user.id);
      console.log('User deleted:', user);
    }
  }

  // ─── Form Handler ───────────────────────────────────────────────
  guardar(formData: Partial<Usuario>): void {
    console.log('Datos recibidos:', formData);

    // Simular carga
    this.formConfig = { ...this.formConfig, loading: true };

    setTimeout(() => {
      if (this.formModel.id) {
        // Update existing
        const index = this.data.findIndex((u) => u.id === this.formModel.id);
        if (index !== -1) {
          this.data[index] = { ...this.data[index], ...formData } as Usuario;
          this.data = [...this.data]; // Trigger change detection
        }
      } else {
        // Create new
        const newUser: Usuario = {
          id: Math.max(...this.data.map((u) => u.id)) + 1,
          nombre: formData.nombre || '',
          email: formData.email || '',
          estado: (formData.estado as Usuario['estado']) || 'Pendiente',
          rol: formData.rol || 'Viewer',
          fechaCreacion: new Date().toISOString().split('T')[0],
        };
        this.data = [...this.data, newUser];
      }

      this.formConfig = { ...this.formConfig, loading: false };
      this.formModel = {};
      this.formConfig = {
        ...this.formConfig,
        title: 'Nuevo Usuario',
        subtitle: 'Complete los datos del usuario',
      };
    }, 1000);
  }

  // ─── CRUD Button Handler ────────────────────────────────────────
  onAction(type: 'crear' | 'leer' | 'actualizar' | 'eliminar'): void {
    console.log('Botón presionado:', type);

    switch (type) {
      case 'crear':
        this.formModel = {};
        this.formConfig = {
          ...this.formConfig,
          title: 'Nuevo Usuario',
          subtitle: 'Complete los datos del usuario',
        };
        console.log('Modo crear activado');
        break;

      case 'leer':
        if (this.selectedUsers.length > 0) {
          this.viewUser(this.selectedUsers[0]);
        } else {
          alert('Selecciona un usuario primero');
        }
        break;

      case 'actualizar':
        if (this.selectedUsers.length > 0) {
          this.editUser(this.selectedUsers[0]);
        } else {
          alert('Selecciona un usuario primero');
        }
        break;

      case 'eliminar':
        if (this.selectedUsers.length > 0) {
          this.selectedUsers.forEach((user) => this.deleteUser(user));
          this.selectedUsers = [];
        } else {
          alert('Selecciona al menos un usuario');
        }
        break;
    }
  }

  // ─── Utility Methods ────────────────────────────────────────────
  simulateLoading(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
