import {
  UPDATE_HMAC_CLIENT_ID,
  UPDATE_HMAC_CLIENT_TOKEN,
  UPDATE_HMAC_CLIENT_TIMESTAMP,
} from './actionTypes';
import {
  updateHmacClientId,
  updateHmacClientToken,
  updateHmacClientTimestamp,
} from './actionCreators';

test('client id can be updated', () => {
  const actual = updateHmacClientId('1234');
  expect(actual).toEqual({
    payload: '1234',
    type: UPDATE_HMAC_CLIENT_ID,
  });
});

test('client token can be updated', () => {
  const actual = updateHmacClientToken('askldjfla');
  expect(actual).toEqual({
    payload: 'askldjfla',
    type: UPDATE_HMAC_CLIENT_TOKEN,
  });
});

test('client timestamp can be updated', () => {
  const actual = updateHmacClientTimestamp('1480430864277');
  expect(actual).toEqual({
    payload: '1480430864277',
    type: UPDATE_HMAC_CLIENT_TIMESTAMP,
  });
});
