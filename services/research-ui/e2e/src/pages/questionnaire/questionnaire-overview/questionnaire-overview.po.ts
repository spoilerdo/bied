import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class CreateQuestionnaireOverviewPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/questionnaire/overview`) as Promise<unknown>;
  }

  getCards(): ElementArrayFinder {
    return element.all(by.className('questionnaire-card'));
  }

  getPageButtons(): ElementArrayFinder {
    return element.all(by.className('page-button-page'));
  }

  getPreviousButton(): ElementFinder {
    return element(by.id('page-button-previous'));
  }

  getNextButton(): ElementFinder {
    return element(by.id('page-button-next'));
  }

  getCardRemoveButton(card: ElementFinder): ElementFinder {
    return card.element(by.id('questionnaire-card-remove'));
  }

  getCardRenameButton(card: ElementFinder): ElementFinder {
    return card.element(by.id('questionnaire-card-rename'));
  }

  getRemoveDialog(): ElementFinder {
    return element(by.className('remove-dialog-card'));
  }

  getRenameDialog(): ElementFinder {
    return element(by.className('rename-dialog-card'));
  }
}
