import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AppGlobal {
  headerHeight: BehaviorSubject<number> = new BehaviorSubject<number>(90);
  footerHeight: BehaviorSubject<number> = new BehaviorSubject<number>(190);
  showTopMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(public router: Router) {

  }


}
