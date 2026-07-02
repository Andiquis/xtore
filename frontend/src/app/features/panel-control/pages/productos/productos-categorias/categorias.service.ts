import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize, map, tap, throwError } from 'rxjs';
import { environment } from '../../../../../../environment/environment';

export type EstadoGenerico = 'activo' | 'inactivo';

export interface CategoriaResumen {
  id_categoria: number;
  nombre_categoria: string;
  id_categoria_padre: number | null;
  estado_categoria: EstadoGenerico;
  fecha_registro: string;
  fecha_modificacion: string | null;
}

export interface Categoria extends CategoriaResumen {
  categoria_padre?: CategoriaResumen | null;
  subcategorias?: CategoriaResumen[];
  _count?: {
    t_productos: number;
    subcategorias?: number;
  };
}

export interface CreateCategoriaDto {
  nombre_categoria: string;
  id_categoria_padre?: number | null;
  estado_categoria?: EstadoGenerico;
}

export interface UpdateCategoriaDto {
  nombre_categoria?: string;
  id_categoria_padre?: number | null;
  estado_categoria?: EstadoGenerico;
}

export interface ApiError {
  message: string | string[];
  statusCode: number;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class CategoriasService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/catalogo/categorias`;

  private readonly _categorias = signal<Categoria[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly categorias = this._categorias.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly total = computed(() => this._categorias().length);
  readonly categoriasActivas = computed(() =>
    this._categorias().filter((categoria) => categoria.estado_categoria === 'activo')
  );

  findAll(): Observable<Categoria[]> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.get<Categoria[]>(this.baseUrl).pipe(
      tap((categorias) => this._categorias.set(
        categorias.map((categoria) => this.withResolvedParent(categoria, categorias))
      )),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  findOne(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/${id}`).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  create(dto: CreateCategoriaDto): Observable<Categoria> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.post<Categoria>(this.baseUrl, dto).pipe(
      tap((categoria) => {
        this._categorias.update((list) =>
          [categoria, ...list].sort((a, b) =>
            a.nombre_categoria.localeCompare(b.nombre_categoria)
          )
        );
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  update(id: number, dto: UpdateCategoriaDto): Observable<Categoria> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.patch<Categoria>(`${this.baseUrl}/${id}`, dto).pipe(
      map((updated) => this.normalizeUpdatedCategoria(updated)),
      tap((normalized) => {
        this._categorias.update((list) =>
          list
            .map((categoria) => categoria.id_categoria === id
              ? this.withResolvedParent(normalized, list)
              : this.withResolvedParent(categoria, [
                  ...list.filter((item) => item.id_categoria !== id),
                  normalized,
                ])
            )
            .sort((a, b) => a.nombre_categoria.localeCompare(b.nombre_categoria))
        );
      }),
      catchError((err) => this.handleError(err)),
      finalize(() => this._loading.set(false))
    );
  }

  remove(id: number): Observable<Categoria> {
    this._loading.set(true);
    this._error.set(null);

    return this.http.delete<Categoria>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        this._categorias.update((list) =>
          list
            .filter((categoria) => categoria.id_categoria !== id)
            .map((categoria) =>
              categoria.id_categoria_padre === id
                ? { ...categoria, id_categoria_padre: null, categoria_padre: null }
                : categoria
            )
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

        this.http.delete<Categoria>(`${this.baseUrl}/${currentId}`).pipe(
          tap(() => {
            this._categorias.update((list) =>
              list
                .filter((categoria) => categoria.id_categoria !== currentId)
                .map((categoria) =>
                  categoria.id_categoria_padre === currentId
                    ? { ...categoria, id_categoria_padre: null, categoria_padre: null }
                    : categoria
                )
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

  refresh(): Observable<Categoria[]> {
    return this.findAll();
  }

  clearError(): void {
    this._error.set(null);
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
          message = backendMessage || 'Los datos de la categoría no son válidos.';
          break;
        case 404:
          message = backendMessage || 'La categoría solicitada no existe.';
          break;
        case 409:
          message = backendMessage || 'Ya existe una categoría con este nombre en el mismo nivel.';
          break;
        default:
          message = backendMessage || 'Ocurrió un error inesperado al procesar la categoría.';
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

  private normalizeUpdatedCategoria(categoria: Categoria): Categoria {
    return {
      ...categoria,
      fecha_modificacion: categoria.fecha_modificacion ?? new Date().toISOString(),
    };
  }

  private withResolvedParent(categoria: Categoria, categorias: Categoria[]): Categoria {
    if (!categoria.id_categoria_padre) {
      return {
        ...categoria,
        categoria_padre: null,
      };
    }

    const parent = categoria.categoria_padre
      ?? categorias.find((item) => item.id_categoria === categoria.id_categoria_padre)
      ?? null;

    return {
      ...categoria,
      categoria_padre: parent
        ? {
            id_categoria: parent.id_categoria,
            nombre_categoria: parent.nombre_categoria,
            id_categoria_padre: parent.id_categoria_padre,
            estado_categoria: parent.estado_categoria,
            fecha_registro: parent.fecha_registro,
            fecha_modificacion: parent.fecha_modificacion,
          }
        : null,
    };
  }
}
