import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionnaireComponent } from './create-questionnaire.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';

describe('CreateQuestionnaireComponent', () => {
  let component: CreateQuestionnaireComponent;
  let fixture: ComponentFixture<CreateQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NbCardModule, NbIconModule, NbEvaIconsModule],
      declarations: [CreateQuestionnaireComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
