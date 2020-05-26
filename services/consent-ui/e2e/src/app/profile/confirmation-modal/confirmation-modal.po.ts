import { by, element, browser } from 'protractor';

export class ConfirmationModal {
  async openModal() {
    await browser.get('/profile');
    return this.getDeleteAllConsentButton().click();
  }

  getDeleteAllConsentButton() {
    return element(
      by.xpath(
        '//*[@id="delete-all-consent-btn"]'
      )
    )
  }

  getConfirmButton() {
    return element(
      by.xpath(
        '//*[@id="confirm-btn"]'
      )
    )
  }


  getCancelButton() {
    return element(
      by.xpath(
        '//*[@id="cancel-btn"]'
      )
    )
  }

  getModal() {
    return element(
      by.css('nb-layout nb-popover')
    )
  }
}