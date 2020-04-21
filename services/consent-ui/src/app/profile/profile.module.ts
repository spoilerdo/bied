import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ConsentProvider } from '../providers/consent.provider';
import { ConsentMockProvider } from '../providers/consent.provider.mock';
import { DatasourceProvider } from '../providers/datasource.provider';
import { DatasourceMockProvider } from '../providers/datasource.provider.mock';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NbLayoutModule, NbCardModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';



@NgModule({
  declarations: [ProfileComponent, UserProfileComponent, UserActionsComponent, ConfirmationModalComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule
  ],
  providers: [
    {
      provide: ConsentProvider,
      useClass: ConsentMockProvider
    },
    {
      provide: DatasourceProvider,
      useClass: DatasourceMockProvider
    }
  ]
})
export class ProfileModule { }
