import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbButtonModule,
  NbCardModule,
  NbInputModule  
} from '@nebular/theme';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Nebular
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
