export const lowerCaseChars: string = 'abcdefghijklmnopqrstuvwxyz';
export const upperCaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const numberChars: string = '0123456789';
export const symbolChars: string = '~`!@#$%^&*()_+-={}[]:";\'?,./|\\';
export const minLength: number = 6;
export const maxLength: number = 64;
export interface Settings {
  lowerCase: boolean,
  upperCase: boolean,
  numbers: boolean,
  symbols: boolean
}

export class AppConfig {
  // readonly lowerCaseChars: string = 'abcdefghijklmnopqrstuvwxyz';
  // readonly upperCaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // readonly numberChars: string = '0123456789';
  // readonly symbolChars: string = '~`!@#$%^&*()_+-={}[]:";\'?,./|\\';
  // readonly minLength: number = 1;
  // readonly maxLength: number = 100;
}
