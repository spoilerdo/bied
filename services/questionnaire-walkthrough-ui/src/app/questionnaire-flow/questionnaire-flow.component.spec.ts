import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireFlowComponent } from './questionnaire-flow.component';

describe('QuestionnaireFlowComponent', () => {
  let component: QuestionnaireFlowComponent;
  let fixture: ComponentFixture<QuestionnaireFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
