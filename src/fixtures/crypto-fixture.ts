import {test as baseTest} from "./pom-fixture";
import CryptoUtils from "../utils/CryptoUtils";


type CryptoFixtureType  = {
    cryptoUtils : CryptoUtils;
}

export const test = baseTest.extend<CryptoFixtureType>({
    cryptoUtils: async({}, use) => {
        use(new CryptoUtils());
    }

})