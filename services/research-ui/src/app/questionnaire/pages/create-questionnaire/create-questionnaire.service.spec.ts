import { TestBed } from '@angular/core/testing';

import { CreateQuestionnaireService } from './create-questionnaire.service';

describe('CreateQuestionnaireService', () => {
  let service: CreateQuestionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateQuestionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
