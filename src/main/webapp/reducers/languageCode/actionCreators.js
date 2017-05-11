import {
  UPDATE_LANGUAGE_CODE_EN_US,
  UPDATE_LANGUAGE_CODE_EN_CA,
  UPDATE_LANGUAGE_CODE_FR_CA,
} from './actionTypes';

export function updateLanguageCodeEnUs() {
  return {
    type: UPDATE_LANGUAGE_CODE_EN_US,
  };
}
export function updateLanguageCodeEnCa() {
  return {
    type: UPDATE_LANGUAGE_CODE_EN_CA,
  };
}
export function updateLanguageCodeFrCa() {
  return {
    type: UPDATE_LANGUAGE_CODE_FR_CA,
  };
}
