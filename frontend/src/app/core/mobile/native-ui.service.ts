import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';

@Injectable({ providedIn: 'root' })
export class NativeUiService {
  private isStatusBarVisible = false;

  constructor() {
    this.setupGlobalTouchListeners();
  }

  async init(): Promise<void> {
    if (!Capacitor.isNativePlatform()) {
      return;
    }

    // overlay: false ensures the webview resizes, collapsing the status bar space
    await StatusBar.setOverlaysWebView({ overlay: false });
    await this.hideStatusBar();
  }

  async showStatusBar() {
    if (!Capacitor.isNativePlatform() || this.isStatusBarVisible) return;
    await StatusBar.show();
    this.isStatusBarVisible = true;
  }

  async hideStatusBar() {
    if (!Capacitor.isNativePlatform() || !this.isStatusBarVisible) return;
    await StatusBar.hide();
    this.isStatusBarVisible = false;
  }

  private setupGlobalTouchListeners() {
    if (!Capacitor.isNativePlatform()) return;

    let touchStartY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
      
      // If user touches anywhere outside the very top edge, hide the status bar
      if (touchStartY > 50 && this.isStatusBarVisible) {
        this.hideStatusBar();
      }
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      const touchY = e.touches[0].clientY;
      const swipeDistance = touchY - touchStartY;

      // Detect swipe down originating from the top edge
      if (touchStartY < 50 && swipeDistance > 30 && !this.isStatusBarVisible) {
        this.showStatusBar();
      }
    }, { passive: true });
  }
}
