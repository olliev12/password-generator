import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PasswordComponent } from './password.component';
import { PasswordRoutingModule } from './password-routing.module';
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { HttpClientModule } from '@angular/common/http';
import { AppGlobalModule } from '../services/app-global.module';
import { RandomPasswordGeneratorComponent } from './random-password-generator/random-password-generator.component';
import { AdvancedPasswordGeneratorComponent } from './advanced-password-generator/advanced-password-generator.component';
import { PasswordStrengthTestComponent } from './password-strength-test/password-strength-test.component';

@NgModule({
  declarations: [
    PasswordComponent,
    RandomPasswordGeneratorComponent,
    AdvancedPasswordGeneratorComponent,
    PasswordStrengthTestComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PasswordRoutingModule,
    ClipboardModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    HttpClientModule,
    AppGlobalModule.forRoot()
  ],
  providers: []
})
export class PasswordModule { }
