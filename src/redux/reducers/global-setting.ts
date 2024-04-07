import { Action, GLOBAL_SETTING, GlobalSettings } from '../types/types'; // Define your action type

/**
 * Represents the state for settings.
 * 
 * @interface SettingState
 */
interface SettingState {
    settings: GlobalSettings;
}

/**
 * Defining initial states
 */
const initialState: SettingState = {
    settings: new GlobalSettings(),
};

const settingReducer = (state = initialState, action: Action): SettingState => {
    switch (action.type) {
        case GLOBAL_SETTING:
            return {
                settings: action.payload,
            }
        default:
            return state;
    }
};

export default settingReducer;