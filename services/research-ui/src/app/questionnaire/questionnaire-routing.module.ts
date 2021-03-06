import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireOverviewComponent } from './pages/questionnaire-overview/questionnaire-overview.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireComponent,
    children: [{ path: 'overview', component: QuestionnaireOverviewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireRoutingModule {}
