import {
  showOrderDetails,
  hideOrderDetails,
} from './actionCreators';
import { showOrderDetailsReducer } from './showOrderDetailsReducer';

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = showOrderDetailsReducer(state, action);
  expect(value).toEqual(false);
});

test('an unmatched action returns the state unchanged', () => {
  const state = false;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = showOrderDetailsReducer(state, action);
  expect(value).toEqual(state);
});

test('updating show order details, shows the order details', () => {
  const state = false;
  const action = showOrderDetails();
  const value = showOrderDetailsReducer(state, action);
  expect(value).toEqual(true);
});

test('updating hide order details, hides the order details', () => {
  const state = true;
  const action = hideOrderDetails();
  const value = showOrderDetailsReducer(state, action);
  expect(value).toEqual(false);
});
