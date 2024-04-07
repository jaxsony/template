import { CMS } from '../constants/api-path';
import httpClient from './interceptor';

/**
 * @param {page: number, limit: number, sortColumn: string|number, sortDirection: string } formData
 * @returns CMS List
 */
export const getCmsList = (formData: any): Promise<any> => {
    return httpClient.get(CMS, {
        params: {
            page: formData.page,
            limit: formData.limit,
            sortColumn: formData.sortColumn,
            sortDirection: formData.sortDirection
        }
    });
};

/**
 * @param {id: string } params
 * @returns CMS details
 */
export const getCMS = (id: string): Promise<any> => {
    return httpClient.get(CMS+'/'+id);
};

/**
 * @param {formData: FormData } params
 * @returns Promise<any>
 */
export const addCMS = (formData: any): Promise<any> => {
    return httpClient.post(CMS, formData);
};

/**
 * @param {id: string, formData: FormData } params
 * @returns Promise<any>
 */
export const updateCMS = (id: string, formData: any): Promise<any> => {
    return httpClient.put(CMS+'/'+id, formData);
};

/**
 * @param {id: number } params
 * @returns Delete success or error message
 */
export const deleteCMS = (id: number): Promise<any> => {
    return httpClient.delete(CMS+'/'+id);
};

/**
 * @param {id: string } params
 * @returns Publish CMS
 */
export const publishCMS = (id: string): Promise<any> => {
    return httpClient.patch(CMS+'/'+id+'/publish');
};
