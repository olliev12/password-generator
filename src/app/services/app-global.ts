import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as AppConfig from './../config/app-config';
import { Settings } from './../config/app-config';

@Injectable()
export class AppGlobal {
  headerHeight: BehaviorSubject<number> = new BehaviorSubject<number>(90);
  footerHeight: BehaviorSubject<number> = new BehaviorSubject<number>(190);
  showTopMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(public router: Router) {

  }

  public getPasswordStrength(password: string, options: Settings): number {
    let strength: number = 0;
    let combo: number = 0;

    strength += password.length * 4;

    let passArr = Array.from(password);

    if (options.lowerCase) {
      let numOfChars = (this.getNumberOfCharacters(passArr, AppConfig.lowerCaseChars));
      strength += numOfChars*0.25;
      combo += numOfChars > 0 ? 1: 0;
    }
    if (options.upperCase) {
      let numOfChars = (this.getNumberOfCharacters(passArr, AppConfig.upperCaseChars));
      strength += numOfChars*0.25;
      combo += numOfChars > 0 ? 1: 0;
    }
    if (options.numbers) {
      let numOfChars = (this.getNumberOfCharacters(passArr, AppConfig.numberChars));
      strength += numOfChars*0.4;
      combo += numOfChars > 0 ? 1: 0;
    }
    if (options.symbols) {
      let numOfChars = (this.getNumberOfCharacters(passArr, AppConfig.symbolChars));
      strength += numOfChars*0.5;
      combo += numOfChars > 0 ? 1: 0;
    }

    strength += combo*4;

    return strength;
  }

  getNumberOfCharacters(strArr: string[], alphabet: string): number {
    let numOfChars: number = 0;

    strArr.forEach((char) => {
      numOfChars += alphabet.includes(char) ? 1 : 0;
    });

    return numOfChars;
  }


}
