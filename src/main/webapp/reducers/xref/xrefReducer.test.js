import {
  updateXref,
} from './actionCreators';
import { xrefReducer } from './xrefReducer';

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = xrefReducer(state, action);
  expect(value).toEqual('');
});

test('an unmatched action returns the state unchanged', () => {
  const state = '40120000101077777777';
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = xrefReducer(state, action);
  expect(value).toEqual(state);
});

test('updating xref, updates the xref value on state', () => {
  const state = '';
  const action = updateXref('40120000101077777777');
  const value = xrefReducer(state, action);
  expect(value).toEqual('40120000101077777777');
});
