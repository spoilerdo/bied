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
import { RemoveDialogComponent } from './pages/questionnaire-overview/questionnaire-card/remove-dialog/remove-dialog.component';
import { TruncatePipe } from './utils/TruncatePipe';
import { RenameDialogComponent } from './pages/questionnaire-overview/questionnaire-card/rename-dialog/rename-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from '../@core/pagination/pagination.component';

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
];

@NgModule({
  declarations: [
    QuestionnaireComponent,
    QuestionnaireOverviewComponent,
    QuestionnaireCardComponent,
    RemoveDialogComponent,
    RenameDialogComponent,
    TruncatePipe,
    RenameDialogComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebularModules,
    NgxPaginationModule,
  ],
})
export class QuestionnaireModule {}
