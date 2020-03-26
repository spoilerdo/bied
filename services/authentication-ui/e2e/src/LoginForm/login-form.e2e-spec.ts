import { browser, protractor } from 'protractor';
import { LoginPage } from './login-form.po';

describe('Login form', () => {
  let loginPage: LoginPage;

  const origFn = browser.driver.controlFlow().execute;

  //  Slow down tests
  browser.driver.controlFlow().execute = function() {
    const args = arguments;

    origFn.call(browser.driver.controlFlow(), function() {
      return protractor.promise.delayed(1);
    });

    return origFn.apply(browser.driver.controlFlow(), args);
  };

  beforeEach(async () => {
    loginPage = new LoginPage();
    await loginPage.navigateTo();
    await browser.waitForAngular();
  });

  it('should give all errors', async () => {
    loginPage.getFormInputSubmit().click();
    expect(loginPage.getFormErrorEmailRequired().isPresent()).toBeTruthy();
    expect(loginPage.getFormErrorPasswordRequired().isPresent()).toBeTruthy();
  });

  it('should give no errors', async () => {
    loginPage.getFormInputUsername().sendKeys('hoi@hoi.nl');
    loginPage.getFormInputPassword().sendKeys('password');
    loginPage.getFormInputSubmit().click();
    expect(loginPage.getFormErrorEmailRequired().isPresent()).toBeFalsy();
    expect(loginPage.getFormErrorPasswordRequired().isPresent()).toBeFalsy();
  });

  it('should give only the password error', async () => {
    loginPage.getFormInputUsername().sendKeys('hoi@hoi.nl');
    loginPage.getFormInputSubmit().click();
    expect(loginPage.getFormErrorEmailRequired().isPresent()).toBeFalsy();
    expect(loginPage.getFormErrorPasswordRequired().isPresent()).toBeTruthy();
  });

  it('should give only the email required error', async () => {
    loginPage.getFormInputPassword().sendKeys('hoi@hoi.nl');
    loginPage.getFormInputSubmit().click();
    expect(loginPage.getFormErrorEmailRequired().isPresent()).toBeTruthy();
    expect(loginPage.getFormErrorEmailValidation().isPresent()).toBeFalsy();
    expect(loginPage.getFormErrorPasswordRequired().isPresent()).toBeFalsy();
  });

  it('should give only the email validation error', async () => {
    loginPage.getFormInputUsername().sendKeys('hoi');
    loginPage.getFormInputPassword().sendKeys('hoi');
    loginPage.getFormInputSubmit().click();

    expect(loginPage.getFormErrorEmailRequired().isPresent()).toBeFalsy();
    expect(loginPage.getFormErrorEmailValidation().isPresent()).toBeTruthy();
    expect(loginPage.getFormErrorPasswordRequired().isPresent()).toBeFalsy();
  });
});
