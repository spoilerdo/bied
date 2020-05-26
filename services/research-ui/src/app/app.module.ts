import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbSidebarModule,
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbMenuModule,
  NbContextMenuModule,
  NbDialogModule,
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveDialogComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/remove-dialog/remove-dialog.component';
import { RenameDialogComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/rename-dialog/rename-dialog.component';
import { QuestionnaireCardComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/questionnaire-card.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ThemeModule } from './@theme/theme.module';

const nebularModules = [
  NbThemeModule.forRoot(),
  NbMenuModule.forRoot(),
  NbDialogModule.forRoot(),
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbEvaIconsModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...nebularModules,
    ThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,

    // Pages
    DashboardModule,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RemoveDialogComponent, RenameDialogComponent, QuestionnaireCardComponent],
})
export class AppModule {}
