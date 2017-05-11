import {
  updateUUID,
} from './actionCreators';
import { uuidReducer } from './uuidReducer';

test('an undefined state and an unmatched action returns new state', () => {
  const state = '';
  const action = updateUUID('12345');
  const value = uuidReducer(state, action);
  expect(value).toEqual('12345');
});
