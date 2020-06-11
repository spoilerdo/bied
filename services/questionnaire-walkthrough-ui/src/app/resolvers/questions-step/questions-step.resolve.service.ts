import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Questionnaire } from 'src/app/models/questionnaire/questionnaire.model';
import { ApiService } from 'src/app/services/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionsStepResolve implements Resolve<Questionnaire> {
  constructor(private api: ApiService, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<Questionnaire> {
    //TODO Make the API call here to save the questionnaire in between
    const questionnaire = await this.api.getQuestionnaire(route.params.questionnaireId);

    let sectionId = parseInt(route.queryParams.section);

    if (sectionId < 0 || sectionId > questionnaire.questionnaireSections.length - 1) {
      this.router.navigate(['questionnaire/' + questionnaire.id + '/introduction']);
    }

    questionnaire.currentQuestionnaireSectionId = sectionId + 1;

    return questionnaire;
  }
}
