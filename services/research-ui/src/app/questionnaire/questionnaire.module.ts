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
} from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionnaireOverviewComponent } from './pages/questionnaire-overview/questionnaire-overview.component';
import { QuestionnaireCardComponent } from './pages/questionnaire-overview/questionnaire-card/questionnaire-card.component';
import { QuestionnairePaginatorComponent } from './pages/questionnaire-overview/questionnaire-paginator/questionnaire-paginator.component';
import { RemoveDialogComponent } from './pages/questionnaire-overview/questionnaire-card/remove-dialog/remove-dialog.component';
import { TruncatePipe } from './utils/TruncatePipe';

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
];

@NgModule({
  declarations: [
    QuestionnaireComponent,
    QuestionnaireOverviewComponent,
    QuestionnaireCardComponent,
    QuestionnairePaginatorComponent,
    RemoveDialogComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebularModules,
    NbCheckboxModule,
    NbRadioModule,
  ],
})
export class QuestionnaireModule {}