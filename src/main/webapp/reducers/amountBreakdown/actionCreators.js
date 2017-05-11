/* eslint-disable import/prefer-default-export */

import { UPDATE_AMOUNT_BREAKDOWN } from './actionTypes';

export function updateAmountBreakdown(payload) {
  return {
    type: UPDATE_AMOUNT_BREAKDOWN,
    payload,
  };
}
