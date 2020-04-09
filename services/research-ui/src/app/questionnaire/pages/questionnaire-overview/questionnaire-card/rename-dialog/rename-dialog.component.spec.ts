import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameDialogComponent } from './rename-dialog.component';
import { NbDialogRef, NbCardModule, NbInputModule, NbThemeModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RenameDialogComponent', () => {
  let component: RenameDialogComponent;
  let fixture: ComponentFixture<RenameDialogComponent>;

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
});
