let CryptoJSUtil = require("crypto-js");


// Get the SALT from the system environment variable
const SECRET_KEY = process.env.SECRET_KEY || "defaultSet";

// Encryption function 

export function encrypt(text: string){
    const cipherText = CryptoJSUtil.AES.encrypt(text, SECRET_KEY).toString();
    return cipherText;
}

// Decrytption function
export function decrypt(cipherText: string){
    const bytes = CryptoJSUtil.AEs.decrypt(cipherText, SECRET_KEY);
    const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
    return originalText;
}