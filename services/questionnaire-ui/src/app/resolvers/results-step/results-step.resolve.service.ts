import { Injectable } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class ResultsStepResolve implements Resolve<Questionnaire> {
  constructor(private api: ApiService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<Questionnaire> {
    //TODO Make the API call here to submit the questionnaire
    const questionnaire = await this.api.getQuestionnaire(route.params.questionnaireId);

    questionnaire.currentQuestionnaireSectionId = questionnaire.questionnaireSections.length+1;

    console.log(questionnaire);

    return questionnaire;
  }
}
