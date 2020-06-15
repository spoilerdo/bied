import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { Questionnaire } from '../../models/questionnaire/questionnaire.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireFlowResolve implements Resolve<Questionnaire> {
  constructor(private api: ApiService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<Questionnaire> {
    //TODO Make the API call here
    const questionnaire = await this.api.getQuestionnaire(route.params.questionnaireId);
    
    return questionnaire;
  }
}
