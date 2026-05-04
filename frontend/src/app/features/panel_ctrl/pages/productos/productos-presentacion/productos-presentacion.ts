import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Box, Edit2, Eye, LucideAngularModule, Plus, Search, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-productos-presentacion',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './productos-presentacion.html',
  styleUrl: '../productos.scss',
})
export class ProductosPresentacion {
  SearchIcon = Search;
  PlusIcon = Plus;
  TabPresentacionIcon = Box;
  EyeIcon = Eye;
  EditIcon = Edit2;
  TrashIcon = Trash2;

  presentaciones = [
    {
      id: 'PRE-01',
      name: 'Unidad',
      count: 412,
      status: 'Activo',
      bg: '#4318ff15',
      color: '#4318ff',
    },
    {
      id: 'PRE-02',
      name: 'Caja x12',
      count: 45,
      status: 'Activo',
      bg: '#05cd9915',
      color: '#05cd99',
    },
    {
      id: 'PRE-03',
      name: 'Pack x100',
      count: 18,
      status: 'Activo',
      bg: '#ffb01a15',
      color: '#ffb01a',
    },
    {
      id: 'PRE-04',
      name: 'Pallet',
      count: 2,
      status: 'Inactivo',
      bg: '#ff5b5b15',
      color: '#ff5b5b',
    },
  ];
}
