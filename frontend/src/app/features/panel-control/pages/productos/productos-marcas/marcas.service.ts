import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError, finalize } from 'rxjs';
import { environment } from '../../../../../../environment/environment';

// ── Enums (mirror backend t_estado_generico) ──────────────────────────────────
export type EstadoGenerico = 'activo' | 'inactivo';

// ── Interfaces (mirror backend Prisma t_marcas model) ─────────────────────────
export interface Marca {
  id_marca: number;
  nombre_marca: string;
  descripcion_marca: string | null;
  logo_url: string | null;
  estado_marca: EstadoGenerico;
  fecha_registro: string;
  fecha_modificacion: string | null;
  _count?: {
    t_productos: number;
  };
}

// ── DTOs (mirror backend create-marca.dto / update-marca.dto) ─────────────────
export interface CreateMarcaDto {
  nombre_marca: string;
  descripcion_marca?: string;
  logo_url?: string;
  estado_marca?: EstadoGenerico;
}

export interface UpdateMarcaDto {
  nombre_marca?: string;
  descripcion_marca?: string;
  logo_url?: string;
  estado_marca?: EstadoGenerico;
}

// ── API Error Response ────────────────────────────────────────────────────────
export interface ApiError {
  message: string | string[];
  statusCode: number;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class MarcasService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/catalogo/marcas`;

  // ── Reactive state ────────────────────────────────────────────────────────
  private readonly _marcas = signal<Marca[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  /** Lista reactiva de marcas (solo lectura) */
  readonly marcas = this._marcas.asReadonly();

  /** Indicador de carga */
  readonly loading = this._loading.asReadonly();

  /** Último mensaje de error */
  readonly error = this._error.asReadonly();

  /** Cantidad total de marcas */
  readonly total = computed(() => this._marcas().length);

  /** Solo marcas activas */
  readonly marcasActivas = computed(() =>
    this._marcas().filter((m) => m.estado_marca === 'activo')
  );

  // ── CRUD Operations ───────────────────────────────────────────────────────

  /**
   * GET /catalogo/marcas
   * Obtiene todas las marcas y actualiza el estado local.
   */
  findAll(): Observable<Marca[]> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.get<Marca[]>(this.baseUrl).pipe(
      tap((marcas) => this._marcas.set(marcas)),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  /**
   * GET /catalogo/marcas/:id
   * Obtiene una marca por su ID.
   */
  findOne(id: number): Observable<Marca> {
    return this.http.get<Marca>(`${this.baseUrl}/${id}`).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  /**
   * POST /catalogo/marcas
   * Crea una nueva marca y la añade al estado local.
   */
  create(dto: CreateMarcaDto): Observable<Marca> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.post<Marca>(this.baseUrl, dto).pipe(
      tap((marca) => {
        this._marcas.update((list) => [marca, ...list]);
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  /**
   * PATCH /catalogo/marcas/:id
   * Actualiza una marca existente y sincroniza el estado local.
   */
  update(id: number, dto: UpdateMarcaDto): Observable<Marca> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.patch<Marca>(`${this.baseUrl}/${id}`, dto).pipe(
      tap((updated) => {
        this._marcas.update((list) =>
          list.map((m) => (m.id_marca === id ? updated : m))
        );
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  /**
   * POST /catalogo/marcas/:id/logo
   * Sube o reemplaza el logo de una marca.
   */
  uploadLogo(id: number, file: File): Observable<Marca> {
    this._loading.set(true);
    this._error.set(null);

    const formData = new FormData();
    formData.append('logo', file);

    return this.http.post<Marca>(`${this.baseUrl}/${id}/logo`, formData).pipe(
      tap((updated) => {
        this._marcas.update((list) =>
          list.map((m) => (m.id_marca === id ? updated : m))
        );
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  /**
   * DELETE /catalogo/marcas/:id
   * Elimina una marca y la remueve del estado local.
   */
  remove(id: number): Observable<Marca> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.delete<Marca>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        this._marcas.update((list) =>
          list.filter((m) => m.id_marca !== id)
        );
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  /**
   * Elimina múltiples marcas secuencialmente.
   * Remueve cada una del estado local tras confirmar la eliminación.
   */
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

        this.http.delete<Marca>(`${this.baseUrl}/${ids[index]}`).pipe(
          tap(() => {
            this._marcas.update((list) =>
              list.filter((m) => m.id_marca !== ids[index])
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

  /**
   * Recarga la lista completa desde el servidor.
   */
  refresh(): Observable<Marca[]> {
    return this.findAll();
  }

  /**
   * Limpia el estado de error.
   */
  clearError(): void {
    this._error.set(null);
  }

  // ── Error Handling ────────────────────────────────────────────────────────

  private handleError(error: HttpErrorResponse): Observable<never> {
    let message: string;

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente / red
      message = `No se pudo completar la conexión: ${error.error.message}`;
    } else {
      // Error del servidor (NestJS)
      const body = error.error as ApiError | undefined;
      const backendMessage = this.formatApiMessage(body?.message);

      switch (error.status) {
        case 0:
          message = `No se pudo conectar con el backend en ${this.baseUrl}. Verifica que Nest esté levantado en el puerto 3000.`;
          break;
        case 404:
          message = backendMessage || 'No encontramos esta marca. Es posible que ya haya sido eliminada.';
          break;
        case 409:
          message = backendMessage || 'Ya existe una marca con ese nombre. Usa un nombre diferente.';
          break;
        case 400:
          message = backendMessage || 'Hay datos por corregir. Revisa los campos del formulario.';
          break;
        case 401:
          message = 'Tu sesión no está autorizada para administrar marcas.';
          break;
        case 403:
          message = 'No tienes permisos suficientes para realizar esta acción.';
          break;
        case 500:
          message = 'El servidor tuvo un problema al procesar la marca. Intenta nuevamente.';
          break;
        default:
          message = backendMessage || `No se pudo completar la acción. Código ${error.status}.`;
      }
    }

    this._error.set(message);
    return throwError(() => ({ message, statusCode: error.status }));
  }

  private formatApiMessage(message?: string | string[]): string {
    if (Array.isArray(message)) {
      return message.filter(Boolean).join(' ');
    }

    return message?.trim() ?? '';
  }
}
