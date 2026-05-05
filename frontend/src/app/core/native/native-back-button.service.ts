import { DOCUMENT } from '@angular/common';
import { inject, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

@Injectable({ providedIn: 'root' })
export class NativeBackButtonService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);
  private initialized = false;

  async init(): Promise<void> {
    if (this.initialized || !Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android') {
      return;
    }

    this.initialized = true;

    await CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      this.zone.run(() => {
        void this.handleBackButton(canGoBack);
      });
    });
  }

  private async handleBackButton(canGoBack: boolean): Promise<void> {
    if (this.dispatchBackEvent()) {
      return;
    }

    if (this.closeOpenSurface()) {
      return;
    }

    if (this.isHomeRoute()) {
      await CapacitorApp.minimizeApp();
      return;
    }

    if (canGoBack) {
      window.history.back();
      return;
    }

    await this.router.navigateByUrl('/panel/dashboard');
  }

  private dispatchBackEvent(): boolean {
    const event = new CustomEvent('xtore:back-button', {
      cancelable: true,
      detail: { url: this.router.url },
    });

    window.dispatchEvent(event);
    return event.defaultPrevented;
  }

  private closeOpenSurface(): boolean {
    const surface = this.findLastVisibleElement([
      '.sidebar-overlay.active',
      '.product-form-backdrop',
      '.product-modal-backdrop',
      '.promo-modal-backdrop',
      '.caja-modal-backdrop',
      '.inventory-modal-backdrop',
      '.sale-modal-backdrop',
      '.modal-backdrop',
      '.modal-overlay',
    ]);

    if (!surface) {
      return false;
    }

    const closeButton = surface.querySelector<HTMLElement>(
      '[data-back-close], [aria-label*="Cerrar"], .modal-close, .close-btn, .form-btn.ghost',
    );

    (closeButton ?? surface).click();
    return true;
  }

  private findLastVisibleElement(selectors: string[]): HTMLElement | null {
    const elements = selectors.flatMap((selector) =>
      Array.from(this.document.querySelectorAll<HTMLElement>(selector)),
    );

    return elements.filter((element) => this.isVisible(element)).at(-1) ?? null;
  }

  private isVisible(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);

    return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
  }

  private isHomeRoute(): boolean {
    const cleanUrl = this.router.url.split('?')[0].split('#')[0];
    return cleanUrl === '/' || cleanUrl === '/panel' || cleanUrl === '/panel/dashboard';
  }
}
