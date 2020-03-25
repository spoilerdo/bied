import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';

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
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

import { QuestionnaireFlowComponent } from './questionnaire-flow/questionnaire-flow.component';
import { QuestionsStepComponent } from './questionnaire-flow/questions-step/questions-step.component';
import { IntroductionStepComponent } from './questionnaire-flow/introduction-step/introduction-step.component';
import { ResultsStepComponent } from './questionnaire-flow/results-step/results-step.component';
import { BiedQuestionComponent } from './components/bied-question/bied-question.component';

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
  NbStepperModule
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireFlowComponent,
    QuestionsStepComponent,
    IntroductionStepComponent,
    ResultsStepComponent,
    BiedQuestionComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, QuillModule.forRoot(), nebular],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
