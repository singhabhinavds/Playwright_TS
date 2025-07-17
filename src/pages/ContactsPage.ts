import { expect, Locator, Page } from "playwright/test";


export default class ContactsPage{

    private readonly page: Page;

    private readonly newContactBTN: Locator;
    private readonly contactsPageLBL: Locator;
   

    // new contact form locators 
    private readonly newContactFormLBL: Locator;
    private readonly newContactFormSalutationDD: Locator;
    private readonly newContactFormFirstNameTB: Locator;
    private readonly newContactFormLastNameTB: Locator;
    private readonly newContactFormAccountNameTB: Locator;
    private readonly newContactFormSaveBTN: Locator;

    constructor(page: Page){
        this.page = page;
        this.newContactBTN = page.locator("div[title='New']");
        this.contactsPageLBL = page.getByRole("heading", { name: 'Contacts', exact: true });
        this.newContactFormLBL = page.getByRole("heading", {name: 'New Contact', exact: true});
        this.newContactFormSalutationDD = page.getByRole("combobox", {name: 'Salutation', exact: true});
        this.newContactFormFirstNameTB = page.getByRole("textbox", {name: 'First Name', exact: true});
        this.newContactFormLastNameTB = page.getByRole("textbox", {name: '*Last Name', exact: true});
        this.newContactFormAccountNameTB = page.getByRole("combobox", {name: '*Account Name', exact: true});
        this.newContactFormSaveBTN = page.getByRole("button", {name: "Save", exact: true});
    }

    async navigate(){
        await this.page.goto("/o/Contact/list?filterName=AllContacts");
    }

    async verifyContactPageLBL(){
        await expect(this.contactsPageLBL).toBeVisible();
    }

    async clickNewContactBTN(){
        await this.newContactBTN.click();
    }

    async verifyNewContactFormBTN(){
        await expect(this.newContactFormLBL).toBeVisible();
    }

    async selectNewContactFormSalutationDD(text: string){
        await this.newContactFormSalutationDD.click();
        await this.page.getByRole("listbox").getByText(text).click();
    }

    async enterNewContactFormFirstNameTB(text: string){
        await this.newContactFormFirstNameTB.fill(text);
    }

    async enterNewContactFormLastNameTB(text: string){
        await this.newContactFormLastNameTB.fill(text);
    }

    async enterNewContactFormAccountNameTB(text: string){
        await this.newContactFormAccountNameTB.click();
        await this.page.getByRole("listbox").getByText(text).click();
    }

    async clickNewContactFormSaveBTN(){
        await this.newContactFormSaveBTN.click();
    }

  

}