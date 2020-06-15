import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentComponent } from './consent.component';


const routes: Routes = [
  {
    path: '',
    component: ConsentComponent,
    children: [{path: 'edit', component: ConsentComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentRoutingModule { }
