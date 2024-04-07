import { FORGOT_PASSWORD, LOGIN, REFRESH_TOKENS_API, RESET_PASSWORD, VERIFY_2FA } from '../constants/api-path';
import httpClient from './interceptor';

/**
 * @param {email: string, password:string} formData
 * @returns Promise<any>
 */
export const loginEmailPassword = (formData: any): Promise<any> => {
    return httpClient.post(LOGIN, formData);
};

/**
 * @param {email: string} formData
 * @returns Promise<any>
 */
export const forgotPassword = (formData: any): Promise<any> => {
    return httpClient.post(FORGOT_PASSWORD, formData);
};

/**
 * @param {token: string, password: string } formData
 * @returns Promise<any>
 */
export const resetPassword = (formData: any): Promise<any> => {
    return httpClient.post(RESET_PASSWORD, formData);
};

/**
 * @param {token: string, email: string } formData
 * @returns Promise<any>
 */
export const verify2FA = (formData: any): Promise<any> => {
    return httpClient.post(VERIFY_2FA, formData);
};

/**
 * @param {refreshToken: string} formData
 * @returns Promise<any>
 */
export const refreshToken = (formData: any): Promise<any> => {
    return httpClient.post(REFRESH_TOKENS_API, formData);
};