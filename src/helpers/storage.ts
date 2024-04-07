var CryptoJS = require("crypto-js");

const storagePrefix = process.env.REACT_APP_STORAGE_PREFIX;


/**
 * Storage management in app via localStorage
 *
 * @type {{ getToken: () => any; setToken: (token: string) => void; getRefreshToken: () => any; setRefreshToken: (token: string) => void; clearToken: () => void; setData: (key: string, data: any) => void; getData: (key: string) => any; }}
 */
const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  getRefreshToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}refreshToken`) as string);
  },
  setRefreshToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}refreshToken`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  setData: (key: string, data: any) => {
    const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), storagePrefix);
    window.localStorage.setItem(key, cipherText);
  },
  getData: (key: string) => {
    const dataString = window.localStorage.getItem(key) ? window.localStorage.getItem(key) : '';
    if (dataString) {
      const bytes = CryptoJS.AES.decrypt(dataString, storagePrefix);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decrypted);
    }

  }

};

export default storage;
