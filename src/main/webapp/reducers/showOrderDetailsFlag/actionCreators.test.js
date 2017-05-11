import {
  SHOW_ORDER_DETAILS,
  HIDE_ORDER_DETAILS,
} from './actionTypes';
import {
  showOrderDetails,
  hideOrderDetails,
} from './actionCreators';

test('show order details action is created', () => {
  const actual = showOrderDetails();
  expect(actual).toEqual({
    type: SHOW_ORDER_DETAILS,
  });
});

test('hide order details action is created', () => {
  const actual = hideOrderDetails();
  expect(actual).toEqual({
    type: HIDE_ORDER_DETAILS,
  });
});
