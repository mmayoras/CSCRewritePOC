import {
SET_ACCESS_TOKEN,
} from './actionTypes';

import {
setAccessToken,
} from './actionCreators';

test('authenticationData can setAccessToken', () => {
  const actual = setAccessToken({
    access_token: 'tanzil-matt-test-data112123234',
    token_type: 'Bearer',
    expires_in: 3600,
    scope: 'orangePayServices.all',
  });
  expect(actual).toEqual({
    accessToken: {
      access_token: 'tanzil-matt-test-data112123234',
      token_type: 'Bearer',
      expires_in: 3600,
      scope: 'orangePayServices.all',
    },
    type: SET_ACCESS_TOKEN,
  });
});
