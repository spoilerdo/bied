import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.xpath('/html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-dashboard/h1')).getText() as Promise<string>;
  }
}
