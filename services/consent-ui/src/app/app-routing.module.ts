import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsentsComponent } from './consents/consents.component';
import { ProfileComponent } from './profile/profile.component';
import { ResearchesComponent } from './researches/researches.component';

const routes: Routes = [
  {
    path: 'consents',
    component: ConsentsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'consents/:id',
    loadChildren: () =>
      import('./consent/consent.module').then((m) => m.ConsentModule),
  },
  {
    path: 'researches',
    component: ResearchesComponent,
  },
  { path: '', redirectTo: '/consents', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
