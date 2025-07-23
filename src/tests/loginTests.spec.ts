import {test} from "../fixtures/hooks-fixture";


test.skip("Login-Logout", async ({ loginPage, homePage, cryptoUtils }) => {
  const userid = cryptoUtils.decrypt(process.env.userid!); 
  const password = cryptoUtils.decrypt(process.env.password!);

  await loginPage.navigate();
  await loginPage.enterUsernameTB(userid);
  await loginPage.enterPasswordTB(password);
  await loginPage.clickLoginBTN();
  await homePage.verifyHomePageLBL();

});


test("CreateNewContact", async({ page, homePage, contactsPage, goToURL }) => {
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
});

test("Logout", async ({ homePage, goToURL, logout }) => {
  
  
});