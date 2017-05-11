/* eslint-disable import/prefer-default-export */
import {
  UPDATE_LANGUAGE_CODE_EN_US,
  UPDATE_LANGUAGE_CODE_EN_CA,
  UPDATE_LANGUAGE_CODE_FR_CA,
} from './actionTypes';

export function languageCodeReducer(state = 'en_US', action) {
  switch (action.type) {
    case UPDATE_LANGUAGE_CODE_EN_US:
      return 'en_US';
    case UPDATE_LANGUAGE_CODE_EN_CA:
      return 'en_CA';
    case UPDATE_LANGUAGE_CODE_FR_CA:
      return 'fr_CA';
    default:
      return state;
  }
}
