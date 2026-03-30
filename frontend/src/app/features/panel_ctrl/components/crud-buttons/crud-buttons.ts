import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
type CrudButtonType = 'crear' | 'leer' | 'actualizar' | 'eliminar';

interface CrudButton {
  type: CrudButtonType;
  label: string;
  class?: string; // para estilos
  confirm?: boolean; // si requiere confirmación
}

@Component({
  selector: 'app-crud-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-buttons.html',
  styleUrls: ['./crud-buttons.scss'],
})
export class CrudButtons {
  @Input() buttons: CrudButton[] = [];
  @Input() confirmMessage: string = '¿Estás seguro?'; // mensaje genérico
  @Output() action = new EventEmitter<CrudButtonType>();

  // Control del modal
  showConfirmModal = false;
  actionToConfirm: CrudButtonType | null = null;

  handleClick(btn: CrudButton) {
    if (btn.confirm) {
      // Guardamos acción y mostramos modal
      this.actionToConfirm = btn.type;
      this.showConfirmModal = true;
    } else {
      // Emitimos directamente
      this.action.emit(btn.type);
    }
  }

  confirmAction() {
    if (!this.actionToConfirm) return;
    this.action.emit(this.actionToConfirm);
    this.cancelAction();
  }

  cancelAction() {
    this.showConfirmModal = false;
    this.actionToConfirm = null;
  }
}
