import { APP_USERS_LIST, APP_USER_ADD, APP_USER_DELETE, APP_USER_EDIT } from '../constants/api-path';
import httpClient from './interceptor';



/**
 * @param {page: number, limit: number, sortColumn: string|number, sortDirection: string } formData
 * @returns Promise<any>
 */
export const getAppUsers = (formData: any): Promise<any> => {
    return httpClient.get(APP_USERS_LIST, {
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
export const addAppUser = (formData: any): Promise<any> => {
    return httpClient.post(APP_USER_ADD, formData);
};

/**
 * @param {id: string formData: any } params
 * @returns Promise<any>
 */
export const updateAppUser = (id: string, formData: any): Promise<any> => {
    return httpClient.put(APP_USER_EDIT + id, formData);
};

/**
 * @param {id: string } params
 * @returns Promise<any>
 */
export const deleteAppUser = (id: string | number): Promise<any> => {
    return httpClient.delete(APP_USER_DELETE + id);
}

/**
 * @param {formData: {status: string} } params
 * @returns Promise<any>
 */
export const changeStatus = (id: string | number, formData: any): Promise<any> => {
    return httpClient.patch(APP_USER_EDIT + id, formData);
};