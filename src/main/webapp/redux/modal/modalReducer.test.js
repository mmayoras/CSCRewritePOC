import {
  displayPurchaseOrderModal,
  hideModal,
} from './actionCreators';
import { modalReducer } from './modalReducer';

test('an undefined state and an unmatched action returns false', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = modalReducer(state, action);
  expect(value).toEqual('');
});

test('an unmatched action returns the state unchanged', () => {
  const state = '';
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = modalReducer(state, action);
  expect(value).toEqual(state);
});

test('displayPurchaseOrderModal causes the modalReducer to return PURCHASE_ORDER', () => {
  const state = '';
  const action = displayPurchaseOrderModal();
  const value = modalReducer(state, action);
  expect(value).toEqual('PURCHASE_ORDER');
});

test('hideModal causes the modalReducer to return an empty string', () => {
  const state = 'TEST';
  const action = hideModal();
  const value = modalReducer(state, action);
  expect(value).toEqual('');
});
