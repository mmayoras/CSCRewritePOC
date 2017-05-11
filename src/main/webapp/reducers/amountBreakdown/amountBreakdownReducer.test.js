import { updateAmountBreakdown } from './actionCreators';
import { amountBreakdownReducer } from './amountBreakdownReducer';

const defaultState = {
  subTotal: {
    name: 'Subtotal',
    amount: 0.0,
    color: 'BLACK',
    visible: true,
  },
  deposit: {
    name: 'Deposit',
    amount: 0.0,
    color: 'BLACK',
    visible: false,
  },
  orderTotal: {
    name: 'Order Total',
    amount: 0.0,
    color: 'BLACK',
    visible: true,
  },
  amountBreakdownList: [
  ],
};

test('an undefined state and an unmatched action returns the defualt state', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = amountBreakdownReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = {
    subTotal: {
      name: 'Total',
      amount: 1.0,
      color: 'BLACK',
      visible: true,
    },
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = amountBreakdownReducer(state, action);
  expect(value).toEqual(state);
});

test('update orderTotal, returns a new state with updated amount breakdown', () => {
  const state = defaultState;
  const newState = {
    orderTotal: {
      name: 'Final Total',
      amount: 28.95,
      color: 'BLACK',
      visible: true,
    },
  };
  const action = updateAmountBreakdown(newState);
  const value = amountBreakdownReducer(state, action);

  const expectedState = {
    subTotal: {
      name: 'Subtotal',
      amount: 0.0,
      color: 'BLACK',
      visible: true,
    },
    deposit: {
      name: 'Deposit',
      amount: 0.0,
      color: 'BLACK',
      visible: false,
    },
    orderTotal: {
      name: 'Final Total',
      amount: 28.95,
      color: 'BLACK',
      visible: true,
    },
    amountBreakdownList: [
    ],
  };

  expect(value).toEqual(expectedState);
});

test('update entire amount breakdown, returns a new state with updated amount breakdown', () => {
  const state = defaultState;
  const newState = {
    subTotal: {
      name: 'Subtotal',
      amount: 30,
      color: 'BLACK',
      visible: true,
    },
    deposit: {
      name: 'Deposit',
      amount: 0,
      color: 'BLACK',
      visible: false,
    },
    orderTotal: {
      name: 'Final Total',
      amount: 28.95,
      color: 'BLACK',
      visible: true,
    },
    amountBreakdownList: [
      {
        name: 'Markdown',
        amount: 1.05,
        color: 'GREEN',
        visible: true,
      },
    ],
  };
  const action = updateAmountBreakdown(newState);
  const value = amountBreakdownReducer(state, action);

  const expectedState = {
    subTotal: {
      name: 'Subtotal',
      amount: 30,
      color: 'BLACK',
      visible: true,
    },
    deposit: {
      name: 'Deposit',
      amount: 0,
      color: 'BLACK',
      visible: false,
    },
    orderTotal: {
      name: 'Final Total',
      amount: 28.95,
      color: 'BLACK',
      visible: true,
    },
    amountBreakdownList: [
      {
        name: 'Markdown',
        amount: 1.05,
        color: 'GREEN',
        visible: true,
      },
    ],
  };

  expect(value).toEqual(expectedState);
});

test('update part of amount breakdown, returns a new state with updated amount breakdown', () => {
  const state = defaultState;
  const newState = {
    subTotal: {
      name: 'Subtotal',
      amount: 30,
      color: 'BLACK',
      visible: true,
    },
    orderTotal: {
      name: 'Final Total',
      amount: 28.95,
      color: 'BLACK',
      visible: true,
    },
  };
  const action = updateAmountBreakdown(newState);
  const value = amountBreakdownReducer(state, action);

  const expectedState = {
    subTotal: {
      name: 'Subtotal',
      amount: 30,
      color: 'BLACK',
      visible: true,
    },
    deposit: {
      name: 'Deposit',
      amount: 0,
      color: 'BLACK',
      visible: false,
    },
    orderTotal: {
      name: 'Final Total',
      amount: 28.95,
      color: 'BLACK',
      visible: true,
    },
    amountBreakdownList: [
    ],
  };

  expect(value).toEqual(expectedState);
});

test('update part of deposit, returns a new state with updated amount breakdown', () => {
  const state = defaultState;
  const newState = {
    subTotal: {
      name: 'Subtotal',
      amount: 30,
      color: 'BLACK',
      visible: true,
    },
    deposit: {
      amount: 10,
    },
    orderTotal: {
      name: 'Final Total',
      amount: 28.95,
      color: 'BLACK',
      visible: true,
    },
    amountBreakdownList: [
      {
        name: 'Markdown',
        amount: 1.05,
        color: 'GREEN',
        visible: true,
      },
    ],
  };
  const action = updateAmountBreakdown(newState);
  const value = amountBreakdownReducer(state, action);

  const expectedState = {
    subTotal: {
      name: 'Subtotal',
      amount: 30,
      color: 'BLACK',
      visible: true,
    },
    deposit: {
      name: 'Deposit',
      amount: 10,
      color: 'BLACK',
      visible: false,
    },
    orderTotal: {
      name: 'Final Total',
      amount: 28.95,
      color: 'BLACK',
      visible: true,
    },
    amountBreakdownList: [
      {
        name: 'Markdown',
        amount: 1.05,
        color: 'GREEN',
        visible: true,
      },
    ],
  };

  expect(value).toEqual(expectedState);
});

test('update part of amount breakdown, returns a new state with updated amount breakdown.'
+ ' update different part of amount breakdown, returns a new state reflecting both updates', () => {
  const state = {
    orderTotal: {
      amount: 25,
    },
    amountBreakdownList: [
      {
        name: 'Markdown',
        amount: 5,
        color: 'BLACK',
        visible: true,
      },
    ],
  };
  const oldAction = updateAmountBreakdown(state);
  const oldState = amountBreakdownReducer(undefined, oldAction);

  const newState = {
    subTotal: {
      name: 'Subtotal',
      amount: 30,
      color: 'BLACK',
      visible: true,
    },
  };
  const action = updateAmountBreakdown(newState);
  const value = amountBreakdownReducer(oldState, action);

  const expectedState = {
    subTotal: {
      name: 'Subtotal',
      amount: 30,
      color: 'BLACK',
      visible: true,
    },
    deposit: {
      name: 'Deposit',
      amount: 0,
      color: 'BLACK',
      visible: false,
    },
    orderTotal: {
      name: 'Order Total',
      amount: 25,
      color: 'BLACK',
      visible: true,
    },
    amountBreakdownList: [
      {
        name: 'Markdown',
        amount: 5,
        color: 'BLACK',
        visible: true,
      },
    ],
  };

  expect(value).toEqual(expectedState);
});

test('update amount breakdown with empty state, '
+ 'returns a new state with default state', () => {
  const state = defaultState;
  const newState = {};
  const action = updateAmountBreakdown(newState);
  const value = amountBreakdownReducer(state, action);

  expect(value).toEqual(defaultState);
});

test('update amount breakdown with empty state objects, '
+ 'returns a new state with default state', () => {
  const state = defaultState;
  const newState = {
    subTotal: {},
    deposit: {},
    orderTotal: {},
  };
  const action = updateAmountBreakdown(newState);
  const value = amountBreakdownReducer(state, action);

  expect(value).toEqual(defaultState);
});
