import { expect, Locator, Page } from "playwright/test";


export default class HomePage{

    private readonly page: Page;

    private readonly serviceLBL: Locator;
    private readonly contactsBTN: Locator;
    private readonly profileBTN: Locator;
    private readonly logoutBTN: Locator;

    constructor(page: Page){
        this.page = page;
        this.serviceLBL = page.locator("div.oneAppNavContainer").getByText("Service");
        this.contactsBTN = page.locator("div.oneAppNavContainer").getByText("Contacts").first();
        this.profileBTN = page.getByRole("button", {name: "View profile", exact: true})
        this.logoutBTN = page.getByRole("link", {name: "Log Out", exact: true})
    }

    async navigate(){
        await this.page.goto("https://velocity-drive-7571.lightning.force.com/lightning/o/Case/list?filterName=AllOpenCases");
    }

    async verifyHomePageLBL(){
        await expect (this.serviceLBL).toBeVisible();
    }

    async clickContactsBTN(){
        await this.contactsBTN.click();
    }

    async Logout(){
        await this.profileBTN.click();
        await this.logoutBTN.click();
        await this.verifyLoginPageLBL();
    }

    async verifyLoginPageLBL(){
        await expect(this.page.locator("#username")).toBeVisible();
    }

  

}