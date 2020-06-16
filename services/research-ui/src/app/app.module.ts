import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbButtonModule,
  NbCardModule,
  NbMenuModule,
  NbDialogModule,
  NbSidebarModule,
} from '@nebular/theme';
import { RemoveDialogComponent } from './modules/questionnaire/pages/questionnaire-overview/questionnaire-card/remove-dialog/remove-dialog.component';
import { RenameDialogComponent } from './modules/questionnaire/pages/questionnaire-overview/questionnaire-card/rename-dialog/rename-dialog.component';
import { QuestionnaireCardComponent } from './modules/questionnaire/pages/questionnaire-overview/questionnaire-card/questionnaire-card.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NbLayoutModule } from '@nebular/theme';
import { ResearchDetailsModule } from './modules/research-details/research-details.module';

const nebularModules = [
  NbThemeModule.forRoot(),
  NbMenuModule.forRoot(),
  NbDialogModule.forRoot(),
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbEvaIconsModule,
  NbSidebarModule.forRoot(),
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...nebularModules,

    // Pages
    DashboardModule,
    ResearchDetailsModule,
  ],
  providers: [
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [RemoveDialogComponent, RenameDialogComponent, QuestionnaireCardComponent],
})
export class AppModule {}
