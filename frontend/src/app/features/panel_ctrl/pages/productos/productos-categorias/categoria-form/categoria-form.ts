import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Save, X } from 'lucide-angular';

export interface CategoriaFormValue {
  name: string;
  status: string;
  description: string;
}

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './categoria-form.html',
  styleUrl: '../../productos-lista/producto-form/producto-form.scss',
})
export class CategoriaForm {
  @Input() mode: 'create' | 'edit' = 'create';

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<CategoriaFormValue>();

  CloseIcon = X;
  SaveIcon = Save;

  form: CategoriaFormValue = {
    name: '',
    status: 'Visible',
    description: '',
  };

  submit(): void {
    if (!this.form.name.trim()) {
      return;
    }

    this.save.emit({ ...this.form });
  }
}
