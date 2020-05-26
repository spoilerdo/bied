import { by, element, browser } from 'protractor';

export class UserActions {
  navigateTo() {
    return browser.get('/profile')
  }

  getDeleteAllConsentsButton() {
    return element(
      by.xpath(
        '//*[@id="delete-all-consent-btn"]'
      )
    )
  }

  getDeleteAllDataButton() {
    return element(
      by.xpath(
        '//*[@id="delete-all-data-btn"]'
      )
    )
  }

  getModal() {
    return element(
      by.xpath('//*[@id="confirmation-modal"]')
    )
  }
}