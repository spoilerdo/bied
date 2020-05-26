import { browser } from 'protractor';
import { ConsentsListItem } from './consents-list-item.po';

describe('Consents list item', () => {
  let consentsListItem: ConsentsListItem;

  beforeEach(async () => {
    consentsListItem = new ConsentsListItem();
    await consentsListItem.navigateTo();
    browser.waitForAngular();
  });

  it('should open popover with more options', () => {
    expect(consentsListItem.getMoreOptionsButton()).toBeTruthy();
    expect(consentsListItem.getMoreOptionsPopover().isPresent()).toBeFalsy();

    consentsListItem.getMoreOptionsButton().click();    

    expect(consentsListItem.getMoreOptionsPopover().isPresent()).toBeTruthy();
  });
})