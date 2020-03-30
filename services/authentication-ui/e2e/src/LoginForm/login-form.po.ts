import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('');
  }

  getFormInputUsername() {
    return element(
      by.xpath(
        '/html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-home/nb-card/nb-card-body/nb-layout-column[2]/form/input[1]',
      ),
    );
  }

  getFormInputPassword() {
    return element(
      by.xpath(
        '/html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-home/nb-card/nb-card-body/nb-layout-column[2]/form/input[2]',
      ),
    );
  }

  getFormInputSubmit() {
    return element(
      by.xpath(
        '/html/body/app-root/nb-layout/div/div/div/div/div/nb-layout-column/app-home/nb-card/nb-card-body/nb-layout-column[2]/form/input[3]',
      ),
    );
  }

  getFormErrorEmailRequired() {
    return element(by.id('FormErrorRequiredTextUsername'));
  }

  getFormErrorEmailValidation() {
    return element(by.id('FormErrorValidationTextUsername'));
  }

  getFormErrorPasswordRequired() {
    return element(by.id('FormErrorRequiredTextPassword'));
  }
}
