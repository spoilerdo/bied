import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbDatepickerModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const nebularModules = [
  NbThemeModule.forRoot(),
  NbDatepickerModule.forRoot(),
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbEvaIconsModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ...nebularModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
