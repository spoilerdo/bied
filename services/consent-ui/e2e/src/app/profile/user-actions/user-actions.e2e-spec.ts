import { by, element, browser } from 'protractor';
import { UserActions } from './user-actions.po';

describe('User actions', () => {
  let userActions: UserActions;

  beforeEach(async () => {
    userActions = new UserActions();
    await userActions.navigateTo();
    browser.waitForAngular();
  });

  it('should open confirmation modal on delete all consents clicked', async () =>{
    expect(userActions.getModal().isPresent()).toBeFalsy();
    
    userActions.getDeleteAllConsentsButton().click(); // This should open the confirmation modal
    
    expect(userActions.getModal().isPresent()).toBeTruthy();    
  });

  it('should open confirmation modal on delete all data clicked', () => {
    expect(userActions.getModal().isPresent()).toBeFalsy();

    userActions.getDeleteAllDataButton().click();

    expect(userActions.getModal().isPresent()).toBeTruthy();
  });
})