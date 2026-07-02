import { Component } from '@angular/core';

interface ThemeOption {
  className: string;
  name: string;
  description: string;
}

interface PreviewMetric {
  label: string;
  value: string;
  tone: 'primary' | 'success' | 'warning' | 'danger';
}

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [],
  templateUrl: './crud.html',
  styleUrls: ['./crud.scss'],
})
export class Crud {
  selectedTheme = 'theme-panel-current';

  readonly themes: ThemeOption[] = [
    { className: 'theme-panel-current', name: 'Panel actual', description: 'Claro administrativo, azul sobrio y acento verde.' },
    { className: 'theme-light', name: 'Claro nítido', description: 'Superficies limpias, azul profundo y acento turquesa.' },
    { className: 'theme-dark', name: 'Medianoche', description: 'Oscuro profesional con azules suaves y violeta.' },
    { className: 'theme-aurora', name: 'Aurora', description: 'Oscuro mineral con verde boreal y azul eléctrico.' },
    { className: 'theme-sakura', name: 'Sakura', description: 'Claro editorial, rosado elegante y contraste de tinta.' },
  ];

  readonly metrics: PreviewMetric[] = [
    { label: 'Ventas', value: 'S/ 48.2k', tone: 'primary' },
    { label: 'Ordenes', value: '1,284', tone: 'success' },
    { label: 'Alertas', value: '18', tone: 'warning' },
    { label: 'Riesgos', value: '4', tone: 'danger' },
  ];

  readonly rows = [
    { product: 'Zapatillas Urban Pro', status: 'Activo', stock: 82, amount: 'S/ 249.00' },
    { product: 'Casaca Wind Shell', status: 'Revision', stock: 16, amount: 'S/ 189.00' },
    { product: 'Mochila Transit 22L', status: 'Agotado', stock: 0, amount: 'S/ 139.00' },
  ];

  get selectedThemeName(): string {
    return this.themes.find((theme) => theme.className === this.selectedTheme)?.name ?? 'Tema';
  }

  selectTheme(className: string): void {
    this.selectedTheme = className;
  }
}
