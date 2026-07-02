import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { TabButton, TabButtonItem } from '../../components/tab-button/tab-button';
import { Barcode, Box, Layers, Package, Tag, WalletCards } from 'lucide-angular';

const PRODUCT_TABS = [
  { id: 'precios', label: 'Precios', icon: WalletCards },
  { id: 'codigos', label: 'Códigos', icon: Barcode },
  { id: 'presentaciones', label: 'Unidades de venta', icon: Box },
  { id: 'lista', label: 'Productos base', icon: Package },
  { id: 'categorias', label: 'Categorías', icon: Layers, separator: true },
  { id: 'marcas', label: 'Marcas', icon: Tag },
] as const satisfies readonly TabButtonItem[];

type ProductRouteTabId = (typeof PRODUCT_TABS)[number]['id'];

const PRODUCT_TAB_IDS = new Set<string>(PRODUCT_TABS.map(({ id }) => id));

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterOutlet, TabButton],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos implements OnInit {
  activeTab: ProductRouteTabId = 'precios';
  readonly productTabs = PRODUCT_TABS;

  private readonly router = inject(Router);

  ngOnInit(): void {
    this.syncActiveTab(this.router.url);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => this.syncActiveTab(event.urlAfterRedirects));
  }

  goToTab(tab: string): void {
    if (this.isProductRouteTab(tab)) {
      this.router.navigate(['/panel/productos', tab]);
    }
  }

  private syncActiveTab(url: string): void {
    const segment = url.split('/').filter(Boolean).at(-1) ?? 'precios';
    this.activeTab = this.isProductRouteTab(segment) ? segment : 'precios';
  }

  private isProductRouteTab(tab: string): tab is ProductRouteTabId {
    return PRODUCT_TAB_IDS.has(tab);
  }
}
