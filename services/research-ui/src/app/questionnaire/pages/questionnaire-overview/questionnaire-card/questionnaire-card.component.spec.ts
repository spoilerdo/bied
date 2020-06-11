import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireCardComponent } from './questionnaire-card.component';

describe('QuestionnaireCardComponent', () => {
  let component: QuestionnaireCardComponent;
  let fixture: ComponentFixture<QuestionnaireCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
