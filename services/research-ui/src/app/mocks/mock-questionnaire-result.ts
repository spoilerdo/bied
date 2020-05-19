import { QuestionnaireResult } from 'src/app/models/questionnaire-result';
import { QuestionType } from 'src/app/models/question-type';

export const questionnaireResultMock: QuestionnaireResult = {
  id: 1,
  name: 'TestQuestionnaire',
  description: 'this is a test description',
  questionAnswers: [
    {
      id: 1,
      userId: 'TestUser',
      name: 'testQuestionnaire',
      description: 'totally real questionnaire',
      questions: [
        {
          id: 1,
          type: QuestionType.DATE,
          answer: '2020-05-08',
          question: 'Is het al Weekend?',
        },
        {
          id: 2,
          type: QuestionType.LIKERT,
          answer: 'Sterk mee eens',
          question: 'Is het al Weekend?',
        },
        {
          id: 3,
          type: QuestionType.MULTIPLE_CHOICE,
          answer: 'A',
          question: 'Is het al Weekend?',
        },
        {
          id: 4,
          type: QuestionType.NUMERIC,
          answer: 69,
          question: 'Is het al Weekend?',
        },
        {
          id: 5,
          type: QuestionType.TEXT,
          answer: 'yes',
          question: 'Is het al Weekend?',
        },
        {
          id: 6,
          type: QuestionType.TIME,
          answer: '12:00',
          question: 'Is het al Weekend?',
        },
      ],
    },
    {
      id: 2,
      userId: 'TestUser2',
      name: 'testQuestionnaire',
      description: 'totally real questionnaire',
      questions: [
        {
          id: 1,
          type: QuestionType.DATE,
          answer: '2020-05-11',
          question: 'Is het al Weekend?',
        },
        {
          id: 2,
          type: QuestionType.LIKERT,
          answer: 'Sterk mee oneens',
          question: 'Is het al Weekend?',
        },
        {
          id: 3,
          type: QuestionType.MULTIPLE_CHOICE,
          answer: 'B',
          question: 'Is het al Weekend?',
        },
        {
          id: 4,
          type: QuestionType.NUMERIC,
          answer: 420,
          question: 'Is het al Weekend?',
        },
        {
          id: 5,
          type: QuestionType.TEXT,
          answer: 'no',
          question: 'Is het al Weekend?',
        },
        {
          id: 6,
          type: QuestionType.TIME,
          answer: '10:17',
          question: 'Is het al Weekend?',
        },
      ],
    },
  ],
};
