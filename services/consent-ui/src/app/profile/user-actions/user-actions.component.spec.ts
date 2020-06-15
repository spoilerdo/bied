import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionsComponent } from './user-actions.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { DatasourceProvider } from 'src/app/providers/datasource.provider';
import { ConsentProvider } from 'src/app/providers/consent.provider';
import { of } from 'rxjs';

describe('UserActionsComponent', () => {
  let component: UserActionsComponent;
  let fixture: ComponentFixture<UserActionsComponent>;

  let dialogServiceStub, toastrSeviceStub, datasourceProviderStub, consentProviderStub: any;

  beforeEach(async(() => {
    const onClose = of(true);
    dialogServiceStub = {
      open: () => Object({ onClose })
    }

    toastrSeviceStub = {
      show: () => true
    }

    datasourceProviderStub = {
      deleteAllData: () => true
    }

    consentProviderStub = {
      deleteAllConsent: () => true
    }

    TestBed.configureTestingModule({
      declarations: [UserActionsComponent],
      providers: [
        { provide: NbDialogService, useValue: dialogServiceStub },
        { provide: NbToastrService, useValue: toastrSeviceStub },
        { provide: DatasourceProvider, useValue: datasourceProviderStub },
        { provide: ConsentProvider, useValue: consentProviderStub },
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete all consent', () => {
    const spyOnClose = spyOn(dialogServiceStub, 'open').and.returnValue((Object({ onClose: of(true) })));
    const spyConsentProvider = spyOn(consentProviderStub, 'deleteAllConsent');
    const spyToastrService = spyOn(toastrSeviceStub, 'show');

    component.deleteAllConsent();

    expect(spyOnClose).toHaveBeenCalledTimes(1);
    expect(spyConsentProvider).toHaveBeenCalledTimes(1);
    expect(spyToastrService).toHaveBeenCalledTimes(1);
  })

  it('should delete all data', () => {
    const spyOnClose = spyOn(dialogServiceStub, 'open').and.returnValue((Object({ onClose: of(true) })));
    const spyDatasouceProvider = spyOn(datasourceProviderStub, 'deleteAllData');
    const spyToastrService = spyOn(toastrSeviceStub, 'show');

    component.deleteAllData();

    expect(spyOnClose).toHaveBeenCalledTimes(1);
    expect(spyDatasouceProvider).toHaveBeenCalledTimes(1);
    expect(spyToastrService).toHaveBeenCalledTimes(2);
  })
});
