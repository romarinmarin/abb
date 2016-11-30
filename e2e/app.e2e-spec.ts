import { Ang2AbbPage } from './app.po';

describe('ang2-abb App', function() {
  let page: Ang2AbbPage;

  beforeEach(() => {
    page = new Ang2AbbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
