import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import {
  NbButtonModule,
  NbCardModule, NbCheckboxModule, NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule, NbRadioModule,
  NbSelectModule,
  NbToggleModule, NbTooltipModule,
} from '@nebular/theme';
import { CreateQuestionnaireComponent } from './pages/create-questionnaire/create-questionnaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './pages/create-questionnaire/question/question.component';
import { SharedModule } from '../shared/shared.module';
import { ChoiceQuestionComponent } from './pages/create-questionnaire/question/choice-question/choice-question.component';
import { TextQuestionComponent } from './pages/create-questionnaire/question/text-question/text-question.component';
import { DateQuestionComponent } from './pages/create-questionnaire/question/date-question/date-question.component';
import { TimeQuestionComponent } from './pages/create-questionnaire/question/time-question/time-question.component';

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
  declarations: [QuestionnaireComponent, CreateQuestionnaireComponent, QuestionComponent, ChoiceQuestionComponent, TextQuestionComponent, DateQuestionComponent, TimeQuestionComponent],
  imports: [CommonModule, QuestionnaireRoutingModule, ReactiveFormsModule, SharedModule, ...nebularModules, NbCheckboxModule, NbRadioModule, NbTooltipModule, NbDatepickerModule],
})
export class QuestionnaireModule {}
