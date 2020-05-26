import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModalComponent } from './confirmation-modal.component';
import { NbDialogRef } from '@nebular/theme';

describe('ConfirmationModalComponent', () => {
  let component: ConfirmationModalComponent;
  let fixture: ComponentFixture<ConfirmationModalComponent>;

  let dialogRefStub: any;

  beforeEach(async(() => {
    dialogRefStub = {
      close: () => true
    }

    TestBed.configureTestingModule({
      declarations: [ConfirmationModalComponent],
      providers: [{provide: NbDialogRef, useValue: dialogRefStub}]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ConfirmationModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dialog close', () => {
    const spy = spyOn(dialogRefStub, 'close');

    component.close();

    expect(spy).toHaveBeenCalledTimes(1);
  })
});
