import {
  setPrepaidCardsAllowed,
  setPrepaidCardsDisallowed,
} from './actionCreators';
import { prepaidCardsAllowedReducer } from './prepaidCardsAllowedReducer';

test('an undefined state and an unmatched action returns true', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = prepaidCardsAllowedReducer(state, action);
  expect(value).toEqual(true);
});

test('an unmatched action returns the state unchanged', () => {
  const state = false;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = prepaidCardsAllowedReducer(state, action);
  expect(value).toEqual(state);
});

test('executing setPrepaidCardsAllowed sets prepaid cards allowed', () => {
  const state = false;
  const action = setPrepaidCardsAllowed();
  const value = prepaidCardsAllowedReducer(state, action);
  expect(value).toEqual(true);
});

test('executing setPrepaidCardsDisallowed sets prepaid cards disallowed', () => {
  const state = true;
  const action = setPrepaidCardsDisallowed();
  const value = prepaidCardsAllowedReducer(state, action);
  expect(value).toEqual(false);
});
