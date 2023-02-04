import { Component } from '@angular/core';
import { AppGlobal } from '../services/app-global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public appGlobal: AppGlobal) {

  }

}
