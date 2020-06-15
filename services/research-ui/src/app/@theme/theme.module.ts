import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NbThemeModule, NbCardModule } from '@nebular/theme';
import { HeaderCardComponent } from './header-card/header-card.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

const components = [
  HeaderCardComponent,
  ThumbnailComponent
]

@NgModule({
  imports: [NbCardModule, CommonModule],
  declarations: components,
  exports: components,
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NbThemeModule.forRoot().providers],
    };
  }
}
