// src/actions/settingsActions.ts
import { SET_THEME, UPDATE_THEME } from '../types/types';

export const updateTheme = () => {
  return {
    type: UPDATE_THEME,
    payload: null,
  };
};

export const setTheme = () => {
  return {
    type: SET_THEME,
    payload: null,
  };
};
