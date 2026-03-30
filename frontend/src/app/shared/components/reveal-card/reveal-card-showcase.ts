import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealCardComponent, CardContent } from './reveal-card';

@Component({
  selector: 'app-reveal-card-showcase',
  standalone: true,
  imports: [CommonModule, RevealCardComponent],
  template: `
    <section class="showcase">
      <div class="showcase__header">
        <h2 class="showcase__title">Reveal Cards</h2>
        <p class="showcase__subtitle">Hover to reveal dynamic content with beautiful animations</p>
      </div>

      <div class="showcase__grid">
        @for (card of cards; track card.title; let i = $index) {
          <app-reveal-card
            [content]="card"
            [variant]="i % 3 === 0 ? 'neon' : i % 3 === 1 ? 'glass' : 'default'"
            [revealDirection]="getRevealDirection(i)"
            [hoverScale]="1.03"
            [enableGlow]="true"
          />
        }
      </div>
    </section>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

      .showcase {
        padding: 60px 40px;
        min-height: 100vh;
        background: #050a18;

        &__header {
          text-align: center;
          margin-bottom: 50px;
        }

        &__title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(90deg, #00f5d4, #3a86ff, #b537f2);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 12px 0;
        }

        &__subtitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        &__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
      }

      @media (max-width: 768px) {
        .showcase {
          padding: 40px 20px;

          &__title {
            font-size: 1.8rem;
          }

          &__grid {
            grid-template-columns: 1fr;
          }
        }
      }
    `,
  ],
})
export class RevealCardShowcaseComponent {
  cards: CardContent[] = [
    {
      title: 'Analytics Dashboard',
      subtitle: 'Real-time metrics',
      icon: '📊',
      badge: 'Popular',
      description: 'Monitor your business performance with real-time analytics and custom reports.',
      stats: [
        { label: 'Views', value: '24.5K' },
        { label: 'Growth', value: '+12%' },
        { label: 'Users', value: '8.2K' },
      ],
      actions: [
        { label: 'Explore', callback: () => console.log('Explore clicked') },
        { label: 'Share', callback: () => console.log('Share clicked') },
      ],
    },
    {
      title: 'Product Catalog',
      subtitle: 'Manage inventory',
      icon: '🛍️',
      badge: 'New',
      description: 'Full control over your product listings with advanced filtering and search.',
      stats: [
        { label: 'Items', value: '1,234' },
        { label: 'Sold', value: '892' },
        { label: 'Rating', value: '4.8' },
      ],
      actions: [
        { label: 'Browse', callback: () => console.log('Browse clicked') },
        { label: 'Add New', callback: () => console.log('Add New clicked') },
      ],
    },
    {
      title: 'Customer Insights',
      subtitle: 'Behavior analysis',
      icon: '👥',
      badge: 'Pro',
      description: 'Deep dive into customer behavior patterns and purchasing preferences.',
      stats: [
        { label: 'Active', value: '3.4K' },
        { label: 'New', value: '+234' },
        { label: 'Loyal', value: '67%' },
      ],
      actions: [
        { label: 'Analyze', callback: () => console.log('Analyze clicked') },
        { label: 'Export', callback: () => console.log('Export clicked') },
      ],
    },
    {
      title: 'Sales Pipeline',
      subtitle: 'Track opportunities',
      icon: '💰',
      description: 'Visualize your sales funnel and track deal progress through each stage.',
      stats: [
        { label: 'Deals', value: '156' },
        { label: 'Value', value: '$2.4M' },
        { label: 'Win Rate', value: '68%' },
      ],
      actions: [
        { label: 'View Pipeline', callback: () => console.log('View clicked') },
        { label: 'Add Deal', callback: () => console.log('Add Deal clicked') },
      ],
    },
    {
      title: 'Marketing Hub',
      subtitle: 'Campaign management',
      icon: '📣',
      description: 'Create, launch, and track marketing campaigns across multiple channels.',
      stats: [
        { label: 'Clicks', value: '45.2K' },
        { label: 'CTR', value: '3.8%' },
        { label: 'Spend', value: '$12K' },
      ],
      actions: [
        { label: 'Campaigns', callback: () => console.log('Campaigns clicked') },
        { label: 'Create', callback: () => console.log('Create clicked') },
      ],
    },
    {
      title: 'Team Collaboration',
      subtitle: 'Work together',
      icon: '🤝',
      badge: 'Team',
      description: 'Seamless collaboration tools for your team to work efficiently together.',
      stats: [
        { label: 'Members', value: '24' },
        { label: 'Online', value: '18' },
        { label: 'Tasks', value: '156' },
      ],
      actions: [
        { label: 'Open Team', callback: () => console.log('Open Team clicked') },
        { label: 'Invite', callback: () => console.log('Invite clicked') },
      ],
    },
  ];

  directions = ['bottom', 'top', 'left', 'right'] as const;

  getRevealDirection(index: number): 'top' | 'bottom' | 'left' | 'right' {
    return this.directions[index % this.directions.length];
  }
}
