import {
  setProxOnlyTrue,
  setProxOnlyFalse,
} from './actionCreators';
import { proxOnlyReducer } from './proxOnlyReducer';

test('an undefined state and an unmatched action returns false', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = proxOnlyReducer(state, action);
  expect(value).toEqual(false);
});

test('an unmatched action returns the state unchanged', () => {
  const state = false;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
  };
  const value = proxOnlyReducer(state, action);
  expect(value).toEqual(state);
});

test('updating setProxOnlyTrue returns true', () => {
  const state = false;
  const action = setProxOnlyTrue();
  const value = proxOnlyReducer(state, action);
  expect(value).toEqual(true);
});

test('updating setProxOnlyFalse returns false', () => {
  const state = true;
  const action = setProxOnlyFalse();
  const value = proxOnlyReducer(state, action);
  expect(value).toEqual(false);
});
