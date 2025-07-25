import { Locator, Page, expect } from "playwright/test";


export default class LoginPage{
    private readonly page: Page;

    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginBTN: Locator;
    private readonly loginErrorMessageLBL: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = this.page.locator("#username");
        this.password = this.page.locator("#password");
        this.loginBTN = this.page.locator("#Login");
        this.loginErrorMessageLBL = this.page.getByText("Error: Please check your username and password. If you still can't log in, contact your Salesforce administrator.");
    }

    async navigate(){
        await this.page.goto("https://login.salesforce.com/?locale=au");
    }

    async enterUsernameTB(text: string){
        await this.username.fill(text);
    }

    async enterPasswordTB(text: string){
        await this.password.fill(text);
    }

    async clickLoginBTN(){
        await this.loginBTN.click();
    }

    async verifyLoginErrorMessageLBL(){
        await expect(this.loginErrorMessageLBL).toBeVisible();
    }

}