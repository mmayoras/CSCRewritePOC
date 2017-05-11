import {
  updateCustomerName,
  updateCustomerPhone,
} from './actionCreators';
import { customerInformationReducer } from './customerInformationReducer';

const defaultState = {
  customerName: '',
  customerPhone: '',
};

test('an undefined state and an unmatched action returns the default state', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = customerInformationReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = {
    customerName: 'Homer D. Poe',
    customerPhone: '(555) 123-0987',
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = customerInformationReducer(state, action);
  expect(value).toEqual(state);
});

test('update customerName, returns a new state with updated customerName', () => {
  const state = defaultState;
  const action = updateCustomerName('Homer D. Poe');
  const value = customerInformationReducer(state, action);
  const expectedState = {
    customerName: 'Homer D. Poe',
    customerPhone: '',
  };
  expect(value).toEqual(expectedState);
});

test('update customerPhone, returns a new state with updated customerPhone', () => {
  const state = defaultState;
  const action = updateCustomerPhone('(555) 123-0987');
  const value = customerInformationReducer(state, action);
  const expectedState = {
    customerName: '',
    customerPhone: '(555) 123-0987',
  };
  expect(value).toEqual(expectedState);
});
