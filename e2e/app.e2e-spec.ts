import { NgpostsPage } from './app.po';

describe('ngposts App', () => {
  let page: NgpostsPage;

  beforeEach(() => {
    page = new NgpostsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
