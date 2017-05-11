import combineReducers from 'redux/lib/combineReducers';
import { routerReducer } from 'react-router-redux';

import { alertMessagesReducer } from './alertMessage/alertMessagesReducer';
import { amountBreakdownReducer } from './amountBreakdown/amountBreakdownReducer';
import { authenticationDataReducer } from './authenticationData/authenticationDataReducer';
import { billingAddressReducer } from './billingAddress/billingAddressReducer';
import { cardApprovalStatusReducer } from './cardApprovalStatus/cardApprovalStatusReducer';
import { cardTypeReducer } from './cardType/cardTypeReducer';
import { countryCodeReducer } from './countryCode/countryCodeReducer';
import { creditCardDetailsReducer } from './creditCardDetails/creditCardDetailsReducer';
import { creditAuthResponseReducer } from './creditAuthResponse/creditAuthResponseReducer';
import { customerInformationReducer } from './customerInformation/customerInformationReducer';
import { hmacCredentialsReducer } from './hmacCredentials/hmacCredentialsReducer';
import { isFullAuthReducer } from './isFullAuth/isFullAuthReducer';
import { languageCodeReducer } from './languageCode/languageCodeReducer';
import { methodsReducer } from './methods/methodsReducer';
import { modalReducer } from './modal/modalReducer';
import { pinPadReducer } from './pinpad/pinpadReducer';
import { pinpadStatusReducer } from './pinpadStatus/pinpadStatusReducer';
import { prepaidCardsAllowedReducer } from './prepaidCardsAllowed/prepaidCardsAllowedReducer';
import { proxOnlyReducer } from './proxOnly/proxOnlyReducer';
import { debitCardsAllowedReducer } from './debitCardsAllowed/debitCardsAllowedReducer';
import { showOrderDetailsReducer } from './showOrderDetailsFlag/showOrderDetailsReducer';
import { storeNumberReducer } from './storeNumber/storeNumberReducer';
import titleBarReducer from './titleBar/titleBarReducer';
import { transactionStatusReducer } from './transactionStatus/transactionStatusReducer';
import { pinpadCardDetailsReducer } from './pinpadCardDetails/pinpadCardDetailsReducer';
import { uuidReducer } from './uuid/uuidReducer';
import {
  authorizationIdentificationResponseReducer,
} from './authorizationIdentificationResponse/authorizationIdentificationResponseReducer';

export default combineReducers({
  routing: routerReducer,
  alerts: alertMessagesReducer,
  amountBreakdown: amountBreakdownReducer,
  authenticationData: authenticationDataReducer,
  billingAddress: billingAddressReducer,
  cardApprovalStatus: cardApprovalStatusReducer,
  creditAuthResponse: creditAuthResponseReducer,
  creditAuthResponseUUID: uuidReducer,
  creditAuthResponseAuthorizationIdentificationResponse: authorizationIdentificationResponseReducer,
  cardType: cardTypeReducer,
  countryCode: countryCodeReducer,
  creditCardDetails: creditCardDetailsReducer,
  customerInformation: customerInformationReducer,
  hmacCredentials: hmacCredentialsReducer,
  isFullAuth: isFullAuthReducer,
  languageCode: languageCodeReducer,
  methods: methodsReducer,
  modal: modalReducer,
  pinpad: pinPadReducer,
  pinpadStatus: pinpadStatusReducer,
  prepaidCardsAllowed: prepaidCardsAllowedReducer,
  proxOnly: proxOnlyReducer,
  debitCardsAllowed: debitCardsAllowedReducer,
  showOrderDetails: showOrderDetailsReducer,
  storeNumber: storeNumberReducer,
  titleBar: titleBarReducer,
  transactionStatus: transactionStatusReducer,
  pinpadCardDetails: pinpadCardDetailsReducer,
});
