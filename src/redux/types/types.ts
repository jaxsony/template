// src/actions/types.ts
export const UPDATE_THEME = 'UPDATE_THEME';
export const SET_THEME = 'SET_THEME';

export const GLOBAL_SETTING = 'GLOBAL_SETTING';

// Define other action types as needed

// Define the Action type for Redux
export interface Action {
    type: string;
    payload?: any;
}

/**
 * Global settings object type declaration
 */
export interface GlobalSettingsType {
    DEFAULT_PAGE: number;
    DEFAULT_PAGE_SIZE: number;
    ENABLE_2FA_MAIL: boolean;
    ENABLE_FACEBOOK: boolean;
    ENABLE_GOOGLE: boolean;
    ENABLE_RECAPTCHA: boolean;
    RECAPTCHA_SITE_KEY: string;
}

/**
 * Global settings class declaration
 */
export class GlobalSettings implements GlobalSettingsType {
    DEFAULT_PAGE: number = 0;
    DEFAULT_PAGE_SIZE: number = 10;
    ENABLE_2FA_MAIL: boolean = false;
    ENABLE_FACEBOOK: boolean = false;
    ENABLE_GOOGLE: boolean = false;
    ENABLE_RECAPTCHA: boolean = false;
    RECAPTCHA_SITE_KEY: string = "";
}