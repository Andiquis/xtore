import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Edit2, Eye, LucideAngularModule, Plus, Search, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-productos-marcas',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './productos-marcas.html',
  styleUrl: '../productos.scss',
})
export class ProductosMarcas {
  SearchIcon = Search;
  PlusIcon = Plus;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;

  marcas = [
    { id: 'BRD-01', name: 'Nike', count: 45, logo: 'N', bg: '#1b2559' },
    { id: 'BRD-02', name: 'Adidas', count: 32, logo: 'A', bg: '#05cd99' },
    { id: 'BRD-03', name: 'Puma', count: 18, logo: 'P', bg: '#ffb01a' },
    { id: 'BRD-04', name: 'Reebok', count: 9, logo: 'R', bg: '#ff5b5b' },
    { id: 'BRD-05', name: 'Under Armour', count: 14, logo: 'U', bg: '#4318ff' },
    { id: 'BRD-06', name: 'Generic', count: 215, logo: 'G', bg: '#a3aed1' },
  ];
}
