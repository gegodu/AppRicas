import { AngTwitterPage } from './app.po';

describe('ang-twitter App', () => {
  let page: AngTwitterPage;

  beforeEach(() => {
    page = new AngTwitterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
