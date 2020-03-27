import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbSelectModule,
  NbInputModule,
  NbCheckboxModule,
  NbRadioModule,
  NbTooltipModule,
  NbIconModule,
  NbStepperModule,
  NbListItemComponent,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

import { QuestionnaireFlowComponent } from './questionnaire-flow/questionnaire-flow.component';
import { QuestionsStepComponent } from './questionnaire-flow/questions-step/questions-step.component';
import { IntroductionStepComponent } from './questionnaire-flow/introduction-step/introduction-step.component';
import { ResultsStepComponent } from './questionnaire-flow/results-step/results-step.component';
import { BiedQuestionComponent } from './components/bied-question/bied-question.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { LikertComponent } from './components/likert/likert.component';
import { TextComponent } from './components/text/text.component';
import { NumericComponent } from './components/numeric/numeric.component';
import { DateComponent } from './components/date/date.component';
import { TimeComponent } from './components/time/time.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RadioComponent } from './components/radio/radio.component';
import { LikertGroupComponent } from './components/likert-group/likert-group.component';
import { TestingComponent } from './components/testing/testing.component';

const nebular = [
  NbThemeModule.forRoot(),
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbSelectModule,
  NbInputModule,
  NbCheckboxModule,
  NbRadioModule,
  NbTooltipModule,
  NbEvaIconsModule,
  NbIconModule,
  NbStepperModule,
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireFlowComponent,
    QuestionsStepComponent,
    IntroductionStepComponent,
    ResultsStepComponent,
    BiedQuestionComponent,
    MultipleChoiceComponent,
    LikertComponent,
    TextComponent,
    NumericComponent,
    DateComponent,
    TimeComponent,
    DropdownComponent,
    RadioComponent,
    LikertGroupComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    nebular,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NbListItemComponent,
    MultipleChoiceComponent,
    LikertComponent,
    TextComponent,
    NumericComponent,
    DateComponent,
    TimeComponent,
    DropdownComponent,
    RadioComponent,
    LikertGroupComponent,
  ],
})
export class AppModule {}
