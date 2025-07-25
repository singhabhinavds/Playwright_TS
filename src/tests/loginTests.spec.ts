import {test} from "../fixtures/crypto-fixture";
import loginData from "../data/loginTests.json";

/**
 * Run this set of Test Cases using below command: 
 *    npx playwright test --project="Tests without Global Setup"
 */

test("TC2-Incorrect-Password", async({ loginPage, cryptoUtils }) => {
  await loginPage.navigate();
  await loginPage.enterUsernameTB(cryptoUtils.decrypt(process.env.userid!));
  await loginPage.enterPasswordTB(loginData.invalid_password);
  await loginPage.clickLoginBTN();
  await loginPage.verifyLoginErrorMessageLBL();
});

test("TC3-Incorrect-Username", async({ loginPage, cryptoUtils }) => {
  await loginPage.navigate();
  await loginPage.enterUsernameTB(loginData.invalid_username);
  await loginPage.enterPasswordTB(cryptoUtils.decrypt(process.env.userid!));
  await loginPage.clickLoginBTN();
  await loginPage.verifyLoginErrorMessageLBL();
});

