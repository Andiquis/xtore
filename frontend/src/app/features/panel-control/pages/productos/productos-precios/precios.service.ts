import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize, map, tap, throwError } from 'rxjs';
import { environment } from '../../../../../../environment/environment';

export interface PresentacionResumen {
  id_presentacion: number;
  nombre_presentacion: string;
  sku: string;
  t_productos?: { id_producto: number; nombre_producto: string } | null;
}

export interface Precio {
  id_precio: number;
  id_presentacion: number;
  precio_compra: string | number | null;
  precio_venta: string | number;
  precio_mayorista: string | number | null;
  cantidad_minima_mayorista: string | number | null;
  moneda: string;
  incluye_igv: boolean;
  fecha_registro: string;
  fecha_modificacion: string | null;
  presentacion?: PresentacionResumen | null;
}

export interface PrecioDto {
  id_presentacion: number;
  precio_compra?: number;
  precio_venta: number;
  precio_mayorista?: number;
  cantidad_minima_mayorista?: number;
  moneda?: string;
  incluye_igv?: boolean;
}

@Injectable({ providedIn: 'root' })
export class PreciosService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/catalogo/precios`;
  private readonly presentacionesUrl = `${environment.apiUrl}/catalogo/presentaciones`;

  private readonly _precios = signal<Precio[]>([]);
  private readonly _presentaciones = signal<PresentacionResumen[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly precios = this._precios.asReadonly();
  readonly presentaciones = this._presentaciones.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly total = computed(() => this._precios().length);

  findAll(): Observable<Precio[]> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.get<Precio[]>(this.baseUrl).pipe(
      tap((precios) => this._precios.set(precios)),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  findPresentaciones(): Observable<PresentacionResumen[]> {
    return this.http.get<PresentacionResumen[]>(this.presentacionesUrl).pipe(
      tap((presentaciones) => this._presentaciones.set(presentaciones)),
      catchError((err) => this.handleError(err))
    );
  }

  create(dto: PrecioDto): Observable<Precio> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.post<Precio>(this.baseUrl, dto).pipe(
      tap((precio) => this._precios.update((list) => [precio, ...list])),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  update(id: number, dto: Partial<PrecioDto>): Observable<Precio> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.patch<Precio>(`${this.baseUrl}/${id}`, dto).pipe(
      map((precio) => ({ ...precio, fecha_modificacion: precio.fecha_modificacion ?? new Date().toISOString() })),
      tap((updated) => this._precios.update((list) => list.map((precio) => precio.id_precio === id ? updated : precio))),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  remove(id: number): Observable<Precio> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.delete<Precio>(`${this.baseUrl}/${id}`).pipe(
      tap(() => this._precios.update((list) => list.filter((precio) => precio.id_precio !== id))),
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

        this.http.delete<Precio>(`${this.baseUrl}/${currentId}`).pipe(
          tap(() => {
            this._precios.update((list) => list.filter((precio) => precio.id_precio !== currentId));
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

  clearError(): void {
    this._error.set(null);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const message = Array.isArray(error.error?.message)
      ? error.error.message.join(' ')
      : error.error?.message || 'No se pudo procesar el precio.';
    this._error.set(error.status === 0 ? 'No se pudo conectar con el servidor.' : message);
    return throwError(() => error);
  }
}
