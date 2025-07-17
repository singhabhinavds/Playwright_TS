import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ContactsPage from "../pages/ContactsPage";
import {test} from "../fixtures/crypto-fixture";

test("Login-Logout", async ({ page, cryptoUtils }) => {
  const userid = cryptoUtils.decrypt(process.env.userid!); 
  const password = cryptoUtils.decrypt(process.env.password!);
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.navigate();
  await loginPage.enterUsernameTB(userid);
  await loginPage.enterPasswordTB(password);
  await loginPage.clickLoginBTN();
  await homePage.verifyHomePageLBL();
  await homePage.Logout();
});


test("CreateNewContact", async({ page, cryptoUtils }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  const userid = cryptoUtils.decrypt(process.env.userid!); 
  const password = cryptoUtils.decrypt(process.env.password!);


  const contactsPage = new ContactsPage(page);
  await loginPage.navigate();
  await loginPage.enterUsernameTB(userid);
  await loginPage.enterPasswordTB(password);
  await loginPage.clickLoginBTN();
  await page.waitForLoadState();
  await homePage.verifyHomePageLBL();
  await homePage.clickContactsBTN();
  await contactsPage.verifyContactPageLBL();
  await page.waitForLoadState();
  await contactsPage.clickNewContactBTN();
  await page.waitForLoadState();
  await contactsPage.verifyNewContactFormBTN();
  await contactsPage.selectNewContactFormSalutationDD("Mr.");
  await contactsPage.enterNewContactFormFirstNameTB("Automation");
  await contactsPage.enterNewContactFormLastNameTB("Testing");
  await contactsPage.enterNewContactFormAccountNameTB("Practice");
  await contactsPage.clickNewContactFormSaveBTN();
  //await contactsPage.verifyNewConactAddedLBL();
  await homePage.Logout();
});

test("empty", async ({ page,cryptoUtils }) => {

});