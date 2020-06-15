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
import { RemoveDialogComponent } from './pages/questionnaire-overview/questionnaire-card/remove-dialog/remove-dialog.component';
import { TruncatePipe } from './utils/TruncatePipe';
import { RenameDialogComponent } from './pages/questionnaire-overview/questionnaire-card/rename-dialog/rename-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuestionnairePaginatorComponent } from './pages/questionnaire-overview/questionnaire-paginator/questionnaire-paginator.component';
import { PaginationComponent } from './pages/questionnaire-overview/pagination/pagination.component';
import { CreateQuestionnaireComponent } from './pages/create-questionnaire/create-questionnaire.component';
import { QuestionGroupComponent } from './pages/create-questionnaire/question-group/question-group.component';
import { ActionBarComponent } from './pages/create-questionnaire/action-bar/action-bar.component';
import { QuestionComponent } from './pages/create-questionnaire/question-group/question/question.component';
import { LikertQuestionComponent } from './pages/create-questionnaire/question-group/question/likert-question/likert-question.component';
import { ChoiceQuestionComponent } from './pages/create-questionnaire/question-group/question/choice-question/choice-question.component';
import { TimeQuestionComponent } from './pages/create-questionnaire/question-group/question/time-question/time-question.component';
import { DateQuestionComponent } from './pages/create-questionnaire/question-group/question/date-question/date-question.component';
import { TextQuestionComponent } from './pages/create-questionnaire/question-group/question/text-question/text-question.component';
import { CoreModule } from '../@core/core.module';
import { CreateQuestionnaireService } from './pages/create-questionnaire/create-questionnaire.service';

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
    // Questionnaire overview
    QuestionnaireComponent,
    QuestionnaireOverviewComponent,
    QuestionnaireCardComponent,
    RemoveDialogComponent,
    RenameDialogComponent,
    TruncatePipe,
    RenameDialogComponent,
    PaginationComponent,
    QuestionnairePaginatorComponent,
    // Questionnaire create
    CreateQuestionnaireComponent,
    QuestionGroupComponent,
    ActionBarComponent,
    QuestionComponent,
    LikertQuestionComponent,
    ChoiceQuestionComponent,
    TimeQuestionComponent,
    DateQuestionComponent,
    TextQuestionComponent,
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CoreModule,
    ...nebularModules,
  ],
  providers: [CreateQuestionnaireService],
})
export class QuestionnaireModule {}
