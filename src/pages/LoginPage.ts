import { Page } from "playwright/test";


export default class LoginPage{
    private readonly username: string;
    private readonly password: string;
    private readonly loginBTN: string;
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
        this.username = "#username";
        this.password = "#password";
        this.loginBTN = "#Login";
    }

    async navigate(){
        await this.page.goto("https://login.salesforce.com/?locale=au");
    }

    async enterUsernameTB(text: string){
        await this.page.locator(this.username).fill(text);
    }

    async enterPasswordTB(text: string){
        await this.page.locator(this.password).fill(text);
    }

    async clickLoginBTN(){
        await this.page.locator(this.loginBTN).click();
    }

}