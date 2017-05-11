import {
  IS_FULL_AUTH,
  IS_NOT_FULL_AUTH,
} from './actionTypes';
import {
  isFullAuth,
  isNotFullAuth,
} from './actionCreators';

test('full auth action is created', () => {
  const actual = isFullAuth();
  expect(actual).toEqual({
    type: IS_FULL_AUTH,
  });
});

test('not a full auth action is created', () => {
  const actual = isNotFullAuth();
  expect(actual).toEqual({
    type: IS_NOT_FULL_AUTH,
  });
});
