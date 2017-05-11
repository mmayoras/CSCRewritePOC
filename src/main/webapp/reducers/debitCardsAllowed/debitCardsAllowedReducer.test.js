import {
  setDebitCardsAllowed,
  setDebitCardsDisallowed,
} from './actionCreators';
import { debitCardsAllowedReducer } from './debitCardsAllowedReducer';

test('an undefined state and an unmatched action returns true', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = debitCardsAllowedReducer(state, action);
  expect(value).toEqual(true);
});

test('an unmatched action returns the state unchanged', () => {
  const state = false;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = debitCardsAllowedReducer(state, action);
  expect(value).toEqual(state);
});

test('executing setDebitCardsAllowed sets debit cards allowed', () => {
  const state = false;
  const action = setDebitCardsAllowed();
  const value = debitCardsAllowedReducer(state, action);
  expect(value).toEqual(true);
});

test('executing setDebitCardsDisallowed sets debit cards disallowed', () => {
  const state = true;
  const action = setDebitCardsDisallowed();
  const value = debitCardsAllowedReducer(state, action);
  expect(value).toEqual(false);
});
