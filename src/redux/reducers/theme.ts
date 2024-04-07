import storage from '../../helpers/storage';
import { Action, SET_THEME, UPDATE_THEME } from '../types/types'; // Define your action type

interface ThemeState {
    theme: string;
    language: string;
    // Add other setting properties as needed
}

const initialState: ThemeState = {
    theme: storage.getData('theme') || 'light',
    language: 'en',
};

const themeReducer = (state = initialState, action: Action): ThemeState => {
    switch (action.type) {
        case UPDATE_THEME:
            const currentTheme = state.theme === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-bs-theme', currentTheme);
            storage.setData('theme', currentTheme);
            return {
                ...state,
                theme: currentTheme,
            }
        case SET_THEME:
            const savedTheme = storage.getData('theme');
            document.body.setAttribute('data-bs-theme', savedTheme ? savedTheme : state.theme);
            return {
                ...state,
                theme: savedTheme ? savedTheme : state.theme,
            }
        default:
            return state;
    }
};

export default themeReducer;