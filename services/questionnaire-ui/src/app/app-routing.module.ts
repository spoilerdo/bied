import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireFlowComponent } from './questionnaire-flow/questionnaire-flow.component';
import { QuestionnaireFlowResolve } from './resolvers/questionnaire-flow/questionnaire-flow.resolve.service';
import { QuestionsStepResolve } from './resolvers/questions-step/questions-step.resolve.service';
import { IntroductionStepResolve } from './resolvers/introduction-step/introduction-step.resolve.service';
import { ResultsStepResolve } from './resolvers/results-step/results-step.resolve.service';

const routes: Routes = [
  {
    path: 'questionnaire/:questionnaireId',
    children: [
      {
        path: 'questions',
        component: QuestionnaireFlowComponent,
        resolve: {
          questionnaire: QuestionsStepResolve,
        },
      },
      {
        path: 'introduction',
        component: QuestionnaireFlowComponent,
        resolve: {
          questionnaire: IntroductionStepResolve
        }
      },
      {
        path: 'results',
        component: QuestionnaireFlowComponent,
        resolve: {
          questionnaire: ResultsStepResolve
        }
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
