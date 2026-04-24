import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-panel-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './panel-layout.html',
  styleUrl: './panel-layout.scss',
})
export class PanelLayout implements OnInit {
  currentSection: string = 'Dashboard';
  currentDate: string = this.formatCurrentDate();
  isSidebarOpen: boolean = false;
  private router = inject(Router);

  ngOnInit() {
    this.updateSectionName(this.router.url);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateSectionName(event.urlAfterRedirects);
      this.closeSidebar();
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  private formatCurrentDate(): string {
    const formattedDate = new Date().toLocaleDateString('es-PE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return formattedDate
      .replace(/\b\p{L}/gu, letter => letter.toUpperCase())
      .concat('.');
  }

  private updateSectionName(url: string) {
    if (url.includes('/panel/dashboard')) this.currentSection = 'Dashboard';
    else if (url.includes('/panel/ventas')) this.currentSection = 'Ventas';
    else if (url.includes('/panel/productos')) this.currentSection = 'Productos';
    else if (url.includes('/panel/inventario')) this.currentSection = 'Inventario';
    else if (url.includes('/panel/compras')) this.currentSection = 'Compras';
    else if (url.includes('/panel/usuarios')) this.currentSection = 'Usuarios';
    else if (url.includes('/panel/caja')) this.currentSection = 'Caja';
    else if (url.includes('/panel/promociones')) this.currentSection = 'Promociones';
    else if (url.includes('/panel/reportes')) this.currentSection = 'Reportes';
    else if (url.includes('/panel/configuracion')) this.currentSection = 'Configuración';
    else {
      // Capitalize first letter of path segment if possible
      const segments = url.split('/').filter(s => s);
      if (segments.length > 1) {
        this.currentSection = segments[1].charAt(0).toUpperCase() + segments[1].slice(1);
      } else {
        this.currentSection = 'Panel de Control';
      }
    }
  }
}
