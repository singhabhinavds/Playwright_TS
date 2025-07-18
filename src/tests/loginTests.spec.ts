import HomePage from "../pages/HomePage";
import ContactsPage from "../pages/ContactsPage";
import {test} from "../fixtures/crypto-fixture";

test.skip("Login-Logout", async ({ page, loginPage, homePage, cryptoUtils }) => {
  const userid = cryptoUtils.decrypt(process.env.userid!); 
  const password = cryptoUtils.decrypt(process.env.password!);

  await loginPage.navigate();
  await loginPage.enterUsernameTB(userid);
  await loginPage.enterPasswordTB(password);
  await loginPage.clickLoginBTN();
  await homePage.verifyHomePageLBL();

});


test("CreateNewContact", async({ page, homePage, contactsPage }) => {
  await homePage.navigate();
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

test("empty", async ({ page, homePage, cryptoUtils }) => {

});