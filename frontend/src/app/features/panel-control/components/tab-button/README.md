# TabButton

Componente standalone para mostrar pestañas/botones de navegación dentro de una page.

## Importar en una page

```ts
import { TabButton, TabButtonItem } from '../../components/tab-button/tab-button';

@Component({
  standalone: true,
  imports: [TabButton],
})
export class MiPage {}
```

Si la page ya tiene otros imports, solo agrega `TabButton` al arreglo `imports`.

## Crear los tabs

```ts
import { ShoppingCart, Package } from 'lucide-angular';

const TABS = [
  { id: 'ventas', label: 'Ventas', icon: ShoppingCart },
  { id: 'inventario', label: 'Inventario', icon: Package },
] as const satisfies readonly TabButtonItem[];

type TabId = (typeof TABS)[number]['id'];
```

Dentro de la clase:

```ts
export class MiPage {
  activeTab: TabId = 'ventas';
  readonly tabs = TABS;
}
```

## Uso simple

Usa `[(activeTab)]` cuando solo necesitas cambiar contenido dentro de la misma page.

```html
<app-tab-button
  [tabs]="tabs"
  [(activeTab)]="activeTab"
  ariaLabel="Secciones de mi page"
></app-tab-button>
```

Ejemplo de contenido:

```html
@if (activeTab === 'ventas') {
  <section>Contenido de ventas</section>
}

@if (activeTab === 'inventario') {
  <section>Contenido de inventario</section>
}
```

## Uso con acción extra

Usa `(tabChange)` si además de cambiar el tab necesitas ejecutar algo propio de la page.

```html
<app-tab-button
  [tabs]="tabs"
  [(activeTab)]="activeTab"
  ariaLabel="Secciones de configuración"
  (tabChange)="markUnsaved()"
></app-tab-button>
```

```ts
markUnsaved() {
  this.isSaved = false;
}
```

## Uso con rutas

Si cada tab navega a una ruta, puedes usar `[activeTab]` y `(tabChange)` sin two-way binding.

```html
<app-tab-button
  [tabs]="tabs"
  [activeTab]="activeTab"
  ariaLabel="Secciones de productos"
  (tabChange)="goToTab($event)"
></app-tab-button>
```

```ts
goToTab(tab: string): void {
  this.router.navigate(['/panel/productos', tab]);
}
```

En este caso la page debe actualizar `activeTab` leyendo la URL, como hace `productos`.

## API

| Propiedad | Tipo | Uso |
| --- | --- | --- |
| `tabs` | `readonly TabButtonItem[]` | Lista de tabs a mostrar. |
| `activeTab` | `string` | ID del tab activo. |
| `ariaLabel` | `string` | Texto accesible para el `<nav>`. |
| `activeTabChange` | `EventEmitter` | Permite usar `[(activeTab)]`. |
| `tabChange` | `EventEmitter<string>` | Avisa cuando el usuario selecciona otro tab. |

## Notas

- Cada `id` debe ser único.
- `label` es el texto visible del botón.
- `icon` es opcional y debe venir de `lucide-angular`.
- El componente no modifica la lista de tabs; solo la lee.
