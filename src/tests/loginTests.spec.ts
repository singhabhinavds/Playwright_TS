import {test, expect} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test('has title', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.enterUsernameTB(process.env.username!);
  await loginPage.enterPasswordTB(process.env.password!);
  await loginPage.clickLoginBTN();
});