import UPDATE_BACK_BUTTON_LOCATION_NAME from './actionTypes';
import updateBackButtonLocationName from './actionCreators';

test('back button location name can be updated', () => {
  const actual = updateBackButtonLocationName('new name');
  expect(actual).toEqual({
    type: UPDATE_BACK_BUTTON_LOCATION_NAME,
    payload: 'new name',
  });
});
