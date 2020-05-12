import { ConsentDetailHeader } from "./consent-detail-header.po"
import { browser } from 'protractor';

describe('Consent Detail Header', () => {
  let consentDetailHeader: ConsentDetailHeader;

  beforeEach(async () => {
    consentDetailHeader = new ConsentDetailHeader();
    await consentDetailHeader.navigateToConsentPage();
    browser.waitForAngular();
  });

  it('should have consent name as title', () => {
    expect(consentDetailHeader.getHeaderTitle().getText()).toEqual('Twitter data');
  })
})