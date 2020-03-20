import { Injectable } from '@angular/core';
import { ANSWER_QUESTION, PREVIOUS_SECTION, NEXT_SECTION } from './questionnaire.actions';
import { QuestionnaireStore } from './questionnaire.store';
@Injectable({
  providedIn: 'root',
})
export class QuestionnaireReducers {
  constructor(private questionnaireStore: QuestionnaireStore) {}

  questionnaireReducer(action: any) {
    switch (action.type) {
      case ANSWER_QUESTION: {
        //TODO Api call met het antwoord
        let payload = action.payload;

        const currentState = this.questionnaireStore.questionnaireStore$.value;

        currentState.questionnaireSections[currentState.currentQuestionnaireSectionId].questions.find(
          q => q.id === payload.id,
        ).answer = payload.answer;

        this.questionnaireStore.questionnaireStore$.next(currentState);
        break;
      }
      case PREVIOUS_SECTION: {
        const currentState = this.questionnaireStore.questionnaireStore$.value;
        currentState.currentQuestionnaireSectionId--;
        this.questionnaireStore.questionnaireStore$.next(currentState);
      }
      case NEXT_SECTION: {
        const currentState = this.questionnaireStore.questionnaireStore$.value;
        currentState.currentQuestionnaireSectionId++;
        this.questionnaireStore.questionnaireStore$.next(currentState);
      }
    }
  }
}
