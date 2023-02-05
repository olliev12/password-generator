import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as AppConfig from '../../config/app-config';
import { Settings } from '../../config/app-config';

@Component({
  selector: 'app-random-password-generator',
  templateUrl: './random-password-generator.component.html',
  styleUrls: ['./random-password-generator.component.scss']
})
export class RandomPasswordGeneratorComponent {

  @Input() length: number = 0;
  @Input() minLength: number = 0;
  @Input() maxLength: number = 0;
  @Input() toggles: (keyof Settings)[] = [];
  @Input() options: Settings = {
    lowerCase: true,
    upperCase: true,
    numbers: true,
    symbols: true
  };
  @Output() updateSettings: EventEmitter<object> = new EventEmitter<object>();

  constructor() {

  }

  settingsUpdated(type: string, event: any) {
    this.updateSettings.emit({
      type,
      event,
      options : this.options,
      length: this.length
    });
  }

}
