import { CreateQuestionnairePage } from './create-questionnaire.po';
import { browser, protractor } from 'protractor';

describe('Create questionnaire page', () => {
  let page: CreateQuestionnairePage;

  beforeEach(() => {
    page = new CreateQuestionnairePage();
  });

  it('should have an empty title field', () => {
    page.navigateTo();
    const titleField = page.getTitleField();
    expect(titleField.isDisplayed()).toBeTruthy();
    expect(titleField.getAttribute('value')).toEqual('');
  });

  it('should have an empty description field', () => {
    const descriptionField = page.getDescriptionField();
    expect(descriptionField.isDisplayed()).toBeTruthy();
    expect(descriptionField.getAttribute('value')).toEqual('');
  });

  describe('Add question', () => {
    let addQuestionButton;

    beforeEach(() => {
      addQuestionButton = page.getAddQuestionButton();
    });

    it('should have a add question button', () => {
      expect(addQuestionButton).toBeTruthy();
    });

    it('should add a new question on add question button click', async () => {
      const questions = page.getQuestions();

      await addQuestionButton.click();
      expect(questions.count()).toBe(1);
      await addQuestionButton.click();
      expect(questions.count()).toBe(2);
    });
  });

  describe('Question', () => {
    it('should select the choice question', async () => {
      const question = page.getQuestions().first();
      const options = page.getOptionList();
      expect(options.isPresent()).toBeFalsy();
      await question.click();
      console.log(await options.count());
      expect(options.isPresent()).toBeTruthy();
    });
  });

  describe('Save questionnaire', () => {
    let saveQuestionnaireButton;

    beforeEach(() => {
      saveQuestionnaireButton = page.getSaveQuestionButton();
    });

    it('should have a save questionnaire button', () => {
      expect(saveQuestionnaireButton).toBeTruthy();
    });
  });
});
