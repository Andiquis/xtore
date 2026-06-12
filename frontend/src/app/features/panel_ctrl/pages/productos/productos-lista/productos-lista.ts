import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Box,
  Edit2,
  Eraser,
  Eye,
  Image as ImageIcon,
  Layers,
  LucideAngularModule,
  Package,
  Plus,
  Tag,
  Trash2,
} from 'lucide-angular';
import {
  BarraFiltroItem,
  BarraFiltros,
  BarraFiltrosConfig,
  BarraFiltrosState,
} from '../../../components/barra-filtros/barra-filtros';
import {
  Table,
  TableCellTemplate,
  TableColumn,
  TableRowEvent,
} from '../../../components/table/table';
import { ProductoForm, ProductoFormValue } from './producto-form/producto-form';

type ProductFilterId = 'categoria' | 'marca' | 'presentacion';

const DEFAULT_PRODUCT_FILTERS: Record<ProductFilterId, string> = {
  categoria: 'todos',
  marca: 'todos',
  presentacion: 'todos',
};

interface Producto {
  id: string;
  codigo: string;
  name: string;
  category: string;
  marca: string;
  presentacion: string;
  price: number;
  image: string | null;
}

@Component({
  selector: 'app-productos-lista',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ProductoForm, BarraFiltros, Table, TableCellTemplate],
  templateUrl: './productos-lista.html',
  styleUrl: '../productos.scss',
})
export class ProductosLista {
  EraserIcon = Eraser;
  PlusIcon = Plus;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  ImageIcon = ImageIcon;
  TabCategoriesIcon = Layers;
  TabBrandsIcon = Tag;
  TabPresentacionIcon = Box;
  EyeIcon = Eye;
  PackageIcon = Package;

  activeProduct: Producto | null = null;
  selectedProducts: Producto[] = [];
  isProductFormOpen = false;
  searchTerm = '';
  currentPage = 1;
  pageSize = 5;
  productFilterValues: Record<ProductFilterId, string> = { ...DEFAULT_PRODUCT_FILTERS };
  readonly pageSizeOptions = [5, 10, 20];

  readonly productColumns: TableColumn<Producto>[] = [
    { key: 'name', label: 'Producto' },
    { key: 'codigo', label: 'Código (SKU)', cellClass: 'font-mono text-gray', width: '150px' },
    { key: 'category', label: 'Categoría', width: '140px' },
    { key: 'marca', label: 'Marca', cellClass: 'font-medium text-dark', width: '130px' },
    { key: 'presentacion', label: 'Presentación', cellClass: 'text-gray font-medium', width: '150px' },
    { key: 'price', label: 'Precio', cellClass: 'text-right font-medium text-dark', headerClass: 'text-right', align: 'right', width: '120px' },
  ];

  products: Producto[] = [
    {
      id: 'PRD-001',
      codigo: 'ZPT-URB-01',
      name: 'Zapatillas Urban Pro',
      category: 'Calzado',
      marca: 'Nike',
      presentacion: 'Caja',
      price: 249.9,
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      id: 'PRD-002',
      codigo: 'POL-CLA-02',
      name: 'Polo Classic Fit Blanco',
      category: 'Ropa',
      marca: 'Adidas',
      presentacion: 'Unidad',
      price: 45,
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      id: 'PRD-003',
      codigo: 'MOC-EXP-03',
      name: 'Mochila Explorer 40L',
      category: 'Accesorios',
      marca: 'Puma',
      presentacion: 'Unidad',
      price: 189.9,
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      id: 'PRD-004',
      codigo: 'GOR-SNA-04',
      name: 'Gorra Snapback Retro',
      category: 'Accesorios',
      marca: 'Reebok',
      presentacion: 'Pack x2',
      price: 35.5,
      image:
        'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      id: 'PRD-005',
      codigo: 'CAS-TER-05',
      name: 'Casaca Termica Wind',
      category: 'Ropa',
      marca: 'Under Armour',
      presentacion: 'Unidad',
      price: 135,
      image:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      id: 'PRD-006',
      codigo: 'REL-SMA-06',
      name: 'Reloj SmartFit X',
      category: 'Electronica',
      marca: 'Generic',
      presentacion: 'Set',
      price: 320,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=150&h=150',
    },
  ];

  categorias = [
    { id: 'CAT-01', name: 'Ropa' },
    { id: 'CAT-02', name: 'Calzado' },
    { id: 'CAT-03', name: 'Accesorios' },
    { id: 'CAT-04', name: 'Electronica' },
  ];

  marcas = [
    { id: 'BRD-01', name: 'Nike' },
    { id: 'BRD-02', name: 'Adidas' },
    { id: 'BRD-03', name: 'Puma' },
    { id: 'BRD-04', name: 'Reebok' },
  ];

  presentaciones = [
    { id: 'PRE-01', name: 'Unidad' },
    { id: 'PRE-02', name: 'Caja' },
    { id: 'PRE-03', name: 'Pack x2' },
    { id: 'PRE-04', name: 'Set' },
  ];

  get productFilterConfig(): BarraFiltrosConfig {
    return {
      filters: this.productFilters,
      filterValues: this.productFilterValues,
      searchValue: this.searchTerm,
      showClearButton: this.hasActiveProductFilters,
      searchPlaceholder: 'Buscar por nombre o código de producto',
      actionLabel: 'Añadir Producto',
    };
  }

  get productFilters(): readonly BarraFiltroItem[] {
    return [
      {
        id: 'categoria',
        ariaLabel: 'Categoría',
        options: [
          { label: 'Categoría', value: DEFAULT_PRODUCT_FILTERS.categoria },
          ...this.categorias.map((categoria) => ({
            label: categoria.name,
            value: categoria.name,
          })),
        ],
      },
      {
        id: 'marca',
        ariaLabel: 'Marca',
        options: [
          { label: 'Marca', value: DEFAULT_PRODUCT_FILTERS.marca },
          ...this.marcas.map((marca) => ({
            label: marca.name,
            value: marca.name,
          })),
        ],
      },
      {
        id: 'presentacion',
        ariaLabel: 'Presentación',
        options: [
          { label: 'Presentación', value: DEFAULT_PRODUCT_FILTERS.presentacion },
          ...this.presentaciones.map((presentacion) => ({
            label: presentacion.name,
            value: presentacion.name,
          })),
        ],
      },
    ];
  }

  get hasActiveProductFilters(): boolean {
    return (
      Boolean(this.searchTerm) ||
      Object.entries(this.productFilterValues).some(
        ([key, value]) => value !== DEFAULT_PRODUCT_FILTERS[key as ProductFilterId],
      )
    );
  }

  get filteredProducts() {
    const term = this.normalizeText(this.searchTerm);

    return this.products.filter((product) => {
      const matchesSearch =
        !term ||
        this.normalizeText(
          [
            product.name,
            product.codigo,
            product.id,
            product.category,
            product.marca,
            product.presentacion,
          ].join(' '),
        ).includes(term);

      const matchesCategoria =
        this.productFilterValues.categoria === DEFAULT_PRODUCT_FILTERS.categoria ||
        product.category === this.productFilterValues.categoria;
      const matchesMarca =
        this.productFilterValues.marca === DEFAULT_PRODUCT_FILTERS.marca ||
        product.marca === this.productFilterValues.marca;
      const matchesPresentacion =
        this.productFilterValues.presentacion === DEFAULT_PRODUCT_FILTERS.presentacion ||
        product.presentacion === this.productFilterValues.presentacion;

      return matchesSearch && matchesCategoria && matchesMarca && matchesPresentacion;
    });
  }

  get paginatedProducts(): Producto[] {
    const start = (this.safeCurrentPage - 1) * this.pageSize;
    return this.filteredProducts.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredProducts.length / this.pageSize));
  }

  get safeCurrentPage(): number {
    return Math.min(this.currentPage, this.totalPages);
  }

  get categoriaNames(): string[] {
    return this.categorias.map((categoria) => categoria.name);
  }

  get marcaNames(): string[] {
    return this.marcas.map((marca) => marca.name);
  }

  get presentacionNames(): string[] {
    return this.presentaciones.map((presentacion) => presentacion.name);
  }

  openProductForm(): void {
    this.isProductFormOpen = true;
  }

  closeProductForm(): void {
    this.isProductFormOpen = false;
  }

  saveProduct(value: ProductoFormValue): void {
    const nextIndex = this.products.length + 1;
    const product = {
      id: `PRD-${String(nextIndex).padStart(3, '0')}`,
      codigo: value.codigo,
      name: value.name,
      category: value.category,
      marca: value.marca,
      presentacion: value.presentacion,
      price: value.price,
      image: value.image,
    };

    this.products = [product, ...this.products];
    this.currentPage = 1;
    this.closeProductForm();
  }

  showProductDetails(product: Producto): void {
    this.activeProduct = product;
  }

  showProductRowDetails(event: TableRowEvent<Producto>): void {
    this.showProductDetails(event.item);
  }

  closeProductDetails(): void {
    this.activeProduct = null;
  }

  setProductFilterState(state: BarraFiltrosState): void {
    this.searchTerm = state.search;
    this.productFilterValues = {
      categoria: state.filters['categoria'] ?? DEFAULT_PRODUCT_FILTERS.categoria,
      marca: state.filters['marca'] ?? DEFAULT_PRODUCT_FILTERS.marca,
      presentacion: state.filters['presentacion'] ?? DEFAULT_PRODUCT_FILTERS.presentacion,
    };
    this.currentPage = 1;
    this.selectedProducts = this.selectedProducts.filter((selected) =>
      this.filteredProducts.some((product) => product.id === selected.id),
    );
  }

  clearProductSelection(): void {
    this.selectedProducts = [];
  }

  setPage(page: number): void {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }

  setPageSize(value: number): void {
    this.pageSize = Number(value);
    this.currentPage = 1;
    this.clearProductSelection();
  }

  private normalizeText(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }
}
