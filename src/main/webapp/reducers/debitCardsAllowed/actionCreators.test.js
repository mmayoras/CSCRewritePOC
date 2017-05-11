import {
  SET_DEBIT_CARDS_ALLOWED,
  SET_DEBIT_CARDS_DISALLOWED,
} from './actionTypes';
import {
  setDebitCardsAllowed,
  setDebitCardsDisallowed,
} from './actionCreators';

test('setting debit cards allowed', () => {
  const actual = setDebitCardsAllowed();
  expect(actual).toEqual({
    type: SET_DEBIT_CARDS_ALLOWED,
  });
});

test('setting debit cards disallowed', () => {
  const actual = setDebitCardsDisallowed();
  expect(actual).toEqual({
    type: SET_DEBIT_CARDS_DISALLOWED,
  });
});
