import { TestBed } from '@angular/core/testing';
import { QuestionnaireResultResolve } from './questionnaire-builder.resolve.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

describe('QuestionnaireResultResolve', () => {
  let service: QuestionnaireResultResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: {} }],
    });
    service = TestBed.inject(QuestionnaireResultResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
