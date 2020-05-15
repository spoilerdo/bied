import { by, element, browser } from 'protractor';

export class ConsentsListItem {
  navigateTo() {
    return browser.get('/consents')
  }

  getMoreOptionsButton() {
    return element(
      by.xpath(
        '//*[@id="consent-more-options"]'
      )
    )
  }

  getMoreOptionsPopover() {
    return element(
      by.xpath(
        '//*[@id="option-popover-list"]'
      )
    )
  }
}