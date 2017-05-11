/* eslint-disable import/prefer-default-export */
import {
  DISPLAY_MODAL,
  HIDE_MODAL,
} from './actionTypes';

const defaultState = ''; // No modal in view

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return action.modalName;
    case HIDE_MODAL:
      return defaultState;
    default:
      return state;
  }
};
