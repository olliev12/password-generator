import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppGlobal } from './app-global';

@NgModule({})
export class AppGlobalModule {
    static forRoot(): ModuleWithProviders<AppGlobalModule> {
        return {
            ngModule: AppGlobalModule,
            providers: [AppGlobal]
        };
    }
}
