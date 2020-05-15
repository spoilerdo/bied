import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OverviewComponent } from "./components/overview/overview.component";
import { CreateComponent } from "./components/create/create.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "datasources/overview",
    pathMatch: "full",
  },
  {
    component: OverviewComponent,
    path: "datasources/overview",
  },
  {
    component: CreateComponent,
    path: "datasources/create",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
