import UPDATE_BACK_BUTTON_LOCATION_NAME from './actionTypes';

function updateBackButtonLocationName(payload) {
  return {
    type: UPDATE_BACK_BUTTON_LOCATION_NAME,
    payload,
  };
}

export default updateBackButtonLocationName;
