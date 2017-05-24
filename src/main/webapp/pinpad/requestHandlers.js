/* eslint-disable max-len */
import { dispatch } from './dispatchIndex';
import { updatePinPadRequestType } from './../reducers/pinpad/actionCreators';
import { sendToPinPad } from './index';
import { sessionId } from './../socket';
import {
    msrDataPinPadRequest,
    processingMsrRequest,
    // invalidCardMessage,
    emvFinalize,
    emvFailedSwipeCardRequest,
    cardSwipeError,
    pinPadPrimaryAccountNumberManualEntry,
    pinPadExpirationDateManualEntry,
    pinPadSecurityCodeManualEntry,
    pinPadZipPostalCodeManualEntry,
    // displayTerms,
    welcomeRequest,
} from './requests';

export function sendWelcome() {
    dispatch(updatePinPadRequestType('Welcome'));
    sendToPinPad(welcomeRequest(sessionId));
}

export function sendPinPadMsrData() {
    dispatch(updatePinPadRequestType('GetMSRData'));
    sendToPinPad(msrDataPinPadRequest(sessionId));
}

// TODO Uncomment functions as they need to be added to PIN pad functionality
export function sendCardSwipeError() {
    dispatch(updatePinPadRequestType('GetMSRData'));
    sendToPinPad(cardSwipeError(sessionId));
}

export function processingMsrScreen() {
    dispatch(updatePinPadRequestType('MSRProcessing'));
    sendToPinPad(processingMsrRequest(sessionId));
}

export function sendEMVFinalize(languageCode, countryCode, authStatus) {
    dispatch(updatePinPadRequestType('FinalizeEMV'));
    sendToPinPad(emvFinalize(sessionId, languageCode, countryCode, authStatus));
}

export function emvFailedSwipeCard(languageCode) {
    // The request type is set to 'GetMSRData' because the screen prompt enables
    // the MSR reader, so we want to fall into the MSR response handler
    dispatch(updatePinPadRequestType('GetMSRData'));
    sendToPinPad(emvFailedSwipeCardRequest(sessionId, languageCode));
}

export function pinPadPANManualEntry() {
    dispatch(updatePinPadRequestType('GetKeyedCardData'));
    sendToPinPad(pinPadPrimaryAccountNumberManualEntry(sessionId));
}

export function pinpadExpirationDateManualEntry() {
    dispatch(updatePinPadRequestType('GetExpirationDate'));
    sendToPinPad(pinPadExpirationDateManualEntry(sessionId));
}

export function pinPadCVV2ManualEntry() {
    dispatch(updatePinPadRequestType('GetCVV2'));
    sendToPinPad(pinPadSecurityCodeManualEntry(sessionId));
}

export function pinPadPostalCodeManualEntry() {
    dispatch(updatePinPadRequestType('GetPostalCode'));
    sendToPinPad(pinPadZipPostalCodeManualEntry(sessionId));
}
