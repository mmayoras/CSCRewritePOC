import {
  DISPLAY_MODAL,
  HIDE_MODAL,
} from './actionTypes';

export function displayPurchaseOrderModal() {
  return {
    type: DISPLAY_MODAL,
    modalName: 'PURCHASE_ORDER',
  };
}

export function displayBuyerIdModal() {
  return {
    type: DISPLAY_MODAL,
    modalName: 'BUYER_ID',
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
