import {
  UPDATE_CREDIT_AUTH_RESPONSE,
} from './actionTypes';
import {
  updateCreditAuthResponse,
} from './actionCreators';

test('credit auth response can be updated', () => {
  const actual = updateCreditAuthResponse('{}');
  expect(actual).toEqual({
    payload: '{}',
    type: UPDATE_CREDIT_AUTH_RESPONSE,
  });
});
