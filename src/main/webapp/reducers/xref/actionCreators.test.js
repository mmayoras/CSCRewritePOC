import {
  UPDATE_XREF,
} from './actionTypes';
import {
  updateXref,
} from './actionCreators';

test('xref can be updated', () => {
  const actual = updateXref('4012101010101012383938');
  expect(actual).toEqual({
    payload: '4012101010101012383938',
    type: UPDATE_XREF,
  });
});
