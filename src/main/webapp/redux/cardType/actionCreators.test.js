import { UPDATE_CARD_TYPE } from './actionTypes';
import {
  setCardTypeCredit,
  setCardTypeDebit,
  resetCardType,
} from './actionCreators';

test('test setCardTypeDebit returns update card type payload DEBIT', () => {
  const actual = setCardTypeDebit();
  expect(actual).toEqual({
    payload: 'DEBIT',
    type: UPDATE_CARD_TYPE,
  });
});

test('test setCardTypeCredit returns update card type payload CREDIT', () => {
  const actual = setCardTypeCredit();
  expect(actual).toEqual({
    payload: 'CREDIT',
    type: UPDATE_CARD_TYPE,
  });
});

test('reset cardType resets to blank value', () => {
  const actual = resetCardType();
  expect(actual).toEqual({
    payload: '',
    type: UPDATE_CARD_TYPE,
  });
});
