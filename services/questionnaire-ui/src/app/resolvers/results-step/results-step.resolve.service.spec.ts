import { TestBed } from '@angular/core/testing';

import { ResultsStepResolve } from './results-step.resolve.service';

describe('ResultsStepResolve', () => {
  let service: ResultsStepResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsStepResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
