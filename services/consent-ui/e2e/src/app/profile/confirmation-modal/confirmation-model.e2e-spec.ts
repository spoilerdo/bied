import { ConfirmationModal } from "./confirmation-modal.po"
import { browser, by } from 'protractor';

describe('Confirmation modal', () => {
  let confirmationModal: ConfirmationModal;

  beforeEach(async () => {
    confirmationModal = new ConfirmationModal();
    await confirmationModal.openModal();
    browser.waitForAngular();
  });

  it('should close modal on confirm', () => {
    // todo check if the modal is open
    expect(confirmationModal.getModal().element(by.css('nb-card'))).toBeTruthy();

    confirmationModal.getConfirmButton().click();

    //todo check if the modal was closed
    expect(confirmationModal.getModal().isPresent()).toBeFalsy();
  });

  it('should close modal on cancel', () => {
    // todo check if the modal is open
    expect(confirmationModal.getModal().element(by.css('nb-card'))).toBeTruthy();

    confirmationModal.getCancelButton().click();

    //todo check if the modal was closed
    expect(confirmationModal.getModal().isPresent()).toBeFalsy();
  })
})