import updateBackButtonLocationName from './actionCreators';
import titleBarReducer from './titleBarReducer';

test('an undefined state and an unmatched action returns default state', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = titleBarReducer(state, action);
  expect(value).toEqual({
    backButtonLocationName: 'Cart',
  });
});

test('an unmatched action returns the state unchanged', () => {
  const state = {
    backButtonLocationName: 'Cart',
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: 'Changed name',
  };
  const value = titleBarReducer(state, action);
  expect(value).toEqual({
    backButtonLocationName: 'Cart',
  });
});

test('update backButtonLocationName, return new state with updated value', () => {
  const action = updateBackButtonLocationName('New location name');
  const value = titleBarReducer(null, action);
  expect(value).toEqual({
    backButtonLocationName: 'New location name',
  });
});

test('an empty backButtonLocationName returns the default value', () => {
  const action = updateBackButtonLocationName('');
  const value = titleBarReducer(null, action);
  expect(value).toEqual({
    backButtonLocationName: 'Cart',
  });
});
