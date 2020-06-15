import { TestBed } from '@angular/core/testing';

import { QuestionnaireFlowResolve } from './questionnaire-flow.resolve.service';

describe('QuestionnaireFlowResolveService', () => {
  let service: QuestionnaireFlowResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireFlowResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
