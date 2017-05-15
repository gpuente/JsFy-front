import { JsfywebPage } from './app.po';

describe('jsfyweb App', () => {
  let page: JsfywebPage;

  beforeEach(() => {
    page = new JsfywebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
