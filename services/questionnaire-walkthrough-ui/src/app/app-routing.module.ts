import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireFlowComponent } from './questionnaire-flow/questionnaire-flow.component';

const routes: Routes = [
  {
    path: 'questionnaire/:questionnaireId',
    children: [
      {
        path: 'questions',
        component: QuestionnaireFlowComponent,
      },
      {
        path: 'introduction',
        component: QuestionnaireFlowComponent,
      },
      {
        path: 'results',
        component: QuestionnaireFlowComponent,
      },
      {
        path: '**',
        redirectTo: 'introduction',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
