/* eslint-disable max-len,no-console,new-cap */
import {Map} from 'core-js/es6';

export function welcomeRequest(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="Welcome" waitForResponse="false"></Action></PinPadRequest>`;
}

export function emvFailedSwipeCardRequest(sessionId, languageCode) {
  const swipeCardEnUs = 'Please Swipe Card';
  const swipeCardEnCa = 'Please Swipe Card';
  const swipeCardFrCa = 'Veuillez glisser la carte';

  let swipeCardText;
  switch (languageCode) {
    case 'en_CA':
      swipeCardText = swipeCardEnCa;
      break;
    case 'fr_CA':
      swipeCardText = swipeCardFrCa;
      break;
    case 'en_US':
    default:
      swipeCardText = swipeCardEnUs;
  }
  return `<PinPadRequest sessionID="${sessionId}"><Action name="InfoBigLine"><Form name="infoBigLine" padStatus="${swipeCardText}"><dynamicText><Text text="${swipeCardText}" rowIndex="0" align="center"/></dynamicText></Form><MSR enabled="true"/></Action></PinPadRequest>`;
}

// export const pinPadPleaseMessageRequest = `<PinPadRequest sessionId="${sessionId}"><Action name="InfoMessage" waitForResponse="false"><Form padStatus="Please Fill Out Required Fields" clearText="true"></Form></Action></PinPadRequest>`; // Please note that if this is uncommented it needs to be updated to use the locale message in 'general', 'alerts', 'enterRequiredFields - MKW6889 06/17/2016
export function processingMsrRequest(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="MSRProcessing" waitForResponse="false"></Action></PinPadRequest>`;
}

export function cardSwipeError(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="MSRInvalidSwipeError"></Action></PinPadRequest>`;
}

export function pinPadPrimaryAccountNumberManualEntry(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="GetKeyedCardData" waitForResponse="false"><MSR expirationDate="1249" cvv2="123"></MSR></Action></PinPadRequest>`;
}

export function pinPadExpirationDateManualEntry(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="GetExpirationDate" waitForResponse="false"></Action></PinPadRequest>`;
}

export function pinPadSecurityCodeManualEntry(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="GetCVV2" waitForResponse="false"></Action></PinPadRequest>`;
}

export function pinPadZipPostalCodeManualEntry(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="GetPostalCode" waitForResponse="false"></Action></PinPadRequest>`;
}

export function emvFinalize(sessionId, languageCode, countryCode, authStatus) {
  const displayLanguage = languageCode.substring(0, 2);
  const displayCountry = countryCode;
  return `<PinPadRequest sessionID="${sessionId}"><Action displayCountry="${displayCountry}" displayLanguage="${displayLanguage}" name="FinalizeEMV" waitForResponse="false"><EMV EMVStatus="Proceed" Language="${languageCode}" PAD_STATUS="${authStatus}"/></Action></PinPadRequest>`;
}
