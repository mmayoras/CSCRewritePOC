/* global PIE, ProtectPANandCVV, ValidatePANChecksum */
/* eslint-disable no-console, arrow-body-style */
import {
  UPDATE_CARD_APPROVAL_STATUS,
  CLEAR_CARD_APPROVAL_STATUS,
} from './actionTypes';

export function setCardApprovalStatusApproved() {
  return {
    type: UPDATE_CARD_APPROVAL_STATUS,
    value: 'APPROVED',
  };
}

export function setCardApprovalStatusDeclined() {
  return {
    type: UPDATE_CARD_APPROVAL_STATUS,
    value: 'DECLINED',
  };
}

export function setCardApprovalStatusNeedPO() {
  return {
    type: UPDATE_CARD_APPROVAL_STATUS,
    value: 'NEED_PO',
  };
}

export function setCardApprovalStatusError() {
  return {
    type: UPDATE_CARD_APPROVAL_STATUS,
    value: 'ERROR',
  };
}

export function clearCardApprovalStatus() {
  return {
    type: CLEAR_CARD_APPROVAL_STATUS,
  };
}
