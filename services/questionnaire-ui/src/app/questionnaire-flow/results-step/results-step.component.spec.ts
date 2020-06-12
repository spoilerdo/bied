import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsStepComponent } from './results-step.component';
import { NbListModule } from '@nebular/theme';
import { mockQuestionnaire } from 'src/app/mock/MockQuestionnaire';
describe('ResultsStepComponent', () => {
  let component: ResultsStepComponent;
  let fixture: ComponentFixture<ResultsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsStepComponent],
      imports: [NbListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsStepComponent);
    component = fixture.componentInstance;
    component.questionnaire = mockQuestionnaire;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
