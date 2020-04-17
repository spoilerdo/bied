import { CreateQuestionnaireOverviewPage } from './questionnaire-overview.po';
import { browser, logging, by, ElementFinder, ElementArrayFinder } from 'protractor';

describe('Create questionnaire overview page', () => {
  let page: CreateQuestionnaireOverviewPage;

  beforeEach(() => {
    page = new CreateQuestionnaireOverviewPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });

  it('should display', () => {
    page.navigateTo();
    expect(page).toBeTruthy();
  });

  it('should have 20 questionnaires', () => {
    const cards = page.getCards();
    expect(cards.count()).toEqual(20);
  });

  it('should have 5 pages', () => {
    const pageButtons = page.getPageButtons();
    expect(pageButtons.count()).toEqual(5);
  });

  it('should have a next button', () => {
    const nextButton = page.getNextButton();
    expect(nextButton).toBeTruthy();
  });

  it('should not have a previous button', () => {
    const nextButton = page.getPreviousButton();
    expect(nextButton.isPresent()).toBeFalsy();
  });

  it('first card should have title "consequat in"', () => {
    const cards = page.getCards();
    const header = cards.first().element(by.className('questionnaire-card-header'));
    expect(header.getText()).toContain('consequat in');
  });

  describe('Questionnaire card', () => {
    describe('Remove questionnaire', () => {
      let cards: ElementArrayFinder;
      let card: ElementFinder;
      let removeButton: ElementFinder;
      let removeDialog: ElementFinder;
      let dialogRemoveButton: ElementFinder;
      let dialogInput: ElementFinder;

      it('should have a remove button', () => {
        cards = page.getCards();
        card = cards.first();
        removeButton = page.getCardRemoveButton(card);
        expect(removeButton.isPresent()).toBeTruthy();
      });

      it('should open the remove dialog on remove questionnaire click', async () => {
        await removeButton.click();
        removeDialog = page.getRemoveDialog();
        expect(removeDialog.isPresent()).toBeTruthy();
      });

      it('should have the remove button on the dialog disabled', () => {
        dialogRemoveButton = removeDialog.element(by.id('remove-dialog-remove'));
        expect(dialogRemoveButton.isEnabled()).toBeFalsy();
      });

      it('should have the remove button on the dialog disabled on wrong title enter', async () => {
        dialogInput = removeDialog.element(by.id('remove-dialog-input'));
        await dialogInput.sendKeys('test');
        expect(dialogInput.getAttribute('value')).toEqual('test');
        expect(dialogRemoveButton.isEnabled()).toBeFalsy();
      });

      it('should cancel the removal on click cancel button', async () => {
        dialogInput = removeDialog.element(by.id('remove-dialog-input'));
        const cancelButton = removeDialog.element(by.id('remove-dialog-cancel'));
        await cancelButton.click();
        expect(removeDialog.isPresent()).toBeFalsy();
      });

      it('should have the remove button on the dialog enabled on correct title enter', async () => {
        await removeButton.click();
        await dialogInput.sendKeys('consequat in');
        expect(dialogInput.getAttribute('value')).toEqual('consequat in');
        expect(dialogRemoveButton.isEnabled()).toBeTruthy();
      });

      it('should remove the questionnaire on remove questionnaire click', async () => {
        await dialogRemoveButton.click();
        expect(removeDialog.isPresent()).toBeFalsy();
        const cardTitle = cards.first().element(by.className('questionnaire-card-header'));
        expect(cardTitle.getText()).toContain('consequat dui');
      });
    });
  });
});
