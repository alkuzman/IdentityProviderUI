import { browser, by, element } from 'protractor';

export class IdentityProviderUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('idp-root h1')).getText();
  }
}
