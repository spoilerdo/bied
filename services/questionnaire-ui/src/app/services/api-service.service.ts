import { Injectable } from '@angular/core';
import { Questionnaire } from '../models/questionnaire/questionnaire.model';
import { mockQuestionnaire } from '../mock/MockQuestionnaire';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private sleep(time = 1000) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  public async getQuestionnaire(id: string): Promise<Questionnaire> {
    await this.sleep();
    let questionnaire = mockQuestionnaire;
    questionnaire.id = id;
    return questionnaire;
  }
}
