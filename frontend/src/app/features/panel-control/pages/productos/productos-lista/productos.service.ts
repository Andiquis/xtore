import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize, map, tap, throwError } from 'rxjs';
import { environment } from '../../../../../../environment/environment';

export type EstadoProducto = 'activo' | 'inactivo' | 'descontinuado';
export type TipoProducto = 'producto' | 'servicio' | 'insumo' | 'combo';
export type EstadoGenerico = 'activo' | 'inactivo';

export interface MarcaResumen {
  id_marca: number;
  nombre_marca: string;
  estado_marca: EstadoGenerico;
}

export interface CategoriaResumen {
  id_categoria: number;
  nombre_categoria: string;
  id_categoria_padre: number | null;
  estado_categoria: EstadoGenerico;
}

export interface Producto {
  id_producto: number;
  nombre_producto: string;
  descripcion_producto: string | null;
  id_marca: number | null;
  id_categoria: number;
  tipo_producto: TipoProducto;
  es_perecible: boolean;
  requiere_lote: boolean;
  estado_producto: EstadoProducto;
  imagen_url: string | null;
  fecha_registro: string;
  fecha_modificacion: string | null;
  t_marcas?: MarcaResumen | null;
  t_categorias?: CategoriaResumen | null;
  presentaciones?: unknown[];
  _count?: {
    presentaciones: number;
  };
}

export interface CreateProductoDto {
  nombre_producto: string;
  descripcion_producto?: string;
  id_marca?: number | null;
  id_categoria: number;
  tipo_producto?: TipoProducto;
  es_perecible?: boolean;
  requiere_lote?: boolean;
  estado_producto?: EstadoProducto;
  imagen_url?: string;
}

export interface UpdateProductoDto {
  nombre_producto?: string;
  descripcion_producto?: string | null;
  id_marca?: number | null;
  id_categoria?: number;
  tipo_producto?: TipoProducto;
  es_perecible?: boolean;
  requiere_lote?: boolean;
  estado_producto?: EstadoProducto;
  imagen_url?: string | null;
}

export interface ApiError {
  message: string | string[];
  statusCode: number;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/catalogo/productos`;
  private readonly marcasUrl = `${environment.apiUrl}/catalogo/marcas`;
  private readonly categoriasUrl = `${environment.apiUrl}/catalogo/categorias`;

  private readonly _productos = signal<Producto[]>([]);
  private readonly _marcas = signal<MarcaResumen[]>([]);
  private readonly _categorias = signal<CategoriaResumen[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly productos = this._productos.asReadonly();
  readonly marcas = this._marcas.asReadonly();
  readonly categorias = this._categorias.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly total = computed(() => this._productos().length);
  readonly marcasActivas = computed(() => this._marcas().filter((marca) => marca.estado_marca === 'activo'));
  readonly categoriasActivas = computed(() => this._categorias().filter((categoria) => categoria.estado_categoria === 'activo'));

  findAll(): Observable<Producto[]> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.get<Producto[]>(this.baseUrl).pipe(
      tap((productos) => this._productos.set(productos)),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  findMarcas(): Observable<MarcaResumen[]> {
    return this.http.get<MarcaResumen[]>(this.marcasUrl).pipe(
      tap((marcas) => this._marcas.set(marcas)),
      catchError((err) => this.handleError(err))
    );
  }

  findCategorias(): Observable<CategoriaResumen[]> {
    return this.http.get<CategoriaResumen[]>(this.categoriasUrl).pipe(
      tap((categorias) => this._categorias.set(categorias)),
      catchError((err) => this.handleError(err))
    );
  }

  create(dto: CreateProductoDto): Observable<Producto> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.post<Producto>(this.baseUrl, dto).pipe(
      tap((producto) => {
        this._productos.update((list) =>
          [producto, ...list].sort((a, b) => a.nombre_producto.localeCompare(b.nombre_producto))
        );
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  update(id: number, dto: UpdateProductoDto): Observable<Producto> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.patch<Producto>(`${this.baseUrl}/${id}`, dto).pipe(
      map((updated) => this.normalizeUpdatedProducto(updated)),
      tap((updated) => {
        this._productos.update((list) =>
          list
            .map((producto) => producto.id_producto === id ? updated : producto)
            .sort((a, b) => a.nombre_producto.localeCompare(b.nombre_producto))
        );
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  remove(id: number): Observable<Producto> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.delete<Producto>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        this._productos.update((list) => list.filter((producto) => producto.id_producto !== id));
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  removeBatch(ids: number[]): Observable<void> {
    this._loading.set(true);
    this._error.set(null);

    return new Observable<void>((subscriber) => {
      const deleteNext = (index: number) => {
        if (index >= ids.length) {
          this._loading.set(false);
          subscriber.next();
          subscriber.complete();
          return;
        }

        const currentId = ids[index];

        this.http.delete<Producto>(`${this.baseUrl}/${currentId}`).pipe(
          tap(() => {
            this._productos.update((list) =>
              list.filter((producto) => producto.id_producto !== currentId)
            );
          }),
          catchError((err) => {
            this._loading.set(false);
            return this.handleError(err);
          })
        ).subscribe({
          next: () => deleteNext(index + 1),
          error: (err) => subscriber.error(err),
        });
      };

      deleteNext(0);
    });
  }

  refresh(): Observable<Producto[]> {
    return this.findAll();
  }

  clearError(): void {
    this._error.set(null);
  }

  private normalizeUpdatedProducto(producto: Producto): Producto {
    return {
      ...producto,
      fecha_modificacion: producto.fecha_modificacion ?? new Date().toISOString(),
    };
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let message: string;

    if (error.error instanceof ErrorEvent) {
      message = `No se pudo completar la conexión: ${error.error.message}`;
    } else {
      const body = error.error as ApiError | undefined;
      const backendMessage = this.formatApiMessage(body?.message);

      switch (error.status) {
        case 0:
          message = 'No se pudo conectar con el servidor. Verifica que el backend esté activo.';
          break;
        case 400:
          message = backendMessage || 'Los datos del producto no son válidos.';
          break;
        case 404:
          message = backendMessage || 'El producto solicitado no existe.';
          break;
        case 409:
          message = backendMessage || 'Ya existe un conflicto con los datos del producto.';
          break;
        default:
          message = backendMessage || 'Ocurrió un error inesperado al procesar el producto.';
      }
    }

    this._error.set(message);
    return throwError(() => error);
  }

  private formatApiMessage(message: string | string[] | undefined): string {
    if (Array.isArray(message)) {
      return message.join(' ');
    }

    return message ?? '';
  }
}
