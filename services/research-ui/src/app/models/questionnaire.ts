export interface Questionnaire {
  // TODO add questions to questionnaire
  id: number;
  name: string;
  description: string;
}

export interface QuestionnairesResponse {
  totalItems: number;
  page: number;
  questionnaires: Questionnaire[];
}
