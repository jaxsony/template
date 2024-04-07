import { ADMIN_PROFILE, ADMIN_USERS_LIST, ADMIN_USER_ADD, ADMIN_USER_CHANGE_STATUS, ADMIN_USER_DELETE, ADMIN_USER_EDIT, CHANGE_PASSWORD } from '../constants/api-path';
import httpClient from './interceptor';

/**
 * 
 * @returns User details
 */
export const getAdminProfile = (): Promise<any> => {
    return httpClient.get(ADMIN_PROFILE);
};

/**
 * @param {formData: FormData } params
 * @returns Promise<any>
 */
export const updateAdminProfile = (formData: FormData): Promise<any> => {
    return httpClient.post(ADMIN_PROFILE, formData);
};

/**
 * @param {page: number, limit: number, sortColumn: string|number, sortDirection: string } formData
 * @returns Promise<any>
 */
export const getAdminUsers = (formData: any): Promise<any> => {
    return httpClient.get(ADMIN_USERS_LIST, {
        params: {
            page: formData.page,
            pageSize: formData.limit,
            sort: formData.sort,
            search: formData.search
        }
    });
};

/**
 * @param {formData: any } params
 * @returns Promise<any>
 */
export const addAdminUser = (formData: any): Promise<any> => {
    return httpClient.post(ADMIN_USER_ADD, formData);
};

/**
 * @param {id: string formData: any } params
 * @returns Promise<any>
 */
export const updateAdminUser = (id: string, formData: any): Promise<any> => {
    return httpClient.put(ADMIN_USER_EDIT + id, formData);
};

/**
 * @param {id: string } params
 * @returns Promise<any>
 */
export const deleteAdminUser = (id: string | number): Promise<any> => {
    return httpClient.delete(ADMIN_USER_DELETE + id);
}

/**
 * @param {formData: FormData } params
 * @returns Promise<any>
 */
export const changePassword = (formData: any): Promise<any> => {
    return httpClient.post(CHANGE_PASSWORD, formData);
};


/**
 * @param {formData: {status: string} } params
 * @returns Promise<any>
 */
export const changeStatus = (id: string | number, formData: any): Promise<any> => {
    return httpClient.post(ADMIN_USER_CHANGE_STATUS + id, formData);
};