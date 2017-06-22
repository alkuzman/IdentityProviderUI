import { IdentityProviderUiPage } from './app.po';

describe('identity-provider-ui App', () => {
  let page: IdentityProviderUiPage;

  beforeEach(() => {
    page = new IdentityProviderUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to idp!!');
  });
});
