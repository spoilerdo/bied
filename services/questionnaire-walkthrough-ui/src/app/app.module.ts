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
  NbStepperModule,
  NbPositionBuilderService,
} from '@nebular/theme';

import { QuestionnaireFlowComponent } from './questionnaire-flow/questionnaire-flow.component';
import { QuestionsStepComponent } from './questionnaire-flow/questions-step/questions-step.component';
import { IntroductionStepComponent } from './questionnaire-flow/introduction-step/introduction-step.component';
import { ResultsStepComponent } from './questionnaire-flow/results-step/results-step.component';

import { QuestionModule } from './question/question.module';

const nebular = [
  NbThemeModule.forRoot(),
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbStepperModule,
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireFlowComponent,
    QuestionsStepComponent,
    IntroductionStepComponent,
    ResultsStepComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    QuestionModule,
    nebular,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
