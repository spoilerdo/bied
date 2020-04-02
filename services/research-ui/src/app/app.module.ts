import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbMenuModule,
  NbDialogModule,
  NbDatepickerModule,
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveDialogComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/remove-dialog/remove-dialog.component';
import { RenameDialogComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/rename-dialog/rename-dialog.component';

const nebularModules = [
  NbThemeModule.forRoot(),
  NbMenuModule.forRoot(),
  NbDialogModule.forRoot(),
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
  entryComponents: [RemoveDialogComponent, RenameDialogComponent],
})
export class AppModule {}
