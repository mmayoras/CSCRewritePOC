/* eslint-disable max-len */
import {
  enablePaymentMethodCard,
  enablePaymentMethodKeyboardManualEntry,
  removeMethod,
} from './actionCreators';
import {
  methodsReducer,
} from './methodsReducer';

const defaultState = [];

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = methodsReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = defaultState;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = methodsReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('enable payment method card, returns methods array including card', () => {
  const state = [];
  const action = enablePaymentMethodCard();
  const value = methodsReducer(state, action);
  expect(value).toEqual([
    {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
  ]);
});

test('enable payment method manual entry, returns methods array including manual entry', () => {
  const state = [];
  const action = enablePaymentMethodKeyboardManualEntry();
  const value = methodsReducer(state, action);
  expect(value).toEqual([
    {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
  ]);
});

test('enable two payment methods, returns methods array including both', () => {
  const state = [];
  const action = enablePaymentMethodCard();
  const action2 = enablePaymentMethodKeyboardManualEntry();
  const value = methodsReducer(state, action);
  const value2 = methodsReducer(value, action2);
  expect(value2).toEqual([
    {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
    {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
  ]);
});

test('remove payment method from payment methods array with only one method', () => {
  const state = [
    {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
  ];
  const id = 'paymentMethodCard';
  const action = removeMethod(id);
  const value = methodsReducer(state, action);

  expect(value).toEqual([]);
});

test('remove payment method paymentMethodKeyboardManualEntry from payment methods array with multiple methods', () => {
  const state = [
    {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
    {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
  ];
  const id = 'paymentMethodKeyboardManualEntry';
  const action = removeMethod(id);
  const value = methodsReducer(state, action);

  expect(value).toEqual([
    {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
  ]);
});

test('remove payment paymentMethodCard from payment methods array with multiple methods', () => {
  const state = [
    {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
    {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
  ];
  const id = 'paymentMethodCard';
  const action = removeMethod(id);
  const value = methodsReducer(state, action);

  expect(value).toEqual([
    {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
  ]);
});

test('attemping to remove a method that doesnt exist doesnt break everything', () => {
  const state = [
    {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
    {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
  ];
  const id = 'testID';
  const action = removeMethod(id);
  const value = methodsReducer(state, action);

  expect(value).toEqual([
    {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
    {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
  ]);
});

test('attempting to enable payment method twice returns state with only one entry (no duplicates)', () => {
  const state = [];
  const action = enablePaymentMethodKeyboardManualEntry();
  const value = methodsReducer(state, action);
  const value2 = methodsReducer(value, action);
  expect(value2).toEqual([
    {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
  ]);
});

test('enable two payment methods, second is default, returns methods array including both, default first', () => {
  const state = [];
  const action = enablePaymentMethodCard();
  const action2 = enablePaymentMethodKeyboardManualEntry(true);
  const value = methodsReducer(state, action);
  const value2 = methodsReducer(value, action2);
  expect(value2).toEqual([
    {
      className: 'icon_touch_pad',
      id: 'paymentMethodKeyboardManualEntry',
      title: 'Manual Entry',
      location: 'keyboard-manual-entry',
    },
    {
      className: 'icon_credit_card',
      id: 'paymentMethodCard',
      title: 'Card',
      location: 'card',
    },
  ]);
});
