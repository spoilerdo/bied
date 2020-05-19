import { Injectable } from '@angular/core';
import { questionnaireResultMock } from 'src/app/mocks/mock-questionnaire-result';
import { QuestionnaireResult } from 'src/app/models/questionnaire-result';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  private sleep(time = 1000) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  public async getQuestionnaire(id: number): Promise<QuestionnaireResult> {
    //TODO Make the API call here, and fix this (┛◉Д◉)┛彡┻━┻
    await this.sleep();
    let questionnaire = questionnaireResultMock;
    questionnaire.id = id;
    return questionnaire;
  }
}
