import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { QuestionnaireResult } from 'src/app/models/questionnaire-result';
import { ApiService } from 'src/app/services/api/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireResultResolve implements Resolve<QuestionnaireResult> {
  constructor(private api: ApiService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<QuestionnaireResult> {
    const questionnaireResult = await this.api.getQuestionnaire(route.params.questionnaireId);

    return questionnaireResult;
  }
}
