import { TestBed } from '@angular/core/testing';
import { QuestionsStepResolve } from './questions-step.resolve.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

describe('QuestionsStepResolve', () => {
  let service: QuestionsStepResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: {} }],
    });
    service = TestBed.inject(QuestionsStepResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
