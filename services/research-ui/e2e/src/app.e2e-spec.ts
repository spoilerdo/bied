import { AppPage, FilterAndOrderComponent } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.getTitleText().then((e) => console.log('hoi', e));
    expect(page.getTitleText()).toEqual('Onderzoeken');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});

describe('filter component', () => {
  let filterAndOrderComponent: FilterAndOrderComponent;

  beforeEach(async () => {
    filterAndOrderComponent = new FilterAndOrderComponent();
    await filterAndOrderComponent.navigateTo();
    await browser.waitForAngular();
    jasmine.clock().install();
  });

  it('should open filter menu', () => {
    filterAndOrderComponent.getFilterToggleButton().click();

    jasmine.clock().tick(300);
    expect(filterAndOrderComponent.getSearchInput().isPresent()).toBeTruthy();
  });

  it('should start searching', () => {
    filterAndOrderComponent.getFilterToggleButton().click();
    jasmine.clock().tick(300);

    filterAndOrderComponent.getSearchInput().sendKeys('123');
    jasmine.clock().tick(300);
    expect(filterAndOrderComponent.getSearchInformation().isPresent()).toBeTruthy();
  });

  afterEach(async () => {
    jasmine.clock().uninstall();
  });
});
