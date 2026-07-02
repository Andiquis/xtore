import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize, map, tap, throwError } from 'rxjs';
import { environment } from '../../../../../../environment/environment';

export type EstadoProducto = 'activo' | 'inactivo' | 'descontinuado';

export interface ProductoResumen {
  id_producto: number;
  nombre_producto: string;
  estado_producto?: EstadoProducto;
}

export interface Presentacion {
  id_presentacion: number;
  id_producto: number;
  nombre_presentacion: string;
  sku: string;
  codigo_barras: string | null;
  unidad_medida: string;
  factor_conversion: string | number;
  controla_stock: boolean;
  estado_presentacion: EstadoProducto;
  fecha_registro: string;
  fecha_modificacion: string | null;
  t_productos?: ProductoResumen | null;
  codigos_alternativos?: unknown[];
  precio?: unknown | null;
}

export interface CreatePresentacionDto {
  id_producto: number;
  nombre_presentacion: string;
  sku: string;
  codigo_barras?: string;
  unidad_medida?: string;
  factor_conversion?: number;
  controla_stock?: boolean;
  estado_presentacion?: EstadoProducto;
}

export interface UpdatePresentacionDto {
  id_producto?: number;
  nombre_presentacion?: string;
  sku?: string;
  codigo_barras?: string | null;
  unidad_medida?: string;
  factor_conversion?: number;
  controla_stock?: boolean;
  estado_presentacion?: EstadoProducto;
}

export interface ApiError {
  message: string | string[];
  statusCode: number;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class PresentacionesService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/catalogo/presentaciones`;
  private readonly productosUrl = `${environment.apiUrl}/catalogo/productos`;

  private readonly _presentaciones = signal<Presentacion[]>([]);
  private readonly _productos = signal<ProductoResumen[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly presentaciones = this._presentaciones.asReadonly();
  readonly productos = this._productos.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly total = computed(() => this._presentaciones().length);
  readonly productosActivos = computed(() =>
    this._productos().filter((producto) => producto.estado_producto !== 'inactivo')
  );

  findAll(): Observable<Presentacion[]> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.get<Presentacion[]>(this.baseUrl).pipe(
      tap((presentaciones) => this._presentaciones.set(presentaciones)),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  findProductos(): Observable<ProductoResumen[]> {
    return this.http.get<ProductoResumen[]>(this.productosUrl).pipe(
      tap((productos) => this._productos.set(productos)),
      catchError((err) => this.handleError(err))
    );
  }

  create(dto: CreatePresentacionDto): Observable<Presentacion> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.post<Presentacion>(this.baseUrl, dto).pipe(
      tap((presentacion) => {
        this._presentaciones.update((list) =>
          [presentacion, ...list].sort((a, b) =>
            a.nombre_presentacion.localeCompare(b.nombre_presentacion)
          )
        );
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  update(id: number, dto: UpdatePresentacionDto): Observable<Presentacion> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.patch<Presentacion>(`${this.baseUrl}/${id}`, dto).pipe(
      map((updated) => this.normalizeUpdatedPresentacion(updated)),
      tap((updated) => {
        this._presentaciones.update((list) =>
          list
            .map((presentacion) => presentacion.id_presentacion === id ? updated : presentacion)
            .sort((a, b) => a.nombre_presentacion.localeCompare(b.nombre_presentacion))
        );
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  remove(id: number): Observable<Presentacion> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.delete<Presentacion>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        this._presentaciones.update((list) =>
          list.filter((presentacion) => presentacion.id_presentacion !== id)
        );
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

        this.http.delete<Presentacion>(`${this.baseUrl}/${currentId}`).pipe(
          tap(() => {
            this._presentaciones.update((list) =>
              list.filter((presentacion) => presentacion.id_presentacion !== currentId)
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

  refresh(): Observable<Presentacion[]> {
    return this.findAll();
  }

  clearError(): void {
    this._error.set(null);
  }

  private normalizeUpdatedPresentacion(presentacion: Presentacion): Presentacion {
    return {
      ...presentacion,
      fecha_modificacion: presentacion.fecha_modificacion ?? new Date().toISOString(),
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
          message = backendMessage || 'Los datos de la unidad de venta no son válidos.';
          break;
        case 404:
          message = backendMessage || 'La unidad de venta solicitada no existe.';
          break;
        case 409:
          message = backendMessage || 'El SKU o código indicado ya está en uso.';
          break;
        default:
          message = backendMessage || 'Ocurrió un error inesperado al procesar la unidad de venta.';
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
