/* eslint-disable max-len */
import { dispatch, getState } from './dispatchIndex';
import {
    updatePinPadRequestType,
    setSignatureApprovalStatus,
} from './../reducers/pinpad/actionCreators';
import { sendToPinPad } from './index';
import { sessionId } from './../socket';
import {
    msrDataPinPadRequest,
    getDebitPinData,
    processingMsrRequest,
    msrDeclineRequest,
    msrApprovedRequest,
    // invalidCardMessage,
    emvStart,
    emvComplete,
    emvFinalize,
    cardSwipedInsertCardRequest,
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

export function sendPinPadMsrData(languageCode, total) {
    dispatch(updatePinPadRequestType('GetMSRData'));
    sendToPinPad(msrDataPinPadRequest(sessionId, languageCode, total));
}

// TODO Uncomment functions as they need to be added to PIN pad functionality
export function sendCardSwipeError() {
    dispatch(updatePinPadRequestType('GetMSRData'));
    sendToPinPad(cardSwipeError(sessionId));
}

export function sendGetDebitPinData(languageCode, orderTotal, encryptedPan, rawTrack2PinPadData) {
    dispatch(updatePinPadRequestType('GetPIN'));
    sendToPinPad(getDebitPinData(sessionId, languageCode, orderTotal,
        encryptedPan, rawTrack2PinPadData));
}

export function processingMsrScreen() {
    dispatch(updatePinPadRequestType('MSRProcessing'));
    sendToPinPad(processingMsrRequest(sessionId));
}

export function msrDeclinedScreen(languageCode) {
    dispatch(updatePinPadRequestType('InfoMessage'));
    sendToPinPad(msrDeclineRequest(sessionId, languageCode));
}

export function msrApprovedScreen(languageCode) {
    dispatch(updatePinPadRequestType('InfoMessage'));
    sendToPinPad(msrApprovedRequest(sessionId, languageCode));
}

export function sendEMVStart(languageCode, orderTotal, countryCode) {
    dispatch(updatePinPadRequestType('StartEMV'));
    const state = getState();
    // TODO: add argument values for emvStart function.
    const emvTranSeqNumber = `0000${Math.floor(Math.random() * (9999))}`.slice(-4);
    const creditOnlyFlag = !state.debitCardsAllowed;
    sendToPinPad(emvStart(sessionId,
        languageCode,
        orderTotal,
        countryCode,
        creditOnlyFlag,
        emvTranSeqNumber));
}

export function sendEMVFinalize(languageCode, countryCode, authStatus) {
    dispatch(updatePinPadRequestType('FinalizeEMV'));
    sendToPinPad(emvFinalize(sessionId, languageCode, countryCode, authStatus));
}

export function sendEMVComplete(languageCode, countryCode, authStatus, emvTagsFromHostRaw) {
    dispatch(updatePinPadRequestType('CompleteEMV'));
    sendToPinPad(emvComplete(sessionId, languageCode, countryCode,
        authStatus, emvTagsFromHostRaw));
}

export function cardSwipedInsertCard(languageCode) {
    dispatch(updatePinPadRequestType('CardSwipedInsertCard'));
    sendToPinPad(cardSwipedInsertCardRequest(sessionId, languageCode));
}

export function emvFailedSwipeCard(languageCode) {
    // The request type is set to 'GetMSRData' because the screen prompt enables
    // the MSR reader, so we want to fall into the MSR response handler
    dispatch(updatePinPadRequestType('GetMSRData'));
    sendToPinPad(emvFailedSwipeCardRequest(sessionId, languageCode));
}

export function promptForSignature(languageCode, xref, orderTotal, rptPaymtMethCode) {
    dispatch(updatePinPadRequestType('GetSignature'));
    dispatch(setSignatureApprovalStatus('PENDING'));
    sendToPinPad(promptForSignatureRequest(sessionId, languageCode, xref, orderTotal, rptPaymtMethCode));
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
