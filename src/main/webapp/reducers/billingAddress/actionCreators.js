import {
  UPDATE_ADDRESS__LINE_1,
  UPDATE_ADDRESS__LINE_2,
  UPDATE_ADDRESS__CITY,
  UPDATE_ADDRESS__STATE,
  UPDATE_ADDRESS__ZIP_CODE,
  UPDATE_ADDRESS__COUNTRY_CODE,
} from './actionTypes';

export function updateAddressLine1(payload) {
  return {
    type: UPDATE_ADDRESS__LINE_1,
    payload,
  };
}

export function updateAddressLine2(payload) {
  return {
    type: UPDATE_ADDRESS__LINE_2,
    payload,
  };
}

export function updateAddressCity(payload) {
  return {
    type: UPDATE_ADDRESS__CITY,
    payload,
  };
}

export function updateAddressState(payload) {
  return {
    type: UPDATE_ADDRESS__STATE,
    payload,
  };
}

export function updateAddressZipCode(payload) {
  return {
    type: UPDATE_ADDRESS__ZIP_CODE,
    payload,
  };
}

export function updateAddressCountryCode(payload) {
  return {
    type: UPDATE_ADDRESS__COUNTRY_CODE,
    payload,
  };
}
