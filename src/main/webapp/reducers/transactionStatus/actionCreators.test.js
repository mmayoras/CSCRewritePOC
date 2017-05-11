import {
  RESET_TRANSACTION_STATUS,
  SET_TRANSACTION_COMPLETE,
} from './actionTypes';

import {
  resetTransactionStatus,
  setTransactionComplete,
} from './actionCreators';

test('executing resetTransactionStatus sends the correct action', () => {
  const actual = resetTransactionStatus();
  expect(actual).toEqual({
    type: RESET_TRANSACTION_STATUS,
  });
});

test('executing setTransactionComplete sends the correct action', () => {
  const actual = setTransactionComplete();
  expect(actual).toEqual({
    type: SET_TRANSACTION_COMPLETE,
  });
});
