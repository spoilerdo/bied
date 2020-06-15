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

  it('first card should have title "consequat in"', () => {
    const cards = page.getCards();
    const header = cards.first().element(by.className('questionnaire-card-header'));
    expect(header.getText()).toContain('consequat in');
  });

  describe('pagination', () => {
    let pageButtons: ElementArrayFinder;
    let nextButton: ElementFinder;
    let previousButton: ElementFinder;

    it('should be page 1', async () => {
      const url = await browser.getCurrentUrl();
      expect(url).toContain('page=1');
    });

    it('should have 5 pages', () => {
      pageButtons = page.getPageButtons();
      expect(pageButtons.count()).toEqual(5);
    });

    it('should have a next button', () => {
      nextButton = page.getNextButton();
      expect(nextButton).toBeTruthy();
    });

    it('should not have a previous button', () => {
      previousButton = page.getPreviousButton();
      expect(previousButton.isPresent()).toBeFalsy();
    });

    it('should have the first page highlighted', () => {
      expect(pageButtons.first().getAttribute('class')).toContain('appearance-filled');
    });

    it('should not have the other buttons highlighted', async () => {
      expect(pageButtons.first().getAttribute('class')).toContain('appearance-filled');
      for (let i = 1, len = await pageButtons.count(); i < len; i++) {
        expect(pageButtons.get(i).getAttribute('class')).toContain('appearance-outline');
      }
    });

    it('should change to page 5 on click for page 5', async () => {
      await pageButtons.last().click();
      const url = await browser.getCurrentUrl();
      expect(url).toContain('page=5');
    });

    it('should not have a next button', () => {
      expect(nextButton.isPresent()).toBeFalsy();
    });

    it('should have a next button', () => {
      expect(nextButton).toBeTruthy();
    });

    it('should have the fifth page highlighted', () => {
      expect(pageButtons.last().getAttribute('class')).toContain('appearance-filled');
    });

    it('should change back to the first page', async () => {
      await pageButtons.first().click();
      const url = await browser.getCurrentUrl();
      expect(url).toContain('page=1');
    });
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
        const cardTitle = card.element(by.className('questionnaire-card-header'));
        expect(cardTitle.getText()).toContain('consequat dui');
      });
    });

    describe('Rename questionnaire', () => {
      let cards: ElementArrayFinder;
      let card: ElementFinder;
      let renameButton: ElementFinder;
      let renameDialog: ElementFinder;
      let dialogRenameButton: ElementFinder;
      let dialogOldNameInput: ElementFinder;
      let dialogNewNameInput: ElementFinder;

      it('should have a rename button', () => {
        cards = page.getCards();
        card = cards.first();
        renameButton = page.getCardRenameButton(card);
        expect(renameButton.isPresent()).toBeTruthy();
      });

      it('should open the rename dialog on rename questionnaire click', async () => {
        await renameButton.click();
        renameDialog = page.getRenameDialog();
        expect(renameDialog.isPresent()).toBeTruthy();
      });

      it('should have the rename button on the dialog disabled', () => {
        dialogRenameButton = renameDialog.element(by.id('rename-dialog-rename'));
        expect(dialogRenameButton.isEnabled()).toBeFalsy();
      });

      it('should have the rename button on the dialog disabled on wrong old name', async () => {
        dialogOldNameInput = renameDialog.element(by.id('rename-dialog-old-name'));
        dialogNewNameInput = renameDialog.element(by.id('rename-dialog-new-name'));
        await dialogOldNameInput.sendKeys('test');
        await dialogNewNameInput.sendKeys('correct new name');
        expect(dialogOldNameInput.getAttribute('value')).toEqual('test');
        expect(dialogNewNameInput.getAttribute('value')).toEqual('correct new name');
        expect(dialogRenameButton.isEnabled()).toBeFalsy();
      });

      it('should cancel the rename on click cancel button', async () => {
        const cancelButton = renameDialog.element(by.id('rename-dialog-cancel'));
        await cancelButton.click();
        expect(renameDialog.isPresent()).toBeFalsy();
      });

      it('should have the rename button on the dialog enabled on correct old name and new name enter', async () => {
        await renameButton.click();
        await dialogOldNameInput.sendKeys('consequat dui');
        await dialogNewNameInput.sendKeys('testName');
        expect(dialogOldNameInput.getAttribute('value')).toEqual('consequat dui');
        expect(dialogNewNameInput.getAttribute('value')).toEqual('testName');
        expect(dialogRenameButton.isEnabled()).toBeTruthy();
      });

      it('should rename the questionnaire on rename questionnaire click', async () => {
        await dialogRenameButton.click();
        expect(renameDialog.isPresent()).toBeFalsy();
        const cardTitle = card.element(by.className('questionnaire-card-header'));
        expect(cardTitle.getText()).toContain('testName');
      });
    });

    describe('duplicate questionnaire', () => {
      let cards: ElementArrayFinder;
      let card: ElementFinder;
      let duplicateButton: ElementFinder;

      it('should have a duplicate button', () => {
        cards = page.getCards();
        card = cards.first();
        duplicateButton = page.getCardDuplicateButton(card);
        expect(duplicateButton.isPresent()).toBeTruthy();
      });

      it('should have duplicated the questionnaire on duplicate button click', async () => {
        await duplicateButton.click();
        page.getPageButtons().last().click();
        const url = await browser.getCurrentUrl();
        expect(url).toContain('page=5');

        const lastCardHeader = cards.last().element(by.className('questionnaire-card-header'));
        expect(lastCardHeader.getText()).toContain('testName');
      });

      it('should have a 6th page on next duplicate', async () => {
        await duplicateButton.click();

        const pageButtons = page.getPageButtons();
        expect(pageButtons.count()).toEqual(6);

        const nextButton = page.getNextButton();
        expect(nextButton).toBeTruthy();

        await nextButton.click();

        const url = await browser.getCurrentUrl();
        expect(url).toContain('page=6');

        expect(cards.count()).toEqual(1);

        const header = cards.first().element(by.className('questionnaire-card-header'));
        expect(header.getText()).toContain('in imperdiet et');
      });
    });
  });
});
