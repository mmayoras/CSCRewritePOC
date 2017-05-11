/* eslint-disable import/prefer-default-export */
import {
  SET_ACCESS_TOKEN,
} from './actionTypes';

export function setAccessToken(accessToken) {
  return {
    accessToken,
    type: SET_ACCESS_TOKEN,
  };
}
