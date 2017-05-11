import {
  updateStoreNumber,
} from './actionCreators';
import { storeNumberReducer } from './storeNumberReducer';

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = storeNumberReducer(state, action);
  expect(value).toEqual('0091');
});

test('an unmatched action returns the state unchanged', () => {
  const state = '101';
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = storeNumberReducer(state, action);
  expect(value).toEqual(state);
});

test('updating store number, updates the store number', () => {
  const state = '101';
  const action = updateStoreNumber('505');
  const value = storeNumberReducer(state, action);
  expect(value).toEqual('505');
});
