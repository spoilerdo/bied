import { TestBed } from '@angular/core/testing';

import { IntroductionStepResolve } from './introduction-step.resolve.service';

describe('IntroductionStepResolve', () => {
  let service: IntroductionStepResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroductionStepResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
