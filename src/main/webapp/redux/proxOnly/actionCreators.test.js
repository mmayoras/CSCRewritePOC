import {
  SET_PROX_ONLY_TRUE,
  SET_PROX_ONLY_FALSE,
} from './actionTypes';
import {
  setProxOnlyTrue,
  setProxOnlyFalse,
} from './actionCreators';

test('set prox only true action is created', () => {
  const actual = setProxOnlyTrue();
  expect(actual).toEqual({
    type: SET_PROX_ONLY_TRUE,
  });
});

test('set prox only false action is created', () => {
  const actual = setProxOnlyFalse();
  expect(actual).toEqual({
    type: SET_PROX_ONLY_FALSE,
  });
});
