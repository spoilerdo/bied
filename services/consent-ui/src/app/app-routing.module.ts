import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsentsComponent } from './consents/consents.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'consents',
    component: ConsentsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'consents/:id',
    loadChildren: () => import("./consent/consent.module").then(m => m.ConsentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
