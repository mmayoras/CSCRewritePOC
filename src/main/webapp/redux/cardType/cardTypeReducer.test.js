import {
  setCardTypeDebit,
  setCardTypeCredit,
  resetCardType,
} from './actionCreators';
import { cardTypeReducer } from './cardTypeReducer';

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = cardTypeReducer(state, action);
  expect(value).toEqual('');
});

test('an unmatched action returns the state unchanged', () => {
  const state = '';
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = cardTypeReducer(state, action);
  expect(value).toEqual(state);
});

test('set card type DEBIT is called, returns updated card type as DEBIT', () => {
  const state = '';
  const action = setCardTypeDebit();
  const value = cardTypeReducer(state, action);
  expect(value).toEqual('DEBIT');
});

test('set card type CREDIT is called, returns updated card type as CREDIT', () => {
  const state = '';
  const action = setCardTypeCredit();
  const value = cardTypeReducer(state, action);
  expect(value).toEqual('CREDIT');
});

test('reset card type is called, returns updated card type as blank', () => {
  const state = '';
  const action = resetCardType();
  const value = cardTypeReducer(state, action);
  expect(value).toEqual('');
});
