import { AppPage } from '.././app.po';
import { browser, logging, element, by } from 'protractor';

fdescribe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain quill-view', async () => {
    await page.navigateTo('questionnaire/e7afg3b2/introduction');
    let quillView = element(by.name('introduction-message'));

    let text = await quillView.getText();

    expect(text).toContain('Vragenlijst eenzaamheid');
  });

  it('should contain quill-view', async () => {
    await page.navigateTo('questionnaire/e7afg3b2/introduction');
    let beginnenButton = element(by.name('beginnen-button'));
    beginnenButton.click();

    let questionsstep = element(by.name('questions-step'));

    expect(questionsstep).toBeTruthy();
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});
