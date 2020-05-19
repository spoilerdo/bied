import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbRadioModule,
  NbSelectModule,
  NbToggleModule,
  NbTooltipModule,
} from '@nebular/theme';
import { CreateQuestionnaireComponent } from './pages/create-questionnaire/create-questionnaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './pages/create-questionnaire/question/question.component';
import { ChoiceQuestionComponent } from './pages/create-questionnaire/question/choice-question/choice-question.component';
import { TextQuestionComponent } from './pages/create-questionnaire/question/text-question/text-question.component';
import { DateQuestionComponent } from './pages/create-questionnaire/question/date-question/date-question.component';
import { TimeQuestionComponent } from './pages/create-questionnaire/question/time-question/time-question.component';
import { LikertQuestionComponent } from './pages/create-questionnaire/question/likert-question/likert-question.component';
import { CoreModule } from '../@core/core.module';
import { ActionBarComponent } from './pages/create-questionnaire/action-bar/action-bar.component';

const nebularModules = [
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbIconModule,
  NbListModule,
  NbToggleModule,
  NbCheckboxModule,
  NbRadioModule,
  NbTooltipModule,
  NbDatepickerModule,
];

@NgModule({
  declarations: [
    QuestionnaireComponent,
    CreateQuestionnaireComponent,
    QuestionComponent,
    ChoiceQuestionComponent,
    TextQuestionComponent,
    DateQuestionComponent,
    TimeQuestionComponent,
    LikertQuestionComponent,
    ActionBarComponent,
  ],
  imports: [CommonModule, QuestionnaireRoutingModule, ReactiveFormsModule, CoreModule, ...nebularModules],
})
export class QuestionnaireModule {}
