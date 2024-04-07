import { GLOBAL_SETTING } from "../types/types";

export const SetSettings = (payload: any) => {
    return {
        type: GLOBAL_SETTING,
        payload,
    };
};