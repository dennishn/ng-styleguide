import { NgStyleguidePage } from './app.po';

describe('ng-styleguide App', () => {
  let page: NgStyleguidePage;

  beforeEach(() => {
    page = new NgStyleguidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
