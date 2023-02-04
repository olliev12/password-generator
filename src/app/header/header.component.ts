import { Component } from '@angular/core';
import { AppGlobal } from '../services/app-global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public menuOpen: boolean = false;

  constructor(private appGlobal: AppGlobal) {

  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.appGlobal.toggleMenu();
  }

}
