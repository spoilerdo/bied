import { Question } from '../question/question.model';
import { QuestionnaireSection } from '../questionnaire-section/questionnaire-section.model';

export class Questionnaire {
  id: string;
  title: string;
  description: string;
  currentQuestionnaireSectionId: number;
  questionnaireSections: QuestionnaireSection[];
  startButtonText: string;
  endingMessage: string;
}
