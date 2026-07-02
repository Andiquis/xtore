import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize, map, tap, throwError } from 'rxjs';
import { environment } from '../../../../../../environment/environment';

export type TipoCodigo = 'EAN' | 'UPC' | 'proveedor' | 'interno';
export type EstadoGenerico = 'activo' | 'inactivo';

export interface PresentacionResumen {
  id_presentacion: number;
  nombre_presentacion: string;
  sku: string;
  t_productos?: { id_producto: number; nombre_producto: string } | null;
}

export interface Codigo {
  id_codigo: number;
  id_presentacion: number;
  tipo_codigo: TipoCodigo;
  valor_codigo: string;
  es_principal: boolean;
  estado_codigo: EstadoGenerico;
  fecha_registro: string;
  fecha_modificacion: string | null;
  presentacion?: PresentacionResumen | null;
}

export interface CodigoDto {
  id_presentacion: number;
  tipo_codigo?: TipoCodigo;
  valor_codigo: string;
  es_principal?: boolean;
  estado_codigo?: EstadoGenerico;
}

@Injectable({ providedIn: 'root' })
export class CodigosService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/catalogo/codigos`;
  private readonly presentacionesUrl = `${environment.apiUrl}/catalogo/presentaciones`;

  private readonly _codigos = signal<Codigo[]>([]);
  private readonly _presentaciones = signal<PresentacionResumen[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly codigos = this._codigos.asReadonly();
  readonly presentaciones = this._presentaciones.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly total = computed(() => this._codigos().length);

  findAll(): Observable<Codigo[]> {
    this._loading.set(true);
    this._error.set(null);
    return this.http.get<Codigo[]>(this.baseUrl).pipe(
      tap((codigos) => this._codigos.set(codigos)),
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

  create(dto: CodigoDto): Observable<Codigo> {
    this._loading.set(true);
    this._error.set(null);
    return this.http.post<Codigo>(this.baseUrl, dto).pipe(
      tap((codigo) => this._codigos.update((list) => [codigo, ...list])),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  update(id: number, dto: Partial<CodigoDto>): Observable<Codigo> {
    this._loading.set(true);
    this._error.set(null);
    return this.http.patch<Codigo>(`${this.baseUrl}/${id}`, dto).pipe(
      map((codigo) => ({ ...codigo, fecha_modificacion: codigo.fecha_modificacion ?? new Date().toISOString() })),
      tap((updated) => this._codigos.update((list) => list.map((codigo) => codigo.id_codigo === id ? updated : codigo))),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  remove(id: number): Observable<Codigo> {
    this._loading.set(true);
    this._error.set(null);
    return this.http.delete<Codigo>(`${this.baseUrl}/${id}`).pipe(
      tap(() => this._codigos.update((list) => list.filter((codigo) => codigo.id_codigo !== id))),
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

        this.http.delete<Codigo>(`${this.baseUrl}/${currentId}`).pipe(
          tap(() => {
            this._codigos.update((list) => list.filter((codigo) => codigo.id_codigo !== currentId));
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
      : error.error?.message || 'No se pudo procesar el código.';
    this._error.set(error.status === 0 ? 'No se pudo conectar con el servidor.' : message);
    return throwError(() => error);
  }
}
