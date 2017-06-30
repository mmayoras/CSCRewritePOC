import {UPDATE_PIN_PAD_REQUEST, RESET_PINPAD_DATA} from './actionTypes';
import {updatePinPadRequestType, resetPinPadData} from './actionCreators';

test('pinpad request type is changed', () => {
  const actual = updatePinPadRequestType('TEST_MSR');
  expect(actual).toEqual({
    type: UPDATE_PIN_PAD_REQUEST,
    payload: 'TEST_MSR',
  });
});

test('executing resetPinPadData returns this action', () => {
  const actual = resetPinPadData();
  expect(actual).toEqual({
    type: RESET_PINPAD_DATA,
  });
});
