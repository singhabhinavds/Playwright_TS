let CryptoJSUtil = require("crypto-js");


// Get the SALT from the system environment variable
const SALT = process.env.SALT || "defaultSet";

// Encryption function 

export function encrypt(text: string){
    const cipherText = CryptoJSUtil.AES.encrypt(text, SALT).toString();
    return cipherText;
}

// Decrytption function
export function decrypt(cipherText: string){
    const bytes = CryptoJSUtil.AEs.decrypt(cipherText, SALT);
    const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
    return originalText;
}