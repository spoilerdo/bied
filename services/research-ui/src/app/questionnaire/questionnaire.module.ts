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
  NbSelectModule,
} from '@nebular/theme';
import { CreateQuestionnaireComponent } from './pages/create-questionnaire/create-questionnaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './pages/create-questionnaire/question/question.component';
import {SharedModule} from "../shared/shared.module";

const nebularModules = [NbLayoutModule, NbCardModule, NbInputModule, NbSelectModule, NbButtonModule, NbIconModule];

@NgModule({
  declarations: [QuestionnaireComponent, CreateQuestionnaireComponent, QuestionComponent],
  imports: [CommonModule, QuestionnaireRoutingModule, ReactiveFormsModule, ...nebularModules, SharedModule],
})
export class QuestionnaireModule {}
