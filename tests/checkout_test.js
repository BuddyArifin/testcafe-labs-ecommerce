import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

const randomstring = require('randomstring');
const { user } = require('./testData/userData');
const txt = randomstring.generate({ length:3, charset: 'zurz'});

fixture `Sample Automation BL`;

test('Checkout After Login', async t => {
  const homePage = new HomePage(t);
  
  await homePage.navigatePage();
  const registerPage = await homePage.clickRegisterButton(t);

  // Register User
  await registerPage.verifyAllInlineError();
  await registerPage.inputFullName(`${user.fullName} ${txt}`);
  await registerPage.inputPhoneNumber(`${txt}${user.phoneNumber}`);
  await registerPage.inputUsername(`${txt}${user.username}`);
  await registerPage.chooseGender();
  await registerPage.inputPassword(user.password);
  await registerPage.inputConfirmPassword(user.password);
  await registerPage.clickDisclamer();
  await registerPage.clickRegisterButton(t);

  // Checkout
  await homePage.verifyBackToHomepage();
  await homePage.navigateToSpesificProduct();
  await homePage.clickBeliButton();
});

