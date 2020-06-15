import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';

@Injectable({
  providedIn: 'root',
})
export class IntroductionStepResolve implements Resolve<Questionnaire> {
  constructor(private api: ApiService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<Questionnaire> {
    //TODO Make the API call here
    const questionnaire = await this.api.getQuestionnaire(route.params.questionnaireId);

    questionnaire.currentQuestionnaireSectionId = 0;

    return questionnaire;
  }
}
