import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AppGlobal } from '../../services/app-global';

@Component({
  selector: 'app-password-strength-test',
  templateUrl: './password-strength-test.component.html',
  styleUrls: ['./password-strength-test.component.scss']
})
export class PasswordStrengthTestComponent implements OnInit, OnChanges {

  @Input() password: string = '';
  constructor(
    public appGlobal: AppGlobal
  ) {

  }

  ngOnInit(){

  }

  ngOnChanges() {

  }
}
