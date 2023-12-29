export const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
export const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const numberChars = '0123456789';
export const symbolChars = '~`!@#$%^&*()_+-={}[]:";\'?,./|\\';
export const minLength = 6;
export const maxLength = 64;
export const modes: Mode[] = [
  {
    name: 'random',
    label: 'Random Password Generator',
    route: 'random-password-generator'
  },
  {
    name: 'advanced',
    label: 'Advanced (free!)',
    route: 'advanced-password-generator'
  },
  {
    name: 'test',
    label: 'Test your Password\'s Strength',
    route: 'password-strength-test'
  }
];
export interface Settings {
  lowerCase: boolean,
  upperCase: boolean,
  numbers: boolean,
  symbols: boolean
}

export interface Mode {
  name: string,
  label: string,
  route: string
}

export class AppConfig {
  // readonly lowerCaseChars: string = 'abcdefghijklmnopqrstuvwxyz';
  // readonly upperCaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // readonly numberChars: string = '0123456789';
  // readonly symbolChars: string = '~`!@#$%^&*()_+-={}[]:";\'?,./|\\';
  // readonly minLength: number = 1;
  // readonly maxLength: number = 100;
}
