import { Component } from '@angular/core';

export interface Settings {
  lowerCase: boolean,
  upperCase: boolean,
  numbers: boolean,
  symbols: boolean
}
/**
 * @todo list
 * popup message when user attempts settings which are not allowed
 */
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
  host: {'class': 'box'}
})
export class GeneratorComponent {

  readonly lowerCaseChars: string = 'abcdefghijklmnopqrstuvwxyz';
  readonly upperCaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  readonly numberChars: string = '0123456789';
  readonly symbolChars: string = '~`!@#$%^&*()_+-={}[]:";\'?,./|\\';
  readonly minLength: number = 6;
  readonly maxLength: number = 64;

  public generatedPassword: string = 'awesomePassword'
  length: number = 16;
  toggles: (keyof Settings)[] = [];
  options: Settings = {
    lowerCase: true,
    upperCase: true,
    numbers: true,
    symbols: true
  };
  alphabet: string = this.lowerCaseChars + this.upperCaseChars + this.numberChars + this.symbolChars;
  public showPassword: boolean = true;

  constructor() {
    this.toggles = Object.keys(this.options).map((key) => {
      return key as keyof Settings;
    });
    this.alphabet = this.createAlphabet();
    this.generateRandomPassword();
  }

  generateRandomPassword(): string {
    let pass: string = '';
    this.validateLength(this.length, true);
    this.alphabet = this.createAlphabet();

    for (let i = this.length; i > 0; --i) {
      pass += this.alphabet[Math.round(Math.random() * (this.alphabet.length - 1))];
    }
    pass = this.enforceSelections(pass);
    this.generatedPassword = pass;

    return pass;
  }

  createAlphabet(): string {
    var mask = '';
    if (this.options.lowerCase) mask += this.lowerCaseChars;
    if (this.options.upperCase) mask += this.upperCaseChars;
    if (this.options.numbers) mask += this.numberChars;
    if (this.options.symbols) mask += this.symbolChars;
    return mask;
  }

  enforceSelections(pass: string): string {
    if (pass.length < 4) {
      return pass;
    }
    let uniqueIndecies: number[] = [];
    let chars = Array.from(pass)
    if (this.options.lowerCase) {
      this.replace(this.lowerCaseChars, chars, uniqueIndecies);
    }
    if (this.options.upperCase) {
      this.replace(this.upperCaseChars, chars, uniqueIndecies);
    }
    if (this.options.numbers) {
      this.replace(this.numberChars, chars, uniqueIndecies);
    }
    if (this.options.symbols) {
      this.replace(this.symbolChars, chars, uniqueIndecies);
    }
    return chars.join('');
  }

  replace(alpha: string, chars: string[], uniqueIndecies: number[]): string[] {
    if (!chars.some((c) => alpha.includes(c))) {
      let index = Math.round(Math.random() * (this.length - 1));
      while (uniqueIndecies.includes(index)) {
        index = Math.round(Math.random() * (this.length - 1));
      }
      chars[index] = alpha[Math.round(Math.random() * (alpha.length - 1))];
      uniqueIndecies.push(index);
    }
    return chars;
  }

  async settingsUpdated(type: string, event: any) {
    switch (type) {
      case 'length':
        this.validateLength(event).then((valid) => {
          if (valid) {
            this.generateRandomPassword();
          }
        });
        break;
      case 'toggle':
        this.handleToggle(event);
        this.validateLength(this.length, true).then(() => {
          this.generateRandomPassword();
        });
        break;
      default:
        return;
    }

  }

  handleToggle(event: any) {
    let toggle: keyof Settings = event.source.name as keyof Settings;
    let allTogglesWouldBeOff: boolean = this.allTogglesWouldBeOff(toggle);

    if (allTogglesWouldBeOff) {
      this.options[toggle] = true;
      event.source.checked = true;
    }
  }

  allTogglesWouldBeOff(toggle: keyof Settings): boolean {
    let disable: boolean = false;
    let atLeastOneToggleOn: boolean = false;
    for (let k of this.toggles) {
      if (k != toggle) {
        atLeastOneToggleOn = atLeastOneToggleOn || this.options[k];
      }
    }
    if (!atLeastOneToggleOn) {
      disable = true;
    }
    return disable;
  }

  handleManualPassword() {
    this.length = this.generatedPassword.length;
  }

  async validateLength(value: number, force: boolean = false): Promise<boolean> {
    if (!value && value !==0 && !force) {
      return Promise.resolve(false);
    }
    else {
      if (value < this.minLength) {
        this.length = this.minLength;
      }
      if (value > this.maxLength) {
        this.length = this.maxLength;
      }
      return Promise.resolve(true);
    }
  }

  validateCharacterInAlphabet(event: any) {
    let input: string = event.key;

    // allow events where key length is > 1 (Backspace, Delete, etc)
    if (input.length === 1 && !this.alphabet.includes(input)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public passwordStrength(): number {
    return (this.generatedPassword.length/64)*100;
  }

  public passwordStrengthColor(): string {
    let color = 'warn';
    if (this.generatedPassword.length >=8 && this.generatedPassword.length <=11) {
      color = 'accent';
    }
    else if (this.generatedPassword.length > 11) {
      color = 'primary';
    }
    return color;
  }

}