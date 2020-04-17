import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class CreateQuestionnairePage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/questionnaire/create`) as Promise<unknown>;
  }

  getTitleField(): ElementFinder {
    return element(by.id('questionnaire-title'));
  }

  getDescriptionField(): ElementFinder {
    return element(by.id('questionnaire-description'));
  }

  getAddQuestionButton(): ElementFinder {
    return element(by.id('add-question'));
  }

  getSaveQuestionButton(): ElementFinder {
    return element(by.id('save-questionnaire'));
  }

  getQuestions(): ElementArrayFinder {
    return element.all(by.css('app-question'));
  }

  getSelectField(): ElementFinder {
    return element(by.css('nb-select'));
  }

  getOptionList(): ElementArrayFinder {
    return element.all(by.css('nb-options'));
  }
}
