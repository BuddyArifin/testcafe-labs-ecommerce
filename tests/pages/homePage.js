import { Selector } from 'testcafe';
import LoginPage from './loginPage';
import RegisterPage from './registerPage';

export default class HomePage {
    constructor(t) {

        // TestController
        this.testController = t;

        // Elements
        this.url              = 'https://www.bukalapak.com/';
        this.registerButton   = '.c-btn.c-btn--tiny.c-btn--block.u-pad-left--0.u-pad-right--0';
        this.loginButton      = '.c-btn.c-btn--ghost.c-btn--tiny.c-btn--block.js-dropdown-toggle';
        this.productLink      = 'https://www.bukalapak.com/p/motor-471/outwear-motor/jas-hujan/7msifj-jual-cover-motor-vario-dan-sejenisnya-mantel-selimut-bodycover-murah?from=list-product&funnel=omnisearch&dtm-section=top_promoted&product_owner=normal_seller&pos=0&cf=1&sort_origin=relevansi&search_sort_default=true&promoted=1';
        this.checkoutButton   = '.c-btn.c-btn--green.c-btn--large.c-btn--block.js-express-checkout-trigger.qa-pd-button-buy.qa-button-buy.js-track-atc-reco';
        this.searchTxtField   = ".c-omnisearch__label";
    }

    async navigatePage() {
      await this.testController.maximizeWindow();
      await this.testController.navigateTo(this.url);
    }

    async clickSignInButton(t) {
      await this.testController.click(this.signInBtn);
      return new LoginPage(t);
    }

    async clickRegisterButton(t) {
      await this.testController.click(this.registerButton).wait(5000);
      return new RegisterPage(t);
    }

    async verifyLoginAndRegisterButton() {
      await this.testController.expect(Selector(this.usernameTxtField).exists).ok();
      await this.testController.expect(Selector(this.passwordTxtField).exists).ok();
    }

    async verifyBackToHomepage() {
      // await this.testController.expect(Selector(this.searchTxtField).exists).ok();
    }

    async navigateToSpesificProduct() {
      await this.testController.navigateTo(this.productLink);
    }

    async clickBeliButton() {
      await this.testController.click(this.checkoutButton);
    }
}
