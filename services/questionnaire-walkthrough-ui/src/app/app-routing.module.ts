import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsStepComponent } from './questionnaire-flow/questions-step/questions-step.component';
import { IntroductionStepComponent } from './questionnaire-flow/introduction-step/introduction-step.component';
import { ResultsStepComponent } from './questionnaire-flow/results-step/results-step.component';

const routes: Routes = [
  {
    path: 'questionnaire/:questionnaireId',
    children: [
      {
        path: 'questions',
        component: QuestionsStepComponent,
      },
      {
        path: 'introduction',
        component: IntroductionStepComponent,
      },
      {
        path: 'results',
        component: ResultsStepComponent,
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
