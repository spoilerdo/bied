import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule } from '@nebular/theme';

const nebularModules = [NbThemeModule.forRoot(), NbLayoutModule, NbButtonModule, NbCardModule, NbEvaIconsModule];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ...nebularModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
