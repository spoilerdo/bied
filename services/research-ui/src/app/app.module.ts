import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { ResearchListComponent } from './research-list/research-list.component';

@NgModule({
  declarations: [AppComponent, ResearchListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Nebular
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
