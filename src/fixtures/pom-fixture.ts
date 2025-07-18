import { test as baseTest } from "@playwright/test";
import  LoginPage  from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ContactsPage from "../pages/ContactsPage";

type PomFixtureType = {
    loginPage : LoginPage;
    homePage: HomePage;
    contactsPage: ContactsPage;
}

export const test = baseTest.extend<PomFixtureType>({
    loginPage: async({page}, use) => {
        const loginPageObj = new LoginPage(page);
        use(loginPageObj);
    },

    homePage: async ({page}, use) => {
        const homePageObj = new HomePage(page);
        use(homePageObj);
    },

    contactsPage: async ({page}, use) => {
        const contactsPageObj = new ContactsPage(page);
        use(contactsPageObj);
    }
})