import { AnhLePage } from './app.po';

describe('anh-le App', () => {
  let page: AnhLePage;

  beforeEach(() => {
    page = new AnhLePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
