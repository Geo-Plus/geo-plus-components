import { GeoPlusComponentsPage } from './app.po';

describe('geo-plus-components App', () => {
  let page: GeoPlusComponentsPage;

  beforeEach(() => {
    page = new GeoPlusComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
