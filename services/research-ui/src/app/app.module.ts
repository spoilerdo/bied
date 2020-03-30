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
  NbContextMenuModule,
  NbDialogModule,
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveDialogComponent } from './questionnaire/pages/questionnaire-overview/questionnaire-card/remove-dialog/remove-dialog.component';
import { FormsModule } from '@angular/forms';

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
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ...nebularModules],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RemoveDialogComponent],
})
export class AppModule {}
