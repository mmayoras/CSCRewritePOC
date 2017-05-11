import {
  setCardApprovalStatusApproved,
  setCardApprovalStatusDeclined,
  setCardApprovalStatusNeedPO,
  setCardApprovalStatusError,
  clearCardApprovalStatus,
} from './actionCreators';
import { cardApprovalStatusReducer } from './cardApprovalStatusReducer';

const defaultState = '';

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = cardApprovalStatusReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = 'APPROVED';
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = cardApprovalStatusReducer(state, action);
  expect(value).toEqual(state);
});

test('execute setCardApprovalStatusApproved, returns a new state of \'APPROVED\'', () => {
  const state = defaultState;
  const action = setCardApprovalStatusApproved();
  const value = cardApprovalStatusReducer(state, action);
  const expectedState = 'APPROVED';
  expect(value).toEqual(expectedState);
});

test('execute setCardApprovalStatusDeclined, returns a new state of \'DECLINED\'', () => {
  const state = defaultState;
  const action = setCardApprovalStatusDeclined();
  const value = cardApprovalStatusReducer(state, action);
  const expectedState = 'DECLINED';
  expect(value).toEqual(expectedState);
});

test('execute setCardApprovalStatusNeedPO, returns a new state of \'NEED_PO\'', () => {
  const state = defaultState;
  const action = setCardApprovalStatusNeedPO();
  const value = cardApprovalStatusReducer(state, action);
  const expectedState = 'NEED_PO';
  expect(value).toEqual(expectedState);
});

test('execute setCardApprovalStatusError, returns a new state of \'ERROR\'', () => {
  const state = defaultState;
  const action = setCardApprovalStatusError();
  const value = cardApprovalStatusReducer(state, action);
  const expectedState = 'ERROR';
  expect(value).toEqual(expectedState);
});

test('execute clearCardApprovalStatus, returns a new state of \'\'', () => {
  const state = defaultState;
  const action = clearCardApprovalStatus();
  const value = cardApprovalStatusReducer(state, action);
  const expectedState = '';
  expect(value).toEqual(expectedState);
});
