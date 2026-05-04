import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Edit2, Eye, Layers, LucideAngularModule, Plus, Search, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-productos-categorias',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './productos-categorias.html',
  styleUrl: '../productos.scss',
})
export class ProductosCategorias {
  SearchIcon = Search;
  PlusIcon = Plus;
  TabCategoriesIcon = Layers;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;

  categorias = [
    { id: 'CAT-01', name: 'Ropa', count: 124, status: 'Visible', bg: '#4318ff15', color: '#4318ff' },
    { id: 'CAT-02', name: 'Calzado', count: 58, status: 'Visible', bg: '#05cd9915', color: '#05cd99' },
    { id: 'CAT-03', name: 'Accesorios', count: 210, status: 'Visible', bg: '#ffb01a15', color: '#ffb01a' },
    { id: 'CAT-04', name: 'Electrónica', count: 12, status: 'Oculta', bg: '#ff5b5b15', color: '#ff5b5b' },
    { id: 'CAT-05', name: 'Deportes', count: 34, status: 'Visible', bg: '#868cff15', color: '#868cff' },
  ];
}
