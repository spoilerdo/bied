import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchListComponent } from './research-list/research-list.component';

const routes: Routes = [
  {
    path: 'researches',
    component: ResearchListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
