import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AlertCircle,
  CheckCircle2,
  Edit2,
  Eraser,
  Eye,
  Image as ImageIcon,
  LucideAngularModule,
  Package,
  Plus,
  Trash2,
  X,
} from 'lucide-angular';
import {
  BarraFiltroItem,
  BarraFiltros,
  BarraFiltrosState,
} from '../../../components/barra-filtros/barra-filtros';
import {
  Table,
  TableCellTemplate,
  TableColumn,
  TableRowEvent,
} from '../../../components/table/table';
import {
  ExcelDataConfig,
  ExcelDataManager,
  ExcelImportCommit,
  ExcelReviewRow,
} from '../../../components/excel-data-manager/excel-data-manager';
import { ProductoForm, ProductoFormValue } from './producto-form/producto-form';
import {
  CreateProductoDto,
  EstadoProducto,
  Producto,
  ProductosService,
  TipoProducto,
  UpdateProductoDto,
} from './productos.service';


type EstadoFilter = 'todos' | EstadoProducto;
type TipoFilter = 'todos' | TipoProducto;

@Component({
  selector: 'app-productos-lista',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ProductoForm, BarraFiltros, Table, TableCellTemplate, ExcelDataManager],
  templateUrl: './productos-lista.html',
  styleUrl: '../productos.scss',
})
export class ProductosLista implements OnInit {
  @ViewChild('productExcelManager') productExcelManager?: ExcelDataManager;

  EraserIcon = Eraser;
  PlusIcon = Plus;
  EditIcon = Edit2;
  TrashIcon = Trash2;
  ImageIcon = ImageIcon;
  EyeIcon = Eye;
  PackageIcon = Package;
  AlertIcon = AlertCircle;
  SuccessIcon = CheckCircle2;
  CloseIcon = X;

  private readonly productosService = inject(ProductosService);

  readonly productExcelConfig: ExcelDataConfig = {
    entityLabel: 'productos',
    fileName: 'productos',
    sheetName: 'Productos',
    uniqueKey: 'nombre_producto',
    uniqueLabel: 'Producto',
    columns: [
      {
        key: 'nombre_producto',
        header: 'Producto',
        aliases: ['nombre', 'nombre_producto', 'producto'],
        required: true,
        exampleValue: 'Champú de Romero',
        maxLength: 200,
        transform: (value) => String(value ?? '').trim(),
      },
      {
        key: 'descripcion_producto',
        header: 'Descripción',
        aliases: ['descripcion', 'descripción', 'descripcion_producto'],
        exampleValue: 'Champú natural para fortalecer el cabello',
        transform: (value) => String(value ?? '').trim(),
      },
      {
        key: 'categoria',
        header: 'Categoría',
        aliases: ['categoria', 'categoría', 'categoria_nombre'],
        required: true,
        exampleValue: 'Cuidado Capilar',
        transform: (value) => String(value ?? '').trim(),
        validate: (value) => {
          const name = String(value ?? '').trim();
          if (!name) return 'Categoría es obligatoria.';
          const exists = this.categorias().some(
            (c) => c.nombre_categoria.toLowerCase().trim() === name.toLowerCase()
          );
          return exists ? null : `La categoría "${name}" no existe en el sistema.`;
        },
        exportValue: (record) => this.getCategoryName(record as Producto),
      },
      {
        key: 'marca',
        header: 'Marca',
        aliases: ['marca', 'marca_nombre'],
        exampleValue: 'Acme Beauty',
        transform: (value) => String(value ?? '').trim(),
        validate: (value) => {
          const name = String(value ?? '').trim();
          if (!name) return null;
          const exists = this.marcas().some(
            (b) => b.nombre_marca.toLowerCase().trim() === name.toLowerCase()
          );
          return exists ? null : `La marca "${name}" no existe en el sistema.`;
        },
        exportValue: (record) => this.getBrandName(record as Producto),
      },
      {
        key: 'tipo_producto',
        header: 'Tipo',
        aliases: ['tipo', 'tipo_producto'],
        defaultValue: 'producto',
        exampleValue: 'producto',
        transform: (value) => String(value ?? 'producto').trim().toLowerCase(),
        validate: (value) => {
          const val = String(value ?? '').trim();
          return val === 'producto' || val === 'servicio' || val === 'insumo' || val === 'combo'
            ? null
            : 'Tipo debe ser: producto, servicio, insumo o combo.';
        },
      },
      {
        key: 'es_perecible',
        header: 'Perecible',
        aliases: ['perecible', 'es_perecible'],
        defaultValue: 'No',
        exampleValue: 'No',
        transform: (value) => this.normalizeBooleanText(value),
        validate: (value) => {
          const val = String(value ?? '').trim().toLowerCase();
          return val === 'sí' || val === 'si' || val === 'no' || val === 'sí' || val === 'Sí' || val === 'No'
            ? null
            : 'Perecible debe ser Sí o No.';
        },
      },
      {
        key: 'requiere_lote',
        header: 'Requiere lote',
        aliases: ['requiere_lote', 'lote'],
        defaultValue: 'No',
        exampleValue: 'No',
        transform: (value) => this.normalizeBooleanText(value),
        validate: (value) => {
          const val = String(value ?? '').trim().toLowerCase();
          return val === 'sí' || val === 'si' || val === 'no' || val === 'sí' || val === 'Sí' || val === 'No'
            ? null
            : 'Requiere lote debe ser Sí o No.';
        },
      },
      {
        key: 'estado_producto',
        header: 'Estado',
        aliases: ['estado', 'estado_producto'],
        defaultValue: 'activo',
        exampleValue: 'activo',
        transform: (value) => String(value ?? 'activo').trim().toLowerCase(),
        validate: (value) => {
          const val = String(value ?? '').trim();
          return val === 'activo' || val === 'inactivo' || val === 'descontinuado'
            ? null
            : 'Estado debe ser: activo, inactivo o descontinuado.';
        },
      },
    ],
  };

  activeProduct: Producto | null = null;
  selectedProducts: Producto[] = [];
  isProductFormOpen = false;
  editingProduct: Producto | null = null;
  deleteDialog: { mode: 'single' | 'bulk'; productos: Producto[] } | null = null;
  readonly pageSizeOptions = [5, 10, 20, 50];
  readonly productColumns: TableColumn<Producto>[] = [
    { key: 'nombre_producto', label: 'Producto' },
    { key: 'categoria', label: 'Categoría', value: (producto) => this.getCategoryName(producto), width: '160px' },
    { key: 'marca', label: 'Marca', value: (producto) => this.getBrandName(producto), width: '140px' },
    { key: 'tipo_producto', label: 'Tipo', width: '120px' },
    { key: 'presentaciones', label: 'Presentaciones', value: (producto) => this.getPresentationCountLabel(producto), width: '150px' },
    { key: 'estado_producto', label: 'Estado', width: '140px' },
    // { key: 'fecha_modificacion', label: 'Actualizado', cellClass: 'text-gray font-medium', width: '170px' },
  ];

  readonly searchTerm = signal('');
  readonly estadoFilter = signal<EstadoFilter>('todos');
  readonly tipoFilter = signal<TipoFilter>('todos');
  readonly categoriaFilter = signal('todos');
  readonly marcaFilter = signal('todos');
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly successMessage = signal<string | null>(null);

  readonly products = this.productosService.productos;
  readonly categorias = this.productosService.categorias;
  readonly marcas = this.productosService.marcas;
  readonly loading = this.productosService.loading;
  readonly error = this.productosService.error;
  readonly total = this.productosService.total;
  readonly filteredProducts = computed(() => {
    const term = this.normalizeText(this.searchTerm());
    const estado = this.estadoFilter();
    const tipo = this.tipoFilter();
    const categoria = this.categoriaFilter();
    const marca = this.marcaFilter();

    return this.products().filter((product) => {
      const matchesEstado = estado === 'todos' || product.estado_producto === estado;
      const matchesTipo = tipo === 'todos' || product.tipo_producto === tipo;
      const matchesCategoria = categoria === 'todos' || String(product.id_categoria) === categoria;
      const matchesMarca = marca === 'todos'
        || (marca === 'sin_marca' && !product.id_marca)
        || String(product.id_marca) === marca;
      const searchable = [
        product.nombre_producto,
        product.descripcion_producto ?? '',
        product.estado_producto,
        product.tipo_producto,
        this.getCategoryName(product),
        this.getBrandName(product),
        String(product.id_producto),
      ].join(' ');

      return matchesEstado
        && matchesTipo
        && matchesCategoria
        && matchesMarca
        && (!term || this.normalizeText(searchable).includes(term));
    });
  });
  readonly filteredTotal = computed(() => this.filteredProducts().length);
  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredTotal() / this.pageSize()))
  );
  readonly safeCurrentPage = computed(() =>
    Math.min(this.currentPage(), this.totalPages())
  );
  readonly paginatedProducts = computed(() => {
    const start = (this.safeCurrentPage() - 1) * this.pageSize();
    return this.filteredProducts().slice(start, start + this.pageSize());
  });
  readonly productFilters = computed<readonly BarraFiltroItem[]>(() => [
    {
      id: 'estado',
      ariaLabel: 'Estado',
      options: [
        { label: 'Estado', value: 'todos' },
        { label: 'Activo', value: 'activo' },
        { label: 'Inactivo', value: 'inactivo' },
        { label: 'Descontinuado', value: 'descontinuado' },
      ],
    },
    {
      id: 'tipo',
      ariaLabel: 'Tipo',
      options: [
        { label: 'Tipo', value: 'todos' },
        { label: 'Producto', value: 'producto' },
        { label: 'Servicio', value: 'servicio' },
        { label: 'Insumo', value: 'insumo' },
        { label: 'Combo', value: 'combo' },
      ],
    },
    {
      id: 'categoria',
      ariaLabel: 'Categoría',
      options: [
        { label: 'Categoría', value: 'todos' },
        ...this.categorias().map((categoria) => ({
          label: categoria.nombre_categoria,
          value: String(categoria.id_categoria),
        })),
      ],
    },
    {
      id: 'marca',
      ariaLabel: 'Marca',
      options: [
        { label: 'Marca', value: 'todos' },
        { label: 'Sin marca', value: 'sin_marca' },
        ...this.marcas().map((marca) => ({
          label: marca.nombre_marca,
          value: String(marca.id_marca),
        })),
      ],
    },
  ]);
  readonly productFilterConfig = computed(() => ({
    filters: this.productFilters(),
    filterValues: {
      estado: this.estadoFilter(),
      tipo: this.tipoFilter(),
      categoria: this.categoriaFilter(),
      marca: this.marcaFilter(),
    },
    searchValue: this.searchTerm(),
    showClearButton: Boolean(this.searchTerm())
      || this.estadoFilter() !== 'todos'
      || this.tipoFilter() !== 'todos'
      || this.categoriaFilter() !== 'todos'
      || this.marcaFilter() !== 'todos',
    actionDisabled: this.loading(),
    searchPlaceholder: 'Buscar por nombre, ID, marca o categoría',
    actionLabel: 'Añadir Producto',
  }));
  readonly notice = computed(() => {
    const error = this.error();

    if (error) {
      return {
        type: 'error' as const,
        title: 'No se pudo completar la acción',
        message: error,
        icon: this.AlertIcon,
      };
    }

    const success = this.successMessage();

    if (success) {
      return {
        type: 'success' as const,
        title: 'Cambios guardados',
        message: success,
        icon: this.SuccessIcon,
      };
    }

    return null;
  });

  ngOnInit(): void {
    this.productosService.findMarcas().subscribe();
    this.productosService.findCategorias().subscribe();
    this.productosService.findAll().subscribe();
  }

  openProductForm(): void {
    this.editingProduct = null;
    this.isProductFormOpen = true;
  }

  openEditProductForm(product: Producto): void {
    this.editingProduct = product;
    this.isProductFormOpen = true;
  }

  closeProductForm(): void {
    this.isProductFormOpen = false;
    this.editingProduct = null;
  }

  saveProduct(value: ProductoFormValue): void {
    this.clearMessages();

    if (this.editingProduct) {
      const dto: UpdateProductoDto = {
        nombre_producto: value.name,
        descripcion_producto: value.description || null,
        id_categoria: value.id_categoria,
        id_marca: value.id_marca,
        tipo_producto: value.tipo_producto,
        es_perecible: value.es_perecible,
        requiere_lote: value.requiere_lote,
        estado_producto: value.estado_producto,
        imagen_url: value.imagen_url || null,
      };

      this.productosService.update(this.editingProduct.id_producto, dto).subscribe({
        next: (updated) => {
          this.syncUpdatedProduct(updated);
          this.closeProductForm();
          this.showSuccess('El producto se actualizó correctamente.');
        },
        error: () => {},
      });
      return;
    }

    const dto: CreateProductoDto = {
      nombre_producto: value.name,
      descripcion_producto: value.description || undefined,
      id_categoria: value.id_categoria,
      id_marca: value.id_marca,
      tipo_producto: value.tipo_producto,
      es_perecible: value.es_perecible,
      requiere_lote: value.requiere_lote,
      estado_producto: value.estado_producto,
      imagen_url: value.imagen_url || undefined,
    };

    this.productosService.create(dto).subscribe({
      next: () => {
        this.currentPage.set(1);
        this.closeProductForm();
        this.showSuccess('El nuevo producto ya está disponible en el inventario.');
      },
      error: () => {},
    });
  }

  requestDeleteProduct(product: Producto): void {
    this.deleteDialog = { mode: 'single', productos: [product] };
  }

  requestDeleteSelected(): void {
    if (this.selectedProducts.length === 0) {
      return;
    }

    this.deleteDialog = { mode: 'bulk', productos: [...this.selectedProducts] };
  }

  closeDeleteDialog(): void {
    this.deleteDialog = null;
  }

  confirmDelete(): void {
    if (!this.deleteDialog) {
      return;
    }

    if (this.deleteDialog.mode === 'single') {
      this.deleteProduct(this.deleteDialog.productos[0]);
      return;
    }

    this.deleteSelected(this.deleteDialog.productos);
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
    this.searchTerm.set(state.search);
    this.estadoFilter.set(this.toEstadoFilter(state.filters['estado']));
    this.tipoFilter.set(this.toTipoFilter(state.filters['tipo']));
    this.categoriaFilter.set(state.filters['categoria'] ?? 'todos');
    this.marcaFilter.set(state.filters['marca'] ?? 'todos');
    this.resetListView();
  }

  clearProductSelection(): void {
    this.selectedProducts = [];
  }

  setPageSize(value: number | string): void {
    this.pageSize.set(Number(value));
    this.currentPage.set(1);
    this.clearProductSelection();
  }

  goToPage(page: number): void {
    this.currentPage.set(Math.min(Math.max(page, 1), this.totalPages()));
  }

  clearMessages(): void {
    this.productosService.clearError();
    this.successMessage.set(null);
  }

  getCategoryName(product: Producto): string {
    return product.t_categorias?.nombre_categoria
      ?? this.categorias().find((categoria) => categoria.id_categoria === product.id_categoria)?.nombre_categoria
      ?? 'Sin categoría';
  }

  getBrandName(product: Producto): string {
    return product.t_marcas?.nombre_marca
      ?? this.marcas().find((marca) => marca.id_marca === product.id_marca)?.nombre_marca
      ?? 'Sin marca';
  }

  getPresentationCount(product: Producto): number {
    return product._count?.presentaciones ?? product.presentaciones?.length ?? 0;
  }

  getPresentationCountLabel(product: Producto): string {
    const count = this.getPresentationCount(product);
    return count === 1 ? '1 presentación' : `${count} presentaciones`;
  }

  getFeatureLabel(product: Producto): string {
    const labels = [
      product.es_perecible ? 'Perecible' : null,
      product.requiere_lote ? 'Requiere lote' : null,
    ].filter(Boolean);

    return labels.length ? labels.join(' · ') : 'Sin controles especiales';
  }

  private deleteProduct(product: Producto): void {
    this.clearMessages();

    this.productosService.remove(product.id_producto).subscribe({
      next: () => {
        if (this.activeProduct?.id_producto === product.id_producto) {
          this.activeProduct = null;
        }
        this.selectedProducts = this.selectedProducts.filter(
          (selected) => selected.id_producto !== product.id_producto
        );
        this.closeDeleteDialog();
        this.showSuccess(`El producto ${product.nombre_producto} fue eliminado.`);
      },
    });
  }

  private deleteSelected(items: Producto[]): void {
    const ids = items.map((product) => product.id_producto);
    const selectedCount = ids.length;

    this.clearMessages();

    this.productosService.removeBatch(ids).subscribe({
      next: () => {
        this.selectedProducts = [];
        if (this.activeProduct && ids.includes(this.activeProduct.id_producto)) {
          this.activeProduct = null;
        }
        this.closeDeleteDialog();
        this.showSuccess(`${selectedCount} productos fueron eliminados correctamente.`);
      },
    });
  }

  private syncUpdatedProduct(updated: Producto): void {
    if (this.activeProduct?.id_producto === updated.id_producto) {
      this.activeProduct = updated;
    }

    this.selectedProducts = this.selectedProducts.map((selected) =>
      selected.id_producto === updated.id_producto ? updated : selected
    );
  }

  private showSuccess(message: string): void {
    this.successMessage.set(message);
  }

  private resetListView(): void {
    this.currentPage.set(1);
    this.selectedProducts = this.selectedProducts.filter((selected) =>
      this.filteredProducts().some((product) => product.id_producto === selected.id_producto)
    );
  }

  private normalizeText(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  private toEstadoFilter(value: string | undefined): EstadoFilter {
    return value === 'activo' || value === 'inactivo' || value === 'descontinuado'
      ? value
      : 'todos';
  }

  private toTipoFilter(value: string | undefined): TipoFilter {
    return value === 'producto' || value === 'servicio' || value === 'insumo' || value === 'combo'
      ? value
      : 'todos';
  }

  openProductImport(): void {
    this.productExcelManager?.openImport();
  }

  exportProducts(): void {
    this.productExcelManager?.exportData();
  }

  handleProductExcelImport(event: ExcelImportCommit): void {
    const tasks: Array<() => Observable<Producto>> = [
      ...event.inserts.map((row) => () => this.productosService.create(this.toCreateProductoDto(row))),
      ...event.updates.map((row) => () => this.productosService.update(this.getExistingProduct(row).id_producto, this.toUpdateProductoDto(row, false))),
      ...event.replaces.map((row) => () => this.productosService.update(this.getExistingProduct(row).id_producto, this.toUpdateProductoDto(row, true))),
    ];

    if (!tasks.length) {
      this.showSuccess('No se importaron registros. Todas las filas fueron omitidas.');
      return;
    }

    this.clearMessages();
    this.runImportTasks(tasks, 0, tasks.length);
  }

  private runImportTasks(tasks: Array<() => Observable<Producto>>, index: number, total: number): void {
    if (index >= tasks.length) {
      this.showSuccess(`${total} productos fueron procesados correctamente desde Excel.`);
      this.currentPage.set(1);
      return;
    }

    tasks[index]().subscribe({
      next: () => this.runImportTasks(tasks, index + 1, total),
      error: () => {},
    });
  }

  private toCreateProductoDto(row: ExcelReviewRow): CreateProductoDto {
    const catName = String(row.data['categoria'] ?? '').trim();
    const brandName = String(row.data['marca'] ?? '').trim();

    const category = this.categorias().find(
      (c) => c.nombre_categoria.toLowerCase().trim() === catName.toLowerCase()
    );
    const brand = this.marcas().find(
      (b) => b.nombre_marca.toLowerCase().trim() === brandName.toLowerCase()
    );

    return {
      nombre_producto: String(row.data['nombre_producto'] ?? '').trim(),
      descripcion_producto: String(row.data['descripcion_producto'] ?? '').trim() || undefined,
      id_categoria: category!.id_categoria,
      id_marca: brand ? brand.id_marca : null,
      tipo_producto: (row.data['tipo_producto'] as TipoProducto) || 'producto',
      es_perecible: this.toBooleanValue(row.data['es_perecible']),
      requiere_lote: this.toBooleanValue(row.data['requiere_lote']),
      estado_producto: (row.data['estado_producto'] as EstadoProducto) || 'activo',
    };
  }

  private toUpdateProductoDto(row: ExcelReviewRow, replace: boolean): UpdateProductoDto {
    const catName = String(row.data['categoria'] ?? '').trim();
    const brandName = String(row.data['marca'] ?? '').trim();
    const description = String(row.data['descripcion_producto'] ?? '').trim();

    const category = this.categorias().find(
      (c) => c.nombre_categoria.toLowerCase().trim() === catName.toLowerCase()
    );
    const brand = this.marcas().find(
      (b) => b.nombre_marca.toLowerCase().trim() === brandName.toLowerCase()
    );

    return {
      nombre_producto: String(row.data['nombre_producto'] ?? '').trim(),
      ...(replace || description ? { descripcion_producto: description || null } : {}),
      id_categoria: category ? category.id_categoria : undefined,
      id_marca: brand ? brand.id_marca : brandName === '' ? null : undefined,
      tipo_producto: (row.data['tipo_producto'] as TipoProducto) || undefined,
      es_perecible: this.toBooleanValue(row.data['es_perecible']),
      requiere_lote: this.toBooleanValue(row.data['requiere_lote']),
      estado_producto: (row.data['estado_producto'] as EstadoProducto) || undefined,
    };
  }

  private getExistingProduct(row: ExcelReviewRow): Producto {
    return row.existingRecord as Producto;
  }

  private normalizeBooleanText(value: unknown): string {
    const val = String(value ?? '').trim().toLowerCase();
    if (val === 'si' || val === 'sí' || val === 'yes' || val === 'true' || val === '1' || val === 'Sí') {
      return 'Sí';
    }
    return 'No';
  }

  private toBooleanValue(value: unknown): boolean {
    const val = String(value ?? '').trim().toLowerCase();
    return val === 'si' || val === 'sí' || val === 'yes' || val === 'true' || val === '1' || val === 'Sí';
  }
}
