import { refreshToken } from "../services/auth.service";
import storage from "./storage";

/**
 * Extends the global `Window` interface to include the `grecaptcha` property.
 * 
 * @interface Window
 */
declare global {
    interface Window {
        grecaptcha: any;
    }
}

export const getToken = () => {

}

/**
 * 
 * @param {string} SITE_KEY
 * @returns {string} token
 */
export const getCaptchaToken = async (SITE_KEY: string): Promise<any> => {
    let token = null
    await window.grecaptcha?.execute(SITE_KEY, { action: "submit" })
        .then((res: string) => {
            token = res;
        })
    return token;
}

/**
 * Asynchronously refreshes the user's authentication token.
 *
 * @async
 * @function refreshTokenAPI
 * @returns {Promise<boolean>} A promise that resolves to true if the token is refreshed successfully, and false otherwise.
 *
 * @throws {Error} If there's an issue with the token refresh process.
 *
 * @example
 */
export const refreshTokenAPI = async () => {
    if (storage.getToken()) {
        const token = storage.getRefreshToken();
        await refreshToken({ refreshToken: token }).then((response: any) => {
            const { token } = response.data;
            storage.setToken(token.access.token);
            storage.setRefreshToken(token.refresh.token);
            return true;
        }).catch((error: any) => {
            console.log("Invalid Session", error);
            return false;
        })
    }
}