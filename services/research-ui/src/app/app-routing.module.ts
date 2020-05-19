import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireBuilderComponent } from './questionnaire-builder/questionnaire-builder/questionnaire-builder.component';
import { QuestionnaireResultResolve } from './resolvers/questionniare-builder/questionnaire-builder.resolve.service';

const routes: Routes = [
  {
    path: 'questionnaire/:questionnaireId',
    children: [
      {
        path: 'result',
        component: QuestionnaireBuilderComponent,
        resolve: {
          questionnaireResult: QuestionnaireResultResolve,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
