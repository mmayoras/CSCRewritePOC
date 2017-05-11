import {
  UPDATE_COUNTRY_CODE_CA,
  UPDATE_COUNTRY_CODE_US,
} from './actionTypes';

export function updateCountryCodeUS() {
  return {
    type: UPDATE_COUNTRY_CODE_US,
  };
}

export function updateCountryCodeCA() {
  return {
    type: UPDATE_COUNTRY_CODE_CA,
  };
}
