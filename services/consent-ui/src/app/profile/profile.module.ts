import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ConsentProvider } from '../providers/consent.provider';
import { ConsentMockProvider } from '../providers/consent.provider.mock';
import { DatasourceProvider } from '../providers/datasource.provider';
import { DatasourceMockProvider } from '../providers/datasource.provider.mock';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';
import { UserActionsComponent } from './user-actions/user-actions.component';



@NgModule({
  declarations: [ProfileComponent, UserProfileComponent, UserActionsComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule
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
