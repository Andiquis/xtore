import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NativeBackButtonService } from './core/native/native-back-button.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class App {
  constructor(nativeBackButton: NativeBackButtonService) {
    void nativeBackButton.init();
  }
}
