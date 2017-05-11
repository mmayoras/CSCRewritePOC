import {
  UPDATE_STORE_NUMBER,
} from './actionTypes';
import {
  updateStoreNumber,
} from './actionCreators';

test('store number can be updated', () => {
  const actual = updateStoreNumber('1234');
  expect(actual).toEqual({
    payload: '1234',
    type: UPDATE_STORE_NUMBER,
  });
});
