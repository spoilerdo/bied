import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
} from '@nebular/theme';
import { LikertComponent } from './components/likert/likert.component';
import { DateComponent } from './components/date/date.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { NumericComponent } from './components/numeric/numeric.component';
import { RadioComponent } from './components/radio/radio.component';
import { TextComponent } from './components/text/text.component';
import { TimeComponent } from './components/time/time.component';
import { BiedQuestionComponent } from './components/bied-question/bied-question.component';
import { QuestionnaireBuilderComponent } from './questionnaire-builder/questionnaire-builder/questionnaire-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionModule } from 'src/app/models/question/question.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    /*LikertComponent,
    DateComponent,
    DropdownComponent,
    MultipleChoiceComponent,
    NumericComponent,
    RadioComponent,
    TextComponent,
    TimeComponent,
    BiedQuestionComponent,*/
    QuestionnaireBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbListModule,
    ReactiveFormsModule,
    QuestionModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
