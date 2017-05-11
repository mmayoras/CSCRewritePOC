import UPDATE_BACK_BUTTON_LOCATION_NAME from './actionTypes';

const defaultState = {
  backButtonLocationName: 'Cart',
};

function titleBarReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_BACK_BUTTON_LOCATION_NAME:
      if (action.payload) {
        return Object.assign({}, state, {
          backButtonLocationName: action.payload,
        });
      }
      return Object.assign({}, state, {
        backButtonLocationName: defaultState.backButtonLocationName,
      });
    default:
      return state;
  }
}

export default titleBarReducer;
