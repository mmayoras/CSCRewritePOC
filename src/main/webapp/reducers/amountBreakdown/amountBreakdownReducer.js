/* eslint-disable import/prefer-default-export */
import R from 'ramda';

import { UPDATE_AMOUNT_BREAKDOWN } from './actionTypes';

const defaultState = {
  subTotal: {
    name: 'Subtotal',
    amount: 0.0,
    color: 'BLACK',
    visible: true,
  },
  deposit: {
    name: 'Deposit',
    amount: 0.0,
    color: 'BLACK',
    visible: false,
  },
  orderTotal: {
    name: 'Order Total',
    amount: 0.0,
    color: 'BLACK',
    visible: true,
  },
  amountBreakdownList: [
  ],
};

export function amountBreakdownReducer(state = defaultState, action) {
  let updatedState = state;
  switch (action.type) {
    case UPDATE_AMOUNT_BREAKDOWN:
      // Update subTotal
      if (action.payload.subTotal) {
        updatedState.subTotal = R.assoc(
          'name',
          action.payload.subTotal.name || state.subTotal.name,
          updatedState.subTotal);
        updatedState.subTotal = R.assoc(
          'amount',
          action.payload.subTotal.amount !== undefined ?
            action.payload.subTotal.amount :
            state.subTotal.amount,
          updatedState.subTotal);
        updatedState.subTotal = R.assoc(
          'color',
          action.payload.subTotal.color || state.subTotal.color,
          updatedState.subTotal);
        updatedState.subTotal = R.assoc(
          'visible',
          action.payload.subTotal.visible !== undefined ?
            action.payload.subTotal.visible :
            state.subTotal.visible,
          updatedState.subTotal);
      }

      // Update deposit
      if (action.payload.deposit) {
        updatedState.deposit = R.assoc(
          'name',
          action.payload.deposit.name || state.deposit.name,
          updatedState.deposit);
        updatedState.deposit = R.assoc(
          'amount',
          action.payload.deposit.amount !== undefined ?
            action.payload.deposit.amount :
            state.deposit.amount,
          updatedState.deposit);
        updatedState.deposit = R.assoc(
          'color',
          action.payload.deposit.color || state.deposit.color,
          updatedState.deposit);
        updatedState.deposit = R.assoc(
          'visible',
          action.payload.deposit.visible !== undefined ?
            action.payload.deposit.visible :
            state.deposit.visible,
          updatedState.deposit);
      }

      // Update orderTotal
      if (action.payload.orderTotal) {
        updatedState.orderTotal = R.assoc(
          'name',
          action.payload.orderTotal.name || state.orderTotal.name,
          updatedState.orderTotal);
        updatedState.orderTotal = R.assoc(
          'amount',
          action.payload.orderTotal.amount !== undefined ?
            action.payload.orderTotal.amount :
            state.orderTotal.amount,
          updatedState.orderTotal);
        updatedState.orderTotal = R.assoc(
          'color',
          action.payload.orderTotal.color || state.orderTotal.color,
          updatedState.orderTotal);
        updatedState.orderTotal = R.assoc(
          'visible',
          action.payload.orderTotal.visible !== undefined ?
            action.payload.orderTotal.visible :
            state.orderTotal.visible,
          updatedState.orderTotal);
      }

      // Update breakdown list
      updatedState = R.assoc(
        'amountBreakdownList',
        action.payload.amountBreakdownList || state.amountBreakdownList,
        updatedState);

      return updatedState;
    default:
      return state;
  }
}
