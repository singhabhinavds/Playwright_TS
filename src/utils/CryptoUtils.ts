let CryptoJSUtil = require("crypto-js");


export default class CryptoUtils {

    // Get the SECRET_KEY from the system environment variable
    private SECRET_KEY: string;

    //constructor
    constructor() {
        if (process.env.SECRET_KEY) {
            this.SECRET_KEY = process.env.SECRET_KEY;
        } else {
            throw new Error("Please define SECRET_KEY before starting execution");
        }
    }

    // Encryption function 
    public encrypt(text: string) {
        const cipherText = CryptoJSUtil.AES.encrypt(text, this.SECRET_KEY).toString();
        console.log(cipherText);
        return cipherText;
    }

    // Decrytption function
    decrypt(cipherText: string) {
        const bytes = CryptoJSUtil.AES.decrypt(cipherText, this.SECRET_KEY);
        const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
        return originalText;
    }
}
