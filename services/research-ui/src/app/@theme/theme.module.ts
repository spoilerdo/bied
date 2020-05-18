import { NgModule, ModuleWithProviders } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
@NgModule({
  imports: [],
  exports: [],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NbThemeModule.forRoot().providers],
    };
  }
}
