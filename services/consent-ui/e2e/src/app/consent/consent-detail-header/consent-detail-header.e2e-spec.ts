import { ConsentDetailHeader } from "./consent-detail-header.po"
import { browser } from 'protractor';

describe('Consent Detail Header', () => {
  let consentDetailHeader: ConsentDetailHeader;

  beforeEach(async () => {
    consentDetailHeader = new ConsentDetailHeader();
    await consentDetailHeader.navigateToConsentPage();
    browser.waitForAngular();
  });

  it('should switch consent when switch clicked', () => {
    expect(consentDetailHeader.getTimelineItemHeader(1).getText()).toEqual('Consent given');

    consentDetailHeader.getConsentSwitch().click();

    expect(consentDetailHeader.getTimelineItemHeader(1).getText()).toEqual('Consent withdrawn');
  });
})