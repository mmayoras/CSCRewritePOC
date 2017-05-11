import { transactionStatusReducer } from './transactionStatusReducer';

const defaultState = 'INCOMPLETE';

test('an undefined state and an unmatched action returns the default state', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
  };
  const value = transactionStatusReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = 'COMPLETE';
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
  };
  const value = transactionStatusReducer(state, action);
  expect(value).toEqual(state);
});

test('set the transaction state to complete returns an updated state with new status', () => {
  const state = defaultState;
  const action = {
    type: 'SET_TRANSACTION_COMPLETE',
  };
  const value = transactionStatusReducer(state, action);
  expect(value).toEqual('COMPLETE');
});

test('resetting the transaction state returns an updated state with the default value', () => {
  const state = 'COMPLETE';
  const action = {
    type: 'RESET_TRANSACTION_STATUS',
  };
  const value = transactionStatusReducer(state, action);
  expect(value).toEqual(defaultState);
});
