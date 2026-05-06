import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Save, X } from 'lucide-angular';

export interface PresentacionFormValue {
  name: string;
  status: string;
  description: string;
}

@Component({
  selector: 'app-presentacion-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './presentacion-form.html',
  styleUrl: '../../productos-lista/producto-form/producto-form.scss',
})
export class PresentacionForm {
  @Input() mode: 'create' | 'edit' = 'create';

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<PresentacionFormValue>();

  CloseIcon = X;
  SaveIcon = Save;

  form: PresentacionFormValue = {
    name: '',
    status: 'Activo',
    description: '',
  };

  submit(): void {
    if (!this.form.name.trim()) {
      return;
    }

    this.save.emit({ ...this.form });
  }
}
