import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbSelectModule,
  NbToggleModule,
} from '@nebular/theme';
import { CreateQuestionnaireComponent } from './pages/create-questionnaire/create-questionnaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './pages/create-questionnaire/question/question.component';
import { SharedModule } from '../shared/shared.module';
import { ChoiceQuestionComponent } from './pages/create-questionnaire/question/choice-question/choice-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const nebularModules = [
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbIconModule,
  NbListModule,
  NbToggleModule,
];

@NgModule({
  declarations: [QuestionnaireComponent, CreateQuestionnaireComponent, QuestionComponent, ChoiceQuestionComponent],
  imports: [CommonModule, QuestionnaireRoutingModule, ReactiveFormsModule, SharedModule, ...nebularModules],
})
export class QuestionnaireModule {}
