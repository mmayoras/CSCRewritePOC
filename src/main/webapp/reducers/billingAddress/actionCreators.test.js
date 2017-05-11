import {
  UPDATE_ADDRESS__LINE_1,
  UPDATE_ADDRESS__LINE_2,
  UPDATE_ADDRESS__CITY,
  UPDATE_ADDRESS__STATE,
  UPDATE_ADDRESS__ZIP_CODE,
  UPDATE_ADDRESS__COUNTRY_CODE,
} from './actionTypes';
import {
  updateAddressLine1,
  updateAddressLine2,
  updateAddressCity,
  updateAddressState,
  updateAddressZipCode,
  updateAddressCountryCode,
} from './actionCreators';

test('address line 1 can be updated', () => {
  const actual = updateAddressLine1('123 Home Depot Street');
  expect(actual).toEqual({
    payload: '123 Home Depot Street',
    type: UPDATE_ADDRESS__LINE_1,
  });
});

test('address line 2 can be updated', () => {
  const actual = updateAddressLine2('Apt 12A');
  expect(actual).toEqual({
    payload: 'Apt 12A',
    type: UPDATE_ADDRESS__LINE_2,
  });
});

test('address city can be updated', () => {
  const actual = updateAddressCity('Atlanta');
  expect(actual).toEqual({
    payload: 'Atlanta',
    type: UPDATE_ADDRESS__CITY,
  });
});

test('address state can be updated', () => {
  const actual = updateAddressState('GA');
  expect(actual).toEqual({
    payload: 'GA',
    type: UPDATE_ADDRESS__STATE,
  });
});

test('address zipcode can be updated', () => {
  const actual = updateAddressZipCode('30303');
  expect(actual).toEqual({
    payload: '30303',
    type: UPDATE_ADDRESS__ZIP_CODE,
  });
});

test('address country code can be updated', () => {
  const actual = updateAddressCountryCode('US');
  expect(actual).toEqual({
    payload: 'US',
    type: UPDATE_ADDRESS__COUNTRY_CODE,
  });
});
