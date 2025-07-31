import {test} from "../fixtures/hooks-fixture";



test.only("TC1 - Add New Contact", async({ page, homePage, contactsPage, goToURL, logout }) => {
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
