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
  NbDatepickerModule, NbToastrModule,
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveDialogComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/remove-dialog/remove-dialog.component';
import { RenameDialogComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/rename-dialog/rename-dialog.component';
import { ShareDialogComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/share-dialog/share-dialog.component';
import { QuestionnaireCardComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/questionnaire-card.component';

const nebularModules = [
  NbThemeModule.forRoot(),
  NbMenuModule.forRoot(),
  NbDialogModule.forRoot(),
  NbDatepickerModule.forRoot(),
  NbToastrModule.forRoot(),
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
  entryComponents: [RemoveDialogComponent, RenameDialogComponent, QuestionnaireCardComponent, ShareDialogComponent],
})
export class AppModule {}
