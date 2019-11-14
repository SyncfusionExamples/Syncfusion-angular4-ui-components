import { Angular4AppPage } from './app.po';

describe('angular4-app App', () => {
  let page: Angular4AppPage;

  beforeEach(() => {
    page = new Angular4AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
