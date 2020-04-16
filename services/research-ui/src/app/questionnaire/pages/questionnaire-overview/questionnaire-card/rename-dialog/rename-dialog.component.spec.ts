import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameDialogComponent } from './rename-dialog.component';
import { NbDialogRef, NbCardModule, NbInputModule, NbThemeModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RenameDialogComponent', () => {
  let component: RenameDialogComponent;
  let fixture: ComponentFixture<RenameDialogComponent>;
  const mockDialogRef = {
    open: (res?: any) => {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenameDialogComponent],
      imports: [NbThemeModule.forRoot(), NbCardModule, NbInputModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: NbDialogRef, useValue: {} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameDialogComponent);
    component = fixture.componentInstance;
    component.questionnaire = {
      id: 1,
      name: 'test',
      description: 'this is a description',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cancel button', () => {
    it('should call close()', () => {
      spyOn(component, 'close');
      fixture.debugElement.query(By.css('#rename-dialog-cancel')).triggerEventHandler('click', null);
      expect(component.close).toHaveBeenCalled();
    });
  });

  describe('rename button', () => {
    it('should call rename()', () => {
      spyOn(component, 'rename');
      fixture.debugElement.query(By.css('#rename-dialog-rename')).triggerEventHandler('click', null);
      expect(component.rename).toHaveBeenCalled();
    });

    it('should be disabled, empty values', () => {
      component.oldTitle = null;
      component.newTitle = null;
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('#rename-dialog-rename').disabled).toBeTruthy();
    });

    it('should be disabled, short new name', () => {
      component.oldTitle = 'test';
      component.newTitle = 'new';
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('#rename-dialog-rename').disabled).toBeTruthy();
    });

    it('should be disabled, wrong old name', () => {
      component.oldTitle = 'tests';
      component.newTitle = 'newname';
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('#rename-dialog-rename').disabled).toBeTruthy();
    });
  });
});
