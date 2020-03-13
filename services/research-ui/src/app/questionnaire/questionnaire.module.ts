import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import {NbCardModule, NbInputModule, NbLayoutModule, NbSelectModule} from '@nebular/theme';
import { CreateQuestionnaireComponent } from './pages/create-questionnaire/create-questionnaire.component';

@NgModule({
  declarations: [QuestionnaireComponent, CreateQuestionnaireComponent],
  imports: [CommonModule, QuestionnaireRoutingModule, NbLayoutModule, NbCardModule, NbInputModule, NbSelectModule],
})
export class QuestionnaireModule {}
