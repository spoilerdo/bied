import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsStepComponent } from './questions-step.component';

describe('QuestionsStepComponent', () => {
  let component: QuestionsStepComponent;
  let fixture: ComponentFixture<QuestionsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
