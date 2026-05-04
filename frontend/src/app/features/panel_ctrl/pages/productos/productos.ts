import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { TabButton, TabButtonItem } from '../../components/tab-button/tab-button';
import { Box, Layers, Package, Tag } from 'lucide-angular';

type ProductRouteTabId = 'lista' | 'categorias' | 'marcas' | 'presentacion';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterOutlet, TabButton],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos implements OnInit {
  activeTab: ProductRouteTabId = 'lista';

  readonly productTabs: TabButtonItem[] = [
    { id: 'lista', label: 'Productos', icon: Package },
    { id: 'categorias', label: 'Categorías', icon: Layers },
    { id: 'marcas', label: 'Marcas', icon: Tag },
    { id: 'presentacion', label: 'Presentación', icon: Box },
  ];

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
    const segment = url.split('/').filter(Boolean).at(-1) ?? 'lista';
    this.activeTab = this.isProductRouteTab(segment) ? segment : 'lista';
  }

  private isProductRouteTab(tab: string): tab is ProductRouteTabId {
    return ['lista', 'categorias', 'marcas', 'presentacion'].includes(tab);
  }
}
