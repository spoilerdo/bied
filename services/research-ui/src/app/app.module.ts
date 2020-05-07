import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { LikertComponent } from './components/likert/likert.component';
import { DateComponent } from './components/date/date.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { NumericComponent } from './components/numeric/numeric.component';
import { RadioComponent } from './components/radio/radio.component';
import { TextComponent } from './components/text/text.component';
import { TimeComponent } from './components/time/time.component';
import { BiedQuestionComponent } from './components/bied-question/bied-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LikertComponent,
    DateComponent,
    DropdownComponent,
    MultipleChoiceComponent,
    NumericComponent,
    RadioComponent,
    TextComponent,
    TimeComponent,
    BiedQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
