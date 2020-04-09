import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDialogComponent } from './remove-dialog.component';
import { NbDialogRef, NbCardModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
});
