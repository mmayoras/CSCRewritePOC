/* eslint-disable import/prefer-default-export */
import {
  UPDATE_COUNTRY_CODE_US,
  UPDATE_COUNTRY_CODE_CA,
} from './actionTypes';

export function countryCodeReducer(state = 'US', action) {
  switch (action.type) {
    case UPDATE_COUNTRY_CODE_US:
      return 'US';
    case UPDATE_COUNTRY_CODE_CA:
      return 'CA';
    default:
      return state;
  }
}
