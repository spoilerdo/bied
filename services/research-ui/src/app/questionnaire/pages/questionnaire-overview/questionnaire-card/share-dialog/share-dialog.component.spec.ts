import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDialogComponent } from './share-dialog.component';

import {
  NbDialogRef,
  NbToastrService,
} from '@nebular/theme';

fdescribe('ShareDialogComponent', () => {
  let component: ShareDialogComponent;
  let fixture: ComponentFixture<ShareDialogComponent>;

  const mockToastService = {
    show: () => {
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShareDialogComponent],
      providers: [{ provide: NbDialogRef, useValue: {} }, { provide: NbToastrService, useValue: mockToastService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 0 emails', () => {
    expect(component.emails.length).toBe(0);
  });

  it('should add 1 mail', () => {
    component.newEmail = 'test@test.nl';
    component.addEmail();
    expect(component.emails.length).toBe(1);
  });

  it('should not add mail', () => {
    component.newEmail = 'test';
    component.addEmail();
    expect(component.emails.length).toBe(0);
  });

  it('should remove mail', () => {
    component.newEmail = 'test@test.nl';
    component.addEmail();
    expect(component.emails.length).toBe(1);
    component.newEmail = 'test@tester.nl';
    component.addEmail();
    expect(component.emails.length).toBe(2);
    component.removeEmail('test@tester.nl');
    expect(component.emails.length).toBe(1);
  });

  it('should be empty', () => {
    expect(component.newEmail).toBe('');
  });

  it('should validate wrong email returning false', () => {
    expect(component.validateEmail('test')).toBe(false);
  });

  it('should validate correct email returning true', () => {
    expect(component.validateEmail('test@test.nl')).toBe(true);
  });
});
