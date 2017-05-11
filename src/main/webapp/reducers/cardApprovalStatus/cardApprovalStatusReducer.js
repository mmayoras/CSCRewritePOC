/* eslint-disable import/prefer-default-export */
import {
  UPDATE_CARD_APPROVAL_STATUS,
  CLEAR_CARD_APPROVAL_STATUS,
} from './actionTypes';

const defaultState = '';

export function cardApprovalStatusReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_CARD_APPROVAL_STATUS:
      return action.value;
    case CLEAR_CARD_APPROVAL_STATUS:
      return defaultState;
    default:
      return state;
  }
}
