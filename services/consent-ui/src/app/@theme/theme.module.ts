import { NgModule, ModuleWithProviders } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
@NgModule({
  imports: [NbThemeModule.forRoot()],
  exports: [],
})
export class ThemeModule {}
