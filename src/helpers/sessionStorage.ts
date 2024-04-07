var CryptoJS = require("crypto-js");

const storagePrefix = process.env.REACT_APP_STORAGE_PREFIX;


/**
 * Storage management in app via session
 *
 * @type {{ setData: (key: string, data: any) => void; getData: (key: string) => any; }}
 */
const sessionStorage = {
    setData: (key: string, data: any) => {
        const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), storagePrefix);
        window.sessionStorage.setItem(key, cipherText);
    },
    getData: (key: string) => {
        const dataString = window.sessionStorage.getItem(key) ? window.sessionStorage.getItem(key) : '';
        if (dataString) {
            const bytes = CryptoJS.AES.decrypt(dataString, storagePrefix);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            if (decrypted) {
                return JSON.parse(decrypted);
            }
        }
    },
    delete: (key: string) => {
        window.sessionStorage.removeItem(key);
    }

};

export default sessionStorage;
