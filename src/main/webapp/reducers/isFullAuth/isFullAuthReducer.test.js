import {
  isFullAuth,
  isNotFullAuth,
} from './actionCreators';
import { isFullAuthReducer } from './isFullAuthReducer';

test('an undefined state and an unmatched action returns false', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = isFullAuthReducer(state, action);
  expect(value).toEqual(false);
});

test('an unmatched action returns the state unchanged', () => {
  const state = false;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = isFullAuthReducer(state, action);
  expect(value).toEqual(state);
});

test('updating isFullAuth returns true', () => {
  const state = false;
  const action = isFullAuth();
  const value = isFullAuthReducer(state, action);
  expect(value).toEqual(true);
});

test('updating isNotFullAuth returns false', () => {
  const state = true;
  const action = isNotFullAuth();
  const value = isFullAuthReducer(state, action);
  expect(value).toEqual(false);
});
