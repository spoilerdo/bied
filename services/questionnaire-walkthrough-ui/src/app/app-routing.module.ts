import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsStepComponent } from './questionnaire-flow/questions-step/questions-step.component';
import { IntroductionStepComponent } from './questionnaire-flow/introduction-step/introduction-step.component';
import { ResultsStepComponent } from './questionnaire-flow/results-step/results-step.component';
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
