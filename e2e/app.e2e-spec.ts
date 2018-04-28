import { TurnBarPage } from './app.po';

describe('turn-bar App', () => {
  let page: TurnBarPage;

  beforeEach(() => {
    page = new TurnBarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
