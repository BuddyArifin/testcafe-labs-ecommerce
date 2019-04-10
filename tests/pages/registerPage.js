import { Selector } from 'testcafe';
import HomePage from './homePage';

export default class RegisterPage {
  constructor(t) {
    this.testController = t;

    this.url              = 'https://www.bukalapak.com/register?from=header';
    this.title            = "img[src='/images/logo/single_174x28_0_red_03052016.png']";
    this.fullName         = '#user_name';
    this.phoneNumber      = '#email_or_phone';
    this.gender           = '#user_gender_laki-laki';
    this.username         = '#user_username';
    this.password         = '#user_password';
    this.confirmPassword  = '#user_password_confirmation';
    this.disclamer        = '#user_agreement';
    this.registerButton   = "button[type='submit']";
    this.inlineErrors     = '.c-fld__error';
  }

  async navigateToPage() {
    await this.testController.navigateToPage(this.url);
  }

  async inputFullName(fullName) {
    await this.testController.typeText(this.fullName, fullName);
  }

  async inputPhoneNumber(phoneNumber) {
    await this.testController.typeText(this.phoneNumber, phoneNumber);
  }
  
  async chooseGender() {
    await this.testController.click(this.gender)
  }
  
  async inputUsername(username) {
    await this.testController.typeText(this.username, username);
  }
  
  async inputPassword(password) {
    await this.testController.typeText(this.password, password);
  }
  
  async inputConfirmPassword(confirmPassword) {
    await this.testController.typeText(this.confirmPassword, confirmPassword);
  } 
  
  async clickDisclamer() {
    await this.testController.click(this.disclamer);
  }

  async clickRegisterButton(t) {
    await this.testController.doubleClick(this.registerButton);
    return new HomePage(t);
  }

  async verifyAllInlineError() {
    this.clickRegisterButton();
    const inlineMessages = Selector(this.inlineErrors);
    const inlineSize = await inlineMessages.count;

    for(let i=0; i < inlineSize; i += 1) {
      await this.testController.expect(inlineMessages.nth(i).exists).ok();
    }
  }
}