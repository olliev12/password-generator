import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GeneratorComponent } from './generator.component';
import { GeneratorRoutingModule } from './generator-routing.module';
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
import { AppGlobalModule } from './../services/app-global.module';

@NgModule({
  declarations: [
    GeneratorComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    GeneratorRoutingModule,
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
export class GeneratorModule { }
