import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsStepComponent } from './results-step.component';

describe('ResultsStepComponent', () => {
  let component: ResultsStepComponent;
  let fixture: ComponentFixture<ResultsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
