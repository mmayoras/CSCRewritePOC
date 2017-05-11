import {
  ADD_METHOD,
  REMOVE_METHOD,
} from './actionTypes';
import {
  enablePaymentMethodCard,
  enablePaymentMethodKeyboardManualEntry,
  removeMethod,
} from './actionCreators';

test('payment method card can be enabled', () => {
  const actual = enablePaymentMethodCard();
  expect(actual).toEqual({
    type: ADD_METHOD,
    isDefault: undefined,
    item: {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
  });
});

test('payment method card can be enabled and defaulted', () => {
  const actual = enablePaymentMethodCard(true);
  expect(actual).toEqual({
    type: ADD_METHOD,
    isDefault: true,
    item: {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
  });
});

test('payment method manual entry can be enabled', () => {
  const actual = enablePaymentMethodKeyboardManualEntry();
  expect(actual).toEqual({
    type: ADD_METHOD,
    isDefault: undefined,
    item: {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
  });
});

test('removeMethod will remove method', () => {
  const actual = removeMethod('testID');
  expect(actual).toEqual({
    type: REMOVE_METHOD,
    id: 'testID',
  });
});
