import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDialogComponent } from './remove-dialog.component';
import { NbDialogRef, NbCardModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RemoveDialogComponent', () => {
  let component: RemoveDialogComponent;
  let fixture: ComponentFixture<RemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveDialogComponent],
      imports: [NbCardModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: NbDialogRef, useValue: {} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDialogComponent);
    component = fixture.componentInstance;
    component.questionnaire = {
      id: 1,
      name: 'test',
      description: 'this is a description',
    };
    fixture.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cancel button', () => {
    it('should call close()', () => {
      spyOn(component, 'close');
      fixture.debugElement.query(By.css('#remove-dialog-cancel')).triggerEventHandler('click', null);
      expect(component.close).toHaveBeenCalled();
    });
  });

  describe('rename button', () => {
    it('should call rename()', () => {
      spyOn(component, 'remove');
      fixture.debugElement.query(By.css('#remove-dialog-remove')).triggerEventHandler('click', null);
      expect(component.remove).toHaveBeenCalled();
    });

    it('should be disabled, empty values', () => {
      component.typedTitle = null;
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('#remove-dialog-remove').disabled).toBeTruthy();
    });

    it('should be disabled, wrong old title', () => {
      component.typedTitle = 'wrong title';
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('#remove-dialog-remove').disabled).toBeTruthy();
    });

    it('should be enabled', () => {
      component.typedTitle = 'test';
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('#remove-dialog-remove').disabled).toBeFalsy();
    });
  });
});
