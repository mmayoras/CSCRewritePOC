import {
  UPDATE_UUID,
} from './actionTypes';
import {
  updateUUID,
} from './actionCreators';

test('uuid can be updated', () => {
  const actual = updateUUID('123456789');
  expect(actual).toEqual({
    payload: '123456789',
    type: UPDATE_UUID,
  });
});
