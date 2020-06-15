import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResearchDetailsComponent } from './research-details/research-details.component';

const routes: Routes = [
  {
    path: 'researches/:id',
    component: ResearchDetailsComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('./questionnaire/questionnaire.module').then((m) => m.QuestionnaireModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
