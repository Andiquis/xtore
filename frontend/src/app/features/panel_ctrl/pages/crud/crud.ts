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
    { className: 'theme-panel-current', name: 'Panel Current', description: 'Tema normalizado del panel actual.' },
    { className: 'theme-light', name: 'Light', description: 'Slate claro con acento azul.' },
    { className: 'theme-dark', name: 'Dark', description: 'Modo oscuro de alto contraste.' },
    { className: 'theme-aurora', name: 'Aurora', description: 'Oscuro con verde boreal.' },
    { className: 'theme-sakura', name: 'Sakura', description: 'Claro con rosados suaves.' },
    { className: 'theme-obsidian', name: 'Obsidian', description: 'Carbono con acento dorado.' },
    { className: 'theme-forest', name: 'Forest', description: 'Verdes y tonos tierra.' },
    { className: 'theme-candy', name: 'Candy', description: 'Paleta pop saturada.' },
    { className: 'theme-dusk', name: 'Dusk', description: 'Oscuro morado y cálido.' },
    { className: 'theme-arctic', name: 'Arctic', description: 'Azules hielo y acero.' },
    { className: 'theme-ember', name: 'Ember', description: 'Carbon cálido con naranja.' },
    { className: 'theme-mint', name: 'Mint', description: 'Menta clara y serena.' },
    { className: 'theme-noir', name: 'Noir', description: 'Escala de grises con contraste.' },
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
