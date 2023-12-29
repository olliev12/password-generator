import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Settings } from '../../config/app-config';

@Component({
  selector: 'app-random-password-generator',
  templateUrl: './random-password-generator.component.html',
  styleUrls: ['./random-password-generator.component.scss']
})
export class RandomPasswordGeneratorComponent {

  @Input() length = 0;
  @Input() minLength = 0;
  @Input() maxLength = 0;
  @Input() toggles: (keyof Settings)[] = [];
  @Input() options: Settings = {
    lowerCase: true,
    upperCase: true,
    numbers: true,
    symbols: true
  };
  @Output() updateSettings: EventEmitter<object> = new EventEmitter<object>();

  settingsUpdated(type: string, event: any) {
    this.updateSettings.emit({
      type,
      event,
      options : this.options,
      length: this.length
    });
  }

}
