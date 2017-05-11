import { UPDATE_AMOUNT_BREAKDOWN } from './actionTypes';
import { updateAmountBreakdown } from './actionCreators';

test('amount breakdown object can be updated', () => {
  const amountBreakdown = {
    subTotal: {
      name: 'Subtotal',
      amount: '100.00',
      color: 'BLACK',
      visible: true,
    },
    deposit: {
      name: 'Deposit',
      amount: '25.00',
      color: 'BLACK',
      visible: true,
    },
    orderTotal: {
      name: 'Order Total',
      amount: '115.00',
      color: 'BLACK',
      visible: true,
    },
    amountBreakdownList: [
      {
        name: 'Markdown',
        amount: '-10.00',
        color: 'GREEN',
      },
    ],
  };
  const actual = updateAmountBreakdown(amountBreakdown);
  expect(actual).toEqual({
    payload: {
      subTotal: {
        name: 'Subtotal',
        amount: '100.00',
        color: 'BLACK',
        visible: true,
      },
      deposit: {
        name: 'Deposit',
        amount: '25.00',
        color: 'BLACK',
        visible: true,
      },
      orderTotal: {
        name: 'Order Total',
        amount: '115.00',
        color: 'BLACK',
        visible: true,
      },
      amountBreakdownList: [
        {
          name: 'Markdown',
          amount: '-10.00',
          color: 'GREEN',
        },
      ],
    },
    type: UPDATE_AMOUNT_BREAKDOWN,
  });
});
