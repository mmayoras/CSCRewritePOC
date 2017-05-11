import {
  IS_FULL_AUTH,
  IS_NOT_FULL_AUTH,
} from './actionTypes';

export function isFullAuth() {
  return {
    type: IS_FULL_AUTH,
  };
}

export function isNotFullAuth() {
  return {
    type: IS_NOT_FULL_AUTH,
  };
}
