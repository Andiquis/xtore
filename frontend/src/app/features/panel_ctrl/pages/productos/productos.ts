import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Image as ImageIcon,
  ArrowUpDown,
  Package,
  Layers,
  Tag,
  Grid,
  Eye,
  Box
} from 'lucide-angular';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos {
  
  // ── Estado ──
  activeTab: 'productos' | 'categorias' | 'marcas' | 'presentacion' = 'productos';

  // ── Iconos ──
  SearchIcon = Search;
  FilterIcon = Filter;
  PlusIcon = Plus;
  MoreIcon = MoreVertical;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  ImageIcon = ImageIcon;
  SortIcon = ArrowUpDown;
  TabProductsIcon = Package;
  TabCategoriesIcon = Layers;
  TabBrandsIcon = Tag;
  TabPresentacionIcon = Box;
  GridIcon = Grid;
  EyeIcon = Eye;

  // ── Funciones ──
  setTab(tab: 'productos' | 'categorias' | 'marcas' | 'presentacion') {
    this.activeTab = tab;
  }

  // ── Mock Data: Productos ──
  products = [
    {
      id: 'PRD-001',
      codigo: 'ZPT-URB-01',
      name: 'Zapatillas Urban Pro',
      category: 'Calzado',
      marca: 'Nike',
      presentacion: 'Caja',
      price: 249.90,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 'PRD-002',
      codigo: 'POL-CLA-02',
      name: 'Polo Classic Fit Blanco',
      category: 'Ropa',
      marca: 'Adidas',
      presentacion: 'Unidad',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 'PRD-003',
      codigo: 'MOC-EXP-03',
      name: 'Mochila Explorer 40L',
      category: 'Accesorios',
      marca: 'Puma',
      presentacion: 'Unidad',
      price: 189.90,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 'PRD-004',
      codigo: 'GOR-SNA-04',
      name: 'Gorra Snapback Retro',
      category: 'Accesorios',
      marca: 'Reebok',
      presentacion: 'Pack x2',
      price: 35.50,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 'PRD-005',
      codigo: 'CAS-TER-05',
      name: 'Casaca Térmica Wind',
      category: 'Ropa',
      marca: 'Under Armour',
      presentacion: 'Unidad',
      price: 135.00,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 'PRD-006',
      codigo: 'REL-SMA-06',
      name: 'Reloj SmartFit X',
      category: 'Electrónica',
      marca: 'Generic',
      presentacion: 'Set',
      price: 320.00,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  // ── Mock Data: Categorías ──
  categorias = [
    { id: 'CAT-01', name: 'Ropa', count: 124, status: 'Visible', bg: '#4318ff15', color: '#4318ff' },
    { id: 'CAT-02', name: 'Calzado', count: 58, status: 'Visible', bg: '#05cd9915', color: '#05cd99' },
    { id: 'CAT-03', name: 'Accesorios', count: 210, status: 'Visible', bg: '#ffb01a15', color: '#ffb01a' },
    { id: 'CAT-04', name: 'Electrónica', count: 12, status: 'Oculta', bg: '#ff5b5b15', color: '#ff5b5b' },
    { id: 'CAT-05', name: 'Deportes', count: 34, status: 'Visible', bg: '#868cff15', color: '#868cff' },
  ];

  // ── Mock Data: Marcas ──
  marcas = [
    { id: 'BRD-01', name: 'Nike', count: 45, logo: 'N', bg: '#1b2559' },
    { id: 'BRD-02', name: 'Adidas', count: 32, logo: 'A', bg: '#05cd99' },
    { id: 'BRD-03', name: 'Puma', count: 18, logo: 'P', bg: '#ffb01a' },
    { id: 'BRD-04', name: 'Reebok', count: 9, logo: 'R', bg: '#ff5b5b' },
    { id: 'BRD-05', name: 'Under Armour', count: 14, logo: 'U', bg: '#4318ff' },
    { id: 'BRD-06', name: 'Generic', count: 215, logo: 'G', bg: '#a3aed1' },
  ];

  // ── Mock Data: Presentación ──
  presentaciones = [
    { id: 'PRE-01', name: 'Unidad', count: 412, status: 'Activo', bg: '#4318ff15', color: '#4318ff' },
    { id: 'PRE-02', name: 'Caja x12', count: 45, status: 'Activo', bg: '#05cd9915', color: '#05cd99' },
    { id: 'PRE-03', name: 'Pack x100', count: 18, status: 'Activo', bg: '#ffb01a15', color: '#ffb01a' },
    { id: 'PRE-04', name: 'Pallet', count: 2, status: 'Inactivo', bg: '#ff5b5b15', color: '#ff5b5b' },
  ];
}
