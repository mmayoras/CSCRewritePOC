import {
  SET_PREPAID_CARDS_ALLOWED,
  SET_PREPAID_CARDS_DISALLOWED,
} from './actionTypes';
import {
  setPrepaidCardsAllowed,
  setPrepaidCardsDisallowed,
} from './actionCreators';

test('setting prepaid cards allowed', () => {
  const actual = setPrepaidCardsAllowed();
  expect(actual).toEqual({
    type: SET_PREPAID_CARDS_ALLOWED,
  });
});

test('setting prepaid cards disallowed', () => {
  const actual = setPrepaidCardsDisallowed();
  expect(actual).toEqual({
    type: SET_PREPAID_CARDS_DISALLOWED,
  });
});
