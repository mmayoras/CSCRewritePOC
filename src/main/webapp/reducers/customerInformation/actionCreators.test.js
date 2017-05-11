import {
  UPDATE_CUSTOMER_NAME,
  UPDATE_CUSTOMER_PHONE,
} from './actionTypes';
import {
  updateCustomerName,
  updateCustomerPhone,
} from './actionCreators';

test('customer name can be updated', () => {
  const actual = updateCustomerName('Homer D. Poe');
  expect(actual).toEqual({
    payload: 'Homer D. Poe',
    type: UPDATE_CUSTOMER_NAME,
  });
});

test('customer phone can be updated', () => {
  const actual = updateCustomerPhone('(555) 123-0987');
  expect(actual).toEqual({
    payload: '(555) 123-0987',
    type: UPDATE_CUSTOMER_PHONE,
  });
});
