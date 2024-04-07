import { GLOBAL_ENVIRONMENT } from '../constants/api-path';
import httpClient from './interceptor';

export const getMasterEnvironment = (): Promise<any> => {
    return httpClient.get(GLOBAL_ENVIRONMENT);
};