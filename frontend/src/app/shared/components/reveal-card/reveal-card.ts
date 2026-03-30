import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardContent {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  icon?: string;
  badge?: string;
  stats?: { label: string; value: string }[];
  actions?: { label: string; callback: () => void }[];
}

@Component({
  selector: 'app-reveal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reveal-card.html',
  styleUrl: './reveal-card.scss',
})
export class RevealCardComponent {
  @Input() content!: CardContent;
  @Input() variant: 'default' | 'glass' | 'neon' = 'glass';
  @Input() revealDirection: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() hoverScale: number = 1.03;
  @Input() enableGlow: boolean = true;

  isHovered: boolean = false;

  onHover(hovering: boolean): void {
    this.isHovered = hovering;
  }

  getRevealClass(): string {
    return `reveal-${this.revealDirection}`;
  }
}
