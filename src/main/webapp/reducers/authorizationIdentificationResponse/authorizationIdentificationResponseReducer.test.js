import {
  updateAuthorizationIdentificationResponse,
} from './actionCreators';
import {
  authorizationIdentificationResponseReducer,
} from './authorizationIdentificationResponseReducer';

test('an undefined state and an unmatched action returns new state', () => {
  const state = '';
  const action = updateAuthorizationIdentificationResponse('123456');
  const value = authorizationIdentificationResponseReducer(state, action);
  expect(value).toEqual('123456');
});
