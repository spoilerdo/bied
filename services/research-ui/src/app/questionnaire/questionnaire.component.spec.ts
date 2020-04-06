import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireComponent } from './questionnaire.component';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NbThemeModule.forRoot(), NbLayoutModule],
      declarations: [QuestionnaireComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
