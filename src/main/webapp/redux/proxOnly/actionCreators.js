import {
  SET_PROX_ONLY_TRUE,
  SET_PROX_ONLY_FALSE,
} from './actionTypes';

export function setProxOnlyTrue() {
  return {
    type: SET_PROX_ONLY_TRUE,
  };
}

export function setProxOnlyFalse() {
  return {
    type: SET_PROX_ONLY_FALSE,
  };
}
