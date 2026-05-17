import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NativeBackButtonService } from './core/mobile/native-back-button.service';
import { NativeUiService } from './core/mobile/native-ui.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class App {
  constructor(nativeBackButton: NativeBackButtonService, nativeUi: NativeUiService) {
    void nativeBackButton.init();
    void nativeUi.init();
  }
}
