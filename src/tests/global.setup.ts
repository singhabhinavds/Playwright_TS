import {test} from "../fixtures/crypto-fixture";

test('Global Setup for Saved Authentication', async({page, loginPage, homePage, cryptoUtils}) => {
    await loginPage.navigate();
    await loginPage.enterUsernameTB(cryptoUtils.decrypt(process.env.userid!));
    await loginPage.enterPasswordTB(cryptoUtils.decrypt(process.env.password!));
    await loginPage.clickLoginBTN();
    await homePage.verifyHomePageLBL();
    await page.context().storageState({
        path: "./playwright/.auth/auth.json"
    })
})