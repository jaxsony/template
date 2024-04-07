// src/reducers/index.ts
import { combineReducers } from 'redux';
import themeReducer from './theme';
import settingReducer from './global-setting';
// Import other reducers as needed

const rootReducer = combineReducers({
    theme: themeReducer,
    settings: settingReducer
    // Add other reducers here
});

export default rootReducer;
