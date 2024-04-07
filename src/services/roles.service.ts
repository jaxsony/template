import { ROLES,ROLES_AND_PERMISSION , ROLES_LIST} from '../constants/api-path';
import httpClient from './interceptor';

/**
 * @param {page: number, limit: number, sortColumn: string|number, sortDirection: string } formData
 * @returns ROLES List
 */
export const getRolesList = (formData: any): Promise<any> => {
    return httpClient.get(ROLES, {
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
 * @returns ROLES details
 */
export const getROLES = (id: string): Promise<any> => {
    return httpClient.get(ROLES_LIST+'/'+id);
};



/**
 * 
 * @returns Permission  details
 */
export const getPermission = (): Promise<any> => {
    return httpClient.get(ROLES_AND_PERMISSION);
};
/**
 * @param {formData: FormData } params
 * @returns Promise<any>
 */
export const addROLES = (formData: any): Promise<any> => {
    return httpClient.post(ROLES, formData);
};

/**
 * @param {id: string, formData: FormData } params
 * @returns Promise<any>
 */
export const updateROLES = (id: string, formData: any): Promise<any> => {
    return httpClient.put(ROLES+'/'+id, formData);
};
 
