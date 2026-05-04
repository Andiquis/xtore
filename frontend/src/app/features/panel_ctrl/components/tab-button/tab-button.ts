import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export interface TabButtonItem {
  id: string;
  label: string;
  icon?: any;
}

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './tab-button.html',
  styleUrl: './tab-button.scss',
})
export class TabButton {
  @Input({ required: true }) tabs: TabButtonItem[] = [];
  @Input({ required: true }) activeTab = '';
  @Input() ariaLabel = 'Navegacion de secciones';

  @Output() tabChange = new EventEmitter<string>();

  selectTab(tab: TabButtonItem): void {
    if (tab.id !== this.activeTab) {
      this.tabChange.emit(tab.id);
    }
  }
}
