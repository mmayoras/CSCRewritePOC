/* eslint-disable quote-props, arrow-body-style */
import 'whatwg-fetch';
import {
  UPDATE_CARD_APPROVAL_STATUS,
  CLEAR_CARD_APPROVAL_STATUS,
} from './actionTypes';
import {
  setCardApprovalStatusApproved,
  setCardApprovalStatusDeclined,
  setCardApprovalStatusNeedPO,
  setCardApprovalStatusError,
  clearCardApprovalStatus,
} from './actionCreators';

test('card approval status can be set to APPROVED', () => {
  const actual = setCardApprovalStatusApproved();
  expect(actual).toEqual({
    type: UPDATE_CARD_APPROVAL_STATUS,
    value: 'APPROVED',
  });
});

test('card approval status can be set to DECLINED', () => {
  const actual = setCardApprovalStatusDeclined();
  expect(actual).toEqual({
    type: UPDATE_CARD_APPROVAL_STATUS,
    value: 'DECLINED',
  });
});

test('card approval status can be set to NEED_PO', () => {
  const actual = setCardApprovalStatusNeedPO();
  expect(actual).toEqual({
    type: UPDATE_CARD_APPROVAL_STATUS,
    value: 'NEED_PO',
  });
});

test('card approval status can be set to ERROR', () => {
  const actual = setCardApprovalStatusError();
  expect(actual).toEqual({
    type: UPDATE_CARD_APPROVAL_STATUS,
    value: 'ERROR',
  });
});

test('card approval status can be cleared', () => {
  const actual = clearCardApprovalStatus();
  expect(actual).toEqual({
    type: CLEAR_CARD_APPROVAL_STATUS,
  });
});
