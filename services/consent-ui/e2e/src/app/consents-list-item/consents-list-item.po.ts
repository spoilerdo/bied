import { by, element, browser } from 'protractor';

export class ConsentsListItem {
  navigateTo() {
    return browser.get('/consents')
  }

  getMoreOptionsButton() {
    return element(
      by.xpath(
        '/html/body/app-root/nb-layout/div[1]/div/div/div/div/nb-layout-column/app-consents/nb-card/app-consents-list/nb-list/nb-list-item[1]/app-consents-list-item/div/nb-icon'
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