import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ConsentProvider } from '../providers/consent.provider';
import { DatasourceProvider } from '../providers/datasource.provider';
import { DatasourceMockProvider } from '../providers/datasource.provider.mock';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NbLayoutModule, NbCardModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserProvider } from '../providers/user.provider';
import { UserMockProvider } from '../providers/user.provider.mock';



@NgModule({
  declarations: [ProfileComponent, UserProfileComponent, UserActionsComponent, ConfirmationModalComponent, UserStatsComponent],
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
      useClass: ConsentProvider
    },
    {
      provide: DatasourceProvider,
      useClass: DatasourceMockProvider
    },
    {
      provide: UserProvider,
      useClass: UserMockProvider
    }
  ]
})
export class ProfileModule { }
