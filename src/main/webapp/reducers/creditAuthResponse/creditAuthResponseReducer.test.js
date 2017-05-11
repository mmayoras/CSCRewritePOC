import {
  updateCreditAuthResponse,
} from './actionCreators';
import { creditAuthResponseReducer } from './creditAuthResponseReducer';

test('an undefined state and an unmatched action returns new state', () => {
  const state = '';
  const action = updateCreditAuthResponse('{}');
  const value = creditAuthResponseReducer(state, action);
  expect(value).toEqual('{}');
});
