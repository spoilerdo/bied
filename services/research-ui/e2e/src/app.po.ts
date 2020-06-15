import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('#page-title .title.h5')).getText() as Promise<string>;
  }
}

export class FilterAndOrderComponent {
  navigateTo() {
    return browser.get('');
  }

  getFilterToggleButton() {
    return element(by.className('toggle'));
  }

  getSearchInput() {
    return element(by.id('searchbar'));
  }

  getSearchInformation() {
    return element(by.css('#search-information'));
  }
}
