import { Component } from '@angular/core';
import { AppGlobal } from './services/app-global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'password-generator';

  constructor(public appGlobal: AppGlobal) {

  }
}
