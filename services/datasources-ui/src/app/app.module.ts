import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbMenuModule,
  NbStepperModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbIconModule,
  NbCheckboxModule,
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { OverviewComponent } from "./components/overview/overview.component";
import { CreateComponent } from "./components/create/create.component";
import { DeleteDialogComponent } from "./components/delete-dialog/delete-dialog.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DetailStepComponent } from "./components/create/steps/detail-step/detail-step.component";
import { DataLoaderStepComponent } from "./components/create/steps/data-loader-step/data-loader-step.component";
import { CustomFieldsStepComponent } from "./components/create/steps/custom-fields-step/custom-fields-step.component";
import { SelectBranchStepComponent } from "./components/create/steps/select-branch-step/select-branch-step.component";
import { KeygenStepComponent } from "./components/create/steps/keygen-step/keygen-step.component";

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CreateComponent,
    DeleteDialogComponent,
    DetailStepComponent,
    DataLoaderStepComponent,
    CustomFieldsStepComponent,
    SelectBranchStepComponent,
    KeygenStepComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbStepperModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
