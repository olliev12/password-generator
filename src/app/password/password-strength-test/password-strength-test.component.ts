import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
    console.log(this.password);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let change in changes) {
      if (change === 'password') {
        console.log(this.password)
      }
    }
  }
}
