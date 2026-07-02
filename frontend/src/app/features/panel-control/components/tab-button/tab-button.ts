import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export interface TabButtonItem {
  id: string;
  label: string;
  icon?: any;
  separator?: boolean;
}

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './tab-button.html',
  styleUrl: './tab-button.scss',
})
export class TabButton {
  @Input({ required: true }) tabs: readonly TabButtonItem[] = [];
  @Input({ required: true }) activeTab = '';
  @Input() ariaLabel = 'Navegacion de secciones';

  @Output() activeTabChange = new EventEmitter<any>();
  @Output() tabChange = new EventEmitter<string>();

  selectTab(tab: TabButtonItem): void {
    if (tab.id !== this.activeTab) {
      this.activeTabChange.emit(tab.id);
      this.tabChange.emit(tab.id);
    }
  }
}
