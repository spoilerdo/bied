import { by, element, browser } from 'protractor';

export class ConsentDetailHeader {
  navigateToConsentPage() {
    return browser.get('/consents/1')
  }

  getHeaderTitle() {
    return element(
      by.xpath(
        '/html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-consent/app-consent-details-header/nb-card/nb-card-header/h3'
      )
    )
  }
}