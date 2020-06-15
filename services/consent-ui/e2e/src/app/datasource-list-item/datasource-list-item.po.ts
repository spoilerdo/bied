import { by, element, browser } from 'protractor';

export class DatasourceListItem {
  navigateTo() {
    return browser.get('/researches');
  }

  getDatasourceListItem() {
    return element(
      by.xpath(
        '/html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-researches/app-researches-list/nb-list/nb-list-item/nb-card/app-research-list-item/div/div[2]/app-datasources-list/nb-list/nb-list-item/app-datasource-list-item'
      )
    )
  }

  getDatasourceLink() {
    return element(
      by.xpath(
        '/html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-researches/app-researches-list/nb-list/nb-list-item/nb-card/app-research-list-item/div/div[2]/app-datasources-list/nb-list/nb-list-item/app-datasource-list-item/div/a'
      )
    )
  }

  getUrl() {
    return browser.getCurrentUrl();
  }
}