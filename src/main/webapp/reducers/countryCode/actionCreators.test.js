import {
  UPDATE_COUNTRY_CODE_CA,
  UPDATE_COUNTRY_CODE_US,
} from './actionTypes';
import {
  updateCountryCodeCA,
  updateCountryCodeUS,
} from './actionCreators';

test('language code can be updated to US', () => {
  const actual = updateCountryCodeUS();
  expect(actual).toEqual({
    type: UPDATE_COUNTRY_CODE_US,
  });
});

test('language code can be updated to CA', () => {
  const actual = updateCountryCodeCA();
  expect(actual).toEqual({
    type: UPDATE_COUNTRY_CODE_CA,
  });
});
