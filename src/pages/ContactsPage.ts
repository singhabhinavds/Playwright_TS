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
    private readonly newContactFormTitleTB: Locator;
    private readonly newContactFormReportsToDD: Locator;
    private readonly newContactFormDescriptionTB: Locator;
    private readonly newContactFormPhoneTB: Locator;
    private readonly newContactFormEmailTB: Locator;
    private readonly newContactFormMailingCountryDD: Locator;
    private readonly newContactFormMailingStreetTB: Locator;
    private readonly newContactFormMailingCityTB: Locator;
    private readonly newContactFormMailingStateDD: Locator;
    private readonly newContactFormMailingZipTB: Locator;

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
        this.newContactFormTitleTB = page.getByRole("textbox", {name: 'Title', exact: true});
        this.newContactFormReportsToDD = page.getByRole("combobox", {name: 'Reports To', exact: true});
        this.newContactFormDescriptionTB = page.getByRole("textbox", {name: 'Description', exact: true});
        this.newContactFormPhoneTB = page.getByRole("textbox", {name: 'Phone', exact: true});
        this.newContactFormEmailTB = page.getByRole("textbox", {name: 'Email', exact: true});
        this.newContactFormMailingCountryDD = page.getByRole("combobox", {name: 'Mailing Country', exact: true});
        this.newContactFormMailingStreetTB = page.getByRole("textbox", {name: 'Mailing Street', exact: true});
        this.newContactFormMailingCityTB = page.getByRole("textbox", {name: 'Mailing City', exact: true});
        this.newContactFormMailingStateDD = page.getByRole("combobox", {name: 'Mailing State/Province', exact: true});
        this.newContactFormMailingZipTB = page.getByRole("textbox", {name: 'Mailing Zip/Postal Code', exact: true});
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

    async enterNewContactFormTitleTB(text: string){
        await this.newContactFormTitleTB.fill(text);
    }

    async enterNewContactFormReportsToDD(text: string){
        await this.newContactFormReportsToDD.click();
        await this.page.getByRole("listbox").getByText(text).click();
    }
  
    async enterNewContactFormDescriptionTB(text: string){
        await this.newContactFormDescriptionTB.fill(text);
    }

    async enterNewContactFormPhoneTB(text: string){
        await this.newContactFormPhoneTB.fill(text);
    }

    async enterNewContactFormEmailTB(text: string){
        await this.newContactFormEmailTB.fill(text);
    }

    async enterNewContactFormMailingCountryDD(text: string){
        await this.newContactFormMailingCountryDD.click();
        await this.page.getByRole("listbox").getByText(text).click();
    }

    async enterNewContactFormMailingStreetTB(text: string){
        await this.newContactFormMailingStreetTB.fill(text);
    }

    async enterNewContactFormMailingCityTB(text: string){
        await this.newContactFormMailingCityTB.fill(text);
    }

    async enterNewContactFormMailingStateTB(text: string){
        await this.newContactFormMailingStateDD.click();
        await this.page.getByRole("listbox").getByText(text).click();
    }

    async enterNewContactFormMailingZipTB(text: string){
        await this.newContactFormMailingZipTB.fill(text);
    }


}