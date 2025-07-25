import {test as baseTest} from "./crypto-fixture";



type HooksFixtureType  = {
    goToURL: any;
    logout: any;
}

export const test = baseTest.extend<HooksFixtureType>({
    goToURL: async({homePage}: any, use: () => any) => {
       await homePage.navigate();
       await homePage.verifyHomePageLBL();
       await use();
    },
    logout: async({homePage}: any, use: () => any) =>{
        await use();
        await homePage.Logout();
    }

})