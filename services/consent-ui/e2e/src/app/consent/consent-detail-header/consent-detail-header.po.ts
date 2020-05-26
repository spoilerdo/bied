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

  getConsentSwitch() {
    return element(
      by.xpath(
        '//*[@id="toggle"]/label/div'
      )
    )
  }  

  getTimelineItemHeader(index: number) {
    return element(
      by.xpath(
        `/html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-consent/nb-card/nb-card-body/app-consent-timeline/mgl-timeline/mgl-timeline-entry[${index}]/div/div/mgl-timeline-entry-header`
      )
      // /html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-consent/nb-card/nb-card-body/app-consent-timeline/mgl-timeline/mgl-timeline-entry[1]/div/div/mgl-timeline-entry-header
    )
  }
}