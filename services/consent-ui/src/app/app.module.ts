import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbLayoutModule, NbSidebarModule, NbMenuModule, NbDialogModule, NbToastrModule, NbPopoverModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardModule } from './dashboard/dashboard.module';
import { ThemeModule } from './@theme/theme.module';
import { ConsentsModule } from './consents/consents.module';
import { ProfileModule } from './profile/profile.module';
import { ConsentModule } from './consent/consent.module';
import { ResearchesModule } from './researches/researches.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule,
    NbPopoverModule,
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,    
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    DashboardModule,
    ConsentsModule,
    ProfileModule,
    ConsentModule,
    ResearchesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
