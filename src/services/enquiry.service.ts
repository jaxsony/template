import { ENQUIRY} from '../constants/api-path';
import httpClient from './interceptor';

/**
 * @param {page: number, limit: number, sortColumn: string|number, sortDirection: string } formData
 * @returns ROLES List
 */
export const getEnquiryList = (formData: any): Promise<any> => {
    return httpClient.get(ENQUIRY, {
        params: {
            page: formData.page,
            limit: formData.limit,
            sortColumn: formData.sortColumn,
            sortDirection: formData.sortDirection
        }
    });
};




