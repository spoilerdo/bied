import { browser } from 'protractor';
import { DatasourceListItem } from './datasource-list-item.po';

describe('Datasource list item', () => {
  let datasourceListItem: DatasourceListItem;

  beforeEach(async () => {
    datasourceListItem = new DatasourceListItem();
    await datasourceListItem.navigateTo();
    browser.waitForAngular();
  })

  it('should have datasource list item', () => {
    expect(datasourceListItem.getDatasourceListItem()).toBeTruthy();
  });

  it('should redirect to datasource/consent page', async () => {
    await datasourceListItem.getDatasourceLink().click();

    expect(datasourceListItem.getUrl()).toContain("consents/")
  })
})