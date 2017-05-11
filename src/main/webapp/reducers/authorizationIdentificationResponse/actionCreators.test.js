import {
  UPDATE_AUTHORIZATION_IDENTIFICATION_RESPONSE,
} from './actionTypes';
import {
  updateAuthorizationIdentificationResponse,
} from './actionCreators';

test('Authorization Identification Response can be updated', () => {
  const actual = updateAuthorizationIdentificationResponse('123456');
  expect(actual).toEqual({
    payload: '123456',
    type: UPDATE_AUTHORIZATION_IDENTIFICATION_RESPONSE,
  });
});
