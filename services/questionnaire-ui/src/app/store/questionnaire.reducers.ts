import { Injectable } from '@angular/core';
import { ANSWER_QUESTION, PREVIOUS_SECTION, NEXT_SECTION } from './questionnaire.actions';
import { QuestionnaireStore } from './questionnaire.store';
@Injectable({
  providedIn: 'root',
})
export class QuestionnaireReducers {
  constructor(private questionnaireStore: QuestionnaireStore) {}

  questionnaireReducer(action: any) {
    const payload = action.payload;

    const currentState = this.questionnaireStore.questionnaire;

    // console.log(currentState.currentQuestionnaireSectionId);

    currentState.questionnaireSections[currentState.currentQuestionnaireSectionId - 1].questions.find(
      (q) => q.id === payload.id,
    ).answer = payload.answer;

    this.questionnaireStore.questionnaire = currentState;
    // switch (action.type) {
    //   case ANSWER_QUESTION: {
    //     //TODO Api call met het antwoord
    //     let payload = action.payload;

    //     const currentState = this.questionnaireStore.questionnaireStore$.value.questionnaire;

    //     currentState.questionnaireSections[currentState.currentQuestionnaireSectionId].questions.find(
    //       q => q.id === payload.id,
    //     ).answer = payload.answer;

    //     this.questionnaireStore.questionnaireStore$.next({questionnaire: currentState, command: action.type});
    //     break;
    //   }
    //   case PREVIOUS_SECTION: {
    //     const currentState = this.questionnaireStore.questionnaireStore$.value.questionnaire;
    //     currentState.currentQuestionnaireSectionId--;
    //     this.questionnaireStore.questionnaireStore$.next({questionnaire: currentState, command: action.type});
    //     break;
    //   }
    //   case NEXT_SECTION: {
    //     const currentState = this.questionnaireStore.questionnaireStore$.value.questionnaire;
    //     currentState.currentQuestionnaireSectionId++;
    //     this.questionnaireStore.questionnaireStore$.next({questionnaire: currentState, command: action.type});
    //     break;
    //   }
    // }
  }
}
