import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path=browser.baseUrl): Promise<unknown> {
    return browser.get(path) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return browser.getTitle() as Promise<string>;
  }
}
