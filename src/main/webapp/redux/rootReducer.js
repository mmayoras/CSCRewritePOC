import combineReducers from 'redux/lib/combineReducers';
import { routerReducer } from 'react-router-redux';

import { alertMessagesReducer } from './alertMessage/alertMessagesReducer';
import { cardApprovalStatusReducer } from './cardApprovalStatus/cardApprovalStatusReducer';
import { cardTypeReducer } from './cardType/cardTypeReducer';
import { modalReducer } from './modal/modalReducer';
import { pinPadReducer } from './pinpad/pinpadReducer';
import { proxOnlyReducer } from './proxOnly/proxOnlyReducer';
import { pinpadCardDetailsReducer } from './pinpadCardDetails/pinpadCardDetailsReducer';

export default combineReducers({
  routing: routerReducer,
  alerts: alertMessagesReducer,
  cardApprovalStatus: cardApprovalStatusReducer,
  cardType: cardTypeReducer,
  modal: modalReducer,
  pinpad: pinPadReducer,
  proxOnly: proxOnlyReducer,
  pinpadCardDetails: pinpadCardDetailsReducer,
});
