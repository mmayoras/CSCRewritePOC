import {
  DISPLAY_MODAL,
  HIDE_MODAL,
} from './actionTypes';
import {
  displayPurchaseOrderModal,
  displayBuyerIdModal,
  hideModal,
} from './actionCreators';

test('display PO modal action is created', () => {
  const actual = displayPurchaseOrderModal();
  expect(actual).toEqual({
    type: DISPLAY_MODAL,
    modalName: 'PURCHASE_ORDER',
  });
});

test('diplay buyer id modal action is created', () => {
  const actual = displayBuyerIdModal();
  expect(actual).toEqual({
    type: DISPLAY_MODAL,
    modalName: 'BUYER_ID',
  });
});

test('hide modal action is created', () => {
  const actual = hideModal();
  expect(actual).toEqual({
    type: HIDE_MODAL,
  });
});
