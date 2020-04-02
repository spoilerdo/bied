import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbRadioModule,
  NbSelectModule,
  NbToggleModule,
  NbContextMenuModule,
  NbActionsModule,
  NbTooltipModule,
  NbDatepickerModule,
} from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionnaireOverviewComponent } from './pages/questionnaire-overview/questionnaire-overview.component';
import { QuestionnaireCardComponent } from './pages/questionnaire-overview/questionnaire-card/questionnaire-card.component';
import { QuestionnairePaginatorComponent } from './pages/questionnaire-overview/questionnaire-paginator/questionnaire-paginator.component';
import { RemoveDialogComponent } from './pages/questionnaire-overview/questionnaire-card/remove-dialog/remove-dialog.component';
import { TruncatePipe } from './utils/TruncatePipe';
import { RenameDialogComponent } from './pages/questionnaire-overview/questionnaire-card/rename-dialog/rename-dialog.component';
import { CreateQuestionnaireComponent } from './pages/create-questionnaire/create-questionnaire.component';
import { QuestionComponent } from './pages/create-questionnaire/question/question.component';
import { ChoiceQuestionComponent } from './pages/create-questionnaire/question/choice-question/choice-question.component';
import { DateQuestionComponent } from './pages/create-questionnaire/question/date-question/date-question.component';
import { LikertQuestionComponent } from './pages/create-questionnaire/question/likert-question/likert-question.component';
import { TextQuestionComponent } from './pages/create-questionnaire/question/text-question/text-question.component';
import { TimeQuestionComponent } from './pages/create-questionnaire/question/time-question/time-question.component';
import { SharedModule } from '../shared/shared.module';

const nebularModules = [
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbIconModule,
  NbListModule,
  NbToggleModule,
  NbContextMenuModule,
  NbActionsModule,
  NbTooltipModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
];

@NgModule({
  declarations: [
    QuestionnaireComponent,
    QuestionnaireOverviewComponent,
    QuestionnaireCardComponent,
    QuestionnairePaginatorComponent,
    CreateQuestionnaireComponent,
    RemoveDialogComponent,
    RenameDialogComponent,
    TruncatePipe,
    RenameDialogComponent,
    QuestionComponent,
    ChoiceQuestionComponent,
    DateQuestionComponent,
    LikertQuestionComponent,
    TextQuestionComponent,
    TimeQuestionComponent,
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ...nebularModules,
  ],
})
export class QuestionnaireModule {}
