import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator.component';

const routes: Routes = [
  {
    path: '',
    component: GeneratorComponent,
    children: [
      { path: 'random', component: GeneratorComponent },
      { path: 'advanced', component: GeneratorComponent },
      { path: 'test', component: GeneratorComponent },
    ]
  },
  {
    path: '',
    redirectTo: 'random',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneratorRoutingModule { }
