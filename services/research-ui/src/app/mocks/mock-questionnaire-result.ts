import { QuestionnaireResult } from 'src/app/models/questionnaire-result';
import { QuestionType } from 'src/app/models/question-type';

export const questionnaireResult: QuestionnaireResult = {
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
          label: 'real label',
          type: QuestionType.DATE,
          description: 'real descriptiopn',
          data: '123456789',
          index: 1,
          required: false,
        },
        {
          id: 2,
          label: 'real label',
          type: QuestionType.LIKERT,
          description: 'real descriptiopn',
          data: '123456789',
          index: 2,
          required: false,
        },
        {
          id: 3,
          label: 'real label',
          type: QuestionType.MULTIPLE_CHOICE,
          description: 'real descriptiopn',
          data: '123456789',
          index: 3,
          required: false,
        },
        {
          id: 4,
          label: 'real label',
          type: QuestionType.NUMERIC,
          description: 'real descriptiopn',
          data: '123456789',
          index: 4,
          required: false,
        },
        {
          id: 5,
          label: 'real label',
          type: QuestionType.TEXT,
          description: 'real descriptiopn',
          data: '123456789',
          index: 5,
          required: false,
        },
        {
          id: 6,
          label: 'real label',
          type: QuestionType.TIME,
          description: 'real descriptiopn',
          data: '123456789',
          index: 6,
          required: false,
        },
      ],
    },
  ],
};
