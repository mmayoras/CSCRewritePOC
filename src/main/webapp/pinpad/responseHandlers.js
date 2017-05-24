/* global PIE, ProtectPANandCVV */
/* eslint-disable new-cap,no-console,max-len, no-shadow */
import $ from 'jquery';
import { browserHistory } from 'react-router';
import { getState } from './dispatchIndex';

import * as pinPadActionCreators from './../reducers/pinpad/actionCreators';
import * as pinPadCardActionCreators from '../reducers/pinpadCardDetails/actionCreators';
import {
  setCardTypeCredit,
  setCardTypeDebit,
} from './../reducers/cardType/actionCreators';
import {
  setCardApprovalStatusDeclined,
  clearCardApprovalStatus,
} from './../reducers/cardApprovalStatus/actionCreators';
import { setProxOnlyFalse } from '../reducers/proxOnly/actionCreators';
import {
  sendPinPadMsrData,
  processingMsrScreen,
  sendEMVFinalize,
  sendCardSwipeError,
  pinPadPANManualEntry,
  emvFailedSwipeCard,
  pinpadExpirationDateManualEntry,
  pinPadCVV2ManualEntry,
  pinPadPostalCodeManualEntry,
} from './requestHandlers';

import {
  addAlertInfo,
  addAlertError,
  removeAllAlerts,
} from './../reducers/alertMessage/actionCreators';

import {
  displayBuyerIdModal,
  // displayPurchaseOrderModal,
} from './../reducers/modal/actionCreators';

import {
  isDebitOnlyCard,
  validateYearAndMonth,
  switchMonthYear,
} from './../utils/util';

let rootPath;
if (process.env.NODE_ENV === 'qa') {
  rootPath = 'qa/ps-orangepay/';
} else {
  rootPath = '';
}

function parseXml(data) {
  const xmlDoc = $.parseXML(data);
  return $(xmlDoc);
}

export function resetCardDataAndPinPad(dispatch) {
  dispatch(pinPadCardActionCreators.resetCardDetails());
  dispatch(pinPadActionCreators.resetCardActionStatus());
  sendPinPadMsrData();
}

export function processEMVErrorResponse({ data, dispatch }) {
  const $xml = parseXml(data);
  const cardResponse = $xml.find('EMVError');
  const isMSRError = parseInt(cardResponse.attr('SwipeCount'), 10) > 0;
  const errorCode = cardResponse.attr('ErrorCode');
  if (isMSRError) {
    console.log(`An MSR error occured. ErrorCode ${cardResponse.attr('ErrorCode')}`);
    if (errorCode === '111') {
      // TODO: Fallback logic
      console.log('A PIN pad error occured on MSR swipe');
      dispatch(pinPadActionCreators.incrementMSRFallbackCounter());
      // If the msr fallback counter is >= 2 though, we will allow manual entry for card.
      if (getState().pinpad.msrFallbackCounter >= 2) {
        dispatch(pinPadActionCreators.setMSRFallbackIndicatorTrue());
        dispatch(removeAllAlerts());
        dispatch(addAlertError('Error Reading Card', 'Please use PIN pad to manually enter card information'));
        sendCardSwipeError();
        dispatch(clearCardApprovalStatus());
        setTimeout(() => {
          browserHistory.push(`${rootPath}pinpad-manual-entry`);
          pinPadPANManualEntry();
        }, 3000);
      } else {
        dispatch(removeAllAlerts());
        dispatch(addAlertError('Error Reading Card', 'Please inform customer to swipe again'));
        sendCardSwipeError();
      }
    }
  } else {
    let sendToEMVFinalize = true;
    switch (errorCode) {
      case 'EMVCardRemoved': // falls through
      case 'CRPRE': {
        sendToEMVFinalize = false; // Go to swipe/insert screen rather than EMVFinalize
        console.log('Card removed early');
        dispatch(pinPadCardActionCreators.resetCardDetails()); // Reset card details
        dispatch(pinPadActionCreators.resetCardActionStatus());
        dispatch(pinPadActionCreators.setCardInsertedFalse());
        dispatch(pinPadActionCreators.setEMVCardRemovedEarlyTrue());
        dispatch(removeAllAlerts());
        dispatch(addAlertError('Chip card removed early', 'Please inform customer to try again'));
        const state = getState();
        sendPinPadMsrData();

        // Perform credit auth reversal if transaction was 'APPROVED'.
        if (state.cardApprovalStatus === 'APPROVED') {
          console.log('Calling doCreditAuthReversal() ...');
          setTimeout(() => {
            dispatch(doCreditAuthReversal());
            dispatch(clearCardApprovalStatus());
          }, 3000);
        }
        resetCardDataAndPinPad(dispatch);
        break;
      }
      case 'EMVChipDataInAccessible':
        dispatch(pinPadActionCreators.incrementEMVFallbackCounter());
        dispatch(removeAllAlerts());
        dispatch(addAlertError('Error reading chip card', 'Please inform customer to remove and reinsert'));
        console.log('EMV Chip Data Inaccessible');
        break; // Go to EMVFinalize
      case 'EMVNoAIDMatch':
        dispatch(removeAllAlerts());
        dispatch(addAlertError('Chip card not supported', 'Please inform customer to remove card'));
        console.log('EMV No AID Match');
        break; // Go to EMVFinalize
      default:
        if (cardResponse.attr('EMVStatus') === 'Error') {
          console.log('Chip card error.');
        }
        // Go to EMVFinalize
    }
    if (sendToEMVFinalize) {
      console.log('Going to EMVFinalize...');
      const state = getState();
      sendEMVFinalize(state.languageCode, state.countryCode, state.cardApprovalStatus);
    }
  }
}

export function processProcessingScreenResponse({ data }) {
  console.log('Debugging: in processProcessingScreenResponse()');
  console.log('processing auth screen:', data);
}

export function processInfoMessageResponse({ data }) {
  console.log('processed auth result:', data);
}

export function processGetMsrDataResponse({ data, dispatch }) {
    console.log('processPostalCodeResponse');
    const $xml = parseXml(data);
    const keyedResponse = $xml.find('KeyPad');
    processingMsrScreen();
    // If an MSR element was not returned, we will not process the response
    // This is being done because the MSRListener will sometimes fire an extra event
    // that we do not want to process, or it breaks the pinpad flow.
    if (keyedResponse.length === 0) {
        return;
    }
    const keyedZipCode = keyedResponse.attr('keyedData') || null;
    dispatch(pinPadCardActionCreators.updateZipCode(keyedZipCode));

    if (keyedResponse.attr('buttonPressed') === '2') {
        console.log('Customer pressed cancel while keying zip code');
        dispatch(pinPadCardActionCreators.resetCardDetails());
        dispatch(pinPadActionCreators.resetCardActionStatus());
        if (process.env.NODE_ENV !== 'test') {
            browserHistory.push(`${rootPath}card`);
        }
        return;
    }

}


export function processGetMsrDataResponseEMV({ data, dispatch }) {
  console.log('In processGetMsrDataResponseEMV');
  console.log(`data = ${data}`);
  console.log(`dispatch = ${dispatch}`);
  dispatch(removeAllAlerts());
  const $xml = parseXml(data);

  const msrResponse = $xml.find('MSR');
  const emvResponse = $xml.find('EMV');
  if ($xml.find('EMVError').length > 0) {
    console.log('EMVError found');
    processEMVErrorResponse({ data, dispatch });
    return;
  }

  const emv = $xml.find('EMV');
  if (emv.length === 0) {
    console.log('MSRListener extra event - returning...');
    // If an EMV element was not returned, we will not process the response
    // This is being done because the MSRListener will sometimes fire an extra event
    // that we do not want to process, or it breaks the pinpad flow.
    return;
  }

  const cardSequenceNumber = emv.attr('PANSequenceNumber') || '';
  if (cardSequenceNumber.length > 0) {
    dispatch(pinPadCardActionCreators.updateCardSequenceNumber(cardSequenceNumber));
  }

  if (emv.attr('EMVStatus') === 'EMVPinEntry') {
    // If debit
    console.log('Need PIN entry');
    dispatch(addAlertInfo('Please enter PIN on the PINPad'));
  }

  const etb = msrResponse.attr('ETB') || '';
  if (etb !== '') {
    // Get card data from MSR section of response data
    const pan = msrResponse.attr('accountNumber') || '';
    const track1Data = window.atob(msrResponse.attr('track1Data') || '');
    const track2Data = window.atob(msrResponse.attr('track2Data') || '');
    const expiry = switchMonthYear(msrResponse.attr('expirationDate') || ''); // YYMMDD to MMYY
    const emvTagsGoOnline = emvResponse.attr('EMVTagsGoOnline') || null;
    const encryptedPin = msrResponse.attr('EncryptedPIN') || null;
    const dukptSmid = msrResponse.attr('SecurityInfo') || null;

    if (process.env.NODE_ENV !== 'production') {
      console.log('ETB', etb);
      console.log('pan ', pan);
      console.groupEnd();
    }

    // Update values in state
    dispatch(pinPadCardActionCreators.updateEtbString(etb));
    dispatch(pinPadCardActionCreators.updatePrimaryAccountNumber(pan));
    dispatch(pinPadCardActionCreators.updateTrack1Data(track1Data));
    dispatch(pinPadCardActionCreators.updateTrack2Data(track2Data));
    dispatch(pinPadCardActionCreators.updateExpiryDate(expiry));
    dispatch(pinPadCardActionCreators.updateEMVTagsGoOnline(emvTagsGoOnline));
    dispatch(pinPadCardActionCreators.updateEncryptedPin(encryptedPin));
    dispatch(pinPadCardActionCreators.updateDukptSmid(dukptSmid));

    let state = getState();

    if (emv.attr('EMVTenderType') === 'DEBIT' && encryptedPin !== null) {
      dispatch(setCardTypeDebit());
    } else {
      dispatch(setCardTypeCredit());
      if (state.amountBreakdown.orderTotal.amount > 50.00 &&
        emv.attr('EMVSignatureRequired') === 'true') {
        dispatch(pinPadActionCreators.setSignatureRequiredTrue());
      } else {
        dispatch(pinPadActionCreators.setSignatureRequiredFalse());
      }
    }

    // Make custInfo call.
    dispatch(fetchXref(pan, etb)).then(() => {
      state = getState();

      if (!state.pinpadCardDetails.xref) {
        dispatch(pinPadCardActionCreators.resetCardDetails());
        sendEMVFinalize(state.languageCode, state.countryCode, 'DECLINED');
        return;
      } else if (isDebitOnlyCard(state.pinpadCardDetails.crHostId, state.pinpadCardDetails.paymtMethCode)) {
        // Handle disallowed debit cards
        if (!state.debitCardsAllowed) {
          // This is a debit card, and debit cards are not allowed for this transaction.
          dispatch(addAlertError('Debit only cards are not allowed.',
                                 'Please use a card that has a Credit tender to complete the payment.'));
          dispatch(pinPadCardActionCreators.resetCardDetails());
          // EMV Finalize will reset card action status
          sendEMVFinalize(state.languageCode, state.countryCode, state.cardApprovalStatus);
          return;
        }
      }

      // Handle signature required for all Pro Purchase (HA) cards
      if (state.pinpadCardDetails.rptPaymtMethCode === 'HA') {
        dispatch(pinPadActionCreators.setSignatureRequiredTrue());
      }

      // Handle disallowed prepaid cards
      if (!state.prepaidCardsAllowed && state.pinpadCardDetails.isPrepaidCard) {
        // This is a prepaid card, and prepaid cards are not allowed for this transaction.
        dispatch(addAlertError('Prepaid card not valid for deposit.'));
        dispatch(pinPadCardActionCreators.resetCardDetails());
        // EMV Finalize will reset card action status
        sendEMVFinalize(state.languageCode, state.countryCode, state.cardApprovalStatus);
        return;
      }

      dispatch(doCreditAuth());
    });
  }
}

export function processCompleteEMV({ data, dispatch }) {
  console.log(`CompleteEMV Data: ${data}, ${dispatch}`);
  const $xml = parseXml(data);
  if ($xml.find('EMVError').length > 0) {
    processEMVErrorResponse({ data, dispatch });
    return;
  }
  const emv = $xml.find('EMV');

  // If an EMV element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (emv.length === 0) {
    return;
  }

  const cardApprovalStatus = getState().cardApprovalStatus;
  const emvStep = emv.attr('EMVStep');
  const emvAuthStatus = emv.attr('EMVAuthStatus');
  if (emvStep === 'EMVComplete') {
    dispatch(pinPadActionCreators.setEMVCardRemovedEarlyFalse());
    if (emvAuthStatus === 'EMVDeclined' && cardApprovalStatus === 'APPROVED') {
      // If we make it in to this block, then creditAuth has approved a card,
      //   but the card's chip has declined the transaction. Consequently, we
      //   need to perform a reversal.
      console.log('EMV Chip declined - initiating reversal...');
      dispatch(doCreditAuthReversal());
      dispatch(setCardApprovalStatusDeclined());
    }
  }

  // Get the most recent instance of the state
  const state = getState();
  if (state.cardApprovalStatus === 'DECLINED') {
    dispatch(addAlertError('Card Declined',
      'Please try a different card.'));
  }
  sendEMVFinalize(state.languageCode, state.countryCode, state.cardApprovalStatus);
}

export function processFinalizeEMV({ data, dispatch }) {
  console.log(`FinalizeEMV Data: ${data}, ${dispatch}`);
  const $xml = parseXml(data);

  if ($xml.find('EMVError').length > 0) {
    processEMVErrorResponse({ data, dispatch });
    return;
  }

  const emv = $xml.find('EMV');
  // const pinPadVal = getState().pinpad;
  // const fallbackCounter = pinPadVal.get('emvFallbackCounter');
  // const signatureRequired = pinPadVal.get('signatureRequired');

  // If an EMV element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (emv.length === 0) {
    return;
  }

  const state = getState();
  dispatch(removeAllAlerts());

  if (state.cardApprovalStatus === 'APPROVED') {
    // Approved logic

  } else if (state.pinpad.emvFallbackCounter >= 3) {
    dispatch(addAlertInfo('Please swipe chip card'));
    dispatch(pinPadActionCreators.setEMVFallbackIndicatorTrue());
    emvFailedSwipeCard(state.languageCode);
  } else {
    sendPinPadMsrData();
  }
  dispatch(pinPadActionCreators.setCardInsertedFalse());
}

export function processGetMsrDataResponseDebit({ data, dispatch }) {
  console.log('processGetMsrDataResponseDebit');
  console.log(`data = ${data}`);
  console.log(`dispatch = ${dispatch}`);
  processingMsrScreen();

  // Debit only cards should never require signature, because we require PIN
  dispatch(pinPadActionCreators.setSignatureRequiredFalse());
  const $xml = parseXml(data);
  const pinResponse = $xml.find('PinPad');
  // Button 2 = 'Cancel' button on PinPad
  if (pinResponse.attr('buttonPressed') === '2') {
    console.log('PIN was not entered, running as credit');
    dispatch(setCardTypeCredit());
    if (getState().amountBreakdown.orderTotal.amount > 50.00) {
      // Require signature now because PIN bypass treats card as CREDIT
      dispatch(pinPadActionCreators.setSignatureRequiredTrue());
    }
  } else {
    const encryptedPin = pinResponse.attr('EncryptedPIN') || null;
    const dukptSmid = pinResponse.attr('SecurityInfo') || null;
    dispatch(pinPadCardActionCreators.updateEncryptedPin(encryptedPin));
    dispatch(pinPadCardActionCreators.updateDukptSmid(dukptSmid));
  }
  dispatch(doCreditAuth());
}

function handleProxCardData(dispatch, keyedPan) {
  console.log('handleProxCardData');
  let pan = keyedPan;
  const pan21digits = /^\d{21}$/.test(keyedPan);
  if (pan21digits) {
    pan = keyedPan.substring(0, 16);
    const buyerId = keyedPan.substring(16, 21);
    dispatch(pinPadCardActionCreators.updateBuyerId(buyerId));
  }

  dispatch(fetchXrefCallingPie(pan)).then(() => {
    console.log('CustInfo Success for PROX cards');
    const state = getState();
    if (!state.pinpadCardDetails.xref) {
      pinPadPANManualEntry();
      dispatch(pinPadCardActionCreators.resetCardDetails());
      dispatch(pinPadActionCreators.resetCardActionStatus());
      return;
    }
    dispatch(setCardTypeCredit());
    const rptPaymtMethCode = state.pinpadCardDetails.rptPaymtMethCode;
    const isCardValid = rptPaymtMethCode !== '';
    const triggerSecurityCodeFlow = isCardValid && rptPaymtMethCode === 'HP';
    if (isCardValid && triggerSecurityCodeFlow) {
      dispatch(pinPadCardActionCreators.updatePrimaryAccountNumber(pan));
      pinPadCVV2ManualEntry();
    } else {
      dispatch(addAlertError('Invalid Card Number', 'Please inform customer to enter again'));
      pinPadPANManualEntry();
    }
  });
}

function handleNonProxCardData(dispatch, keyedPan, etb) {
  console.log('handleNonProxCardData');
  dispatch(fetchXref(keyedPan, etb)).then(() => {
    console.log('CustInfo Success for non-PROX cards.');
    const state = getState();
    if (!state.pinpadCardDetails.xref) {
      pinPadPANManualEntry();
      dispatch(pinPadCardActionCreators.resetCardDetails());
      dispatch(pinPadActionCreators.resetCardActionStatus());
      return;
    }
    const rptPaymtMethCode = state.pinpadCardDetails.rptPaymtMethCode;
    // If proxOnly true and this isnt a prox card, do not proceed unless msrFallback true
    if (state.proxOnly && rptPaymtMethCode !== 'HP' && !state.pinpad.msrFallbackIndicator) {
      // If we made it here, then we need to disallow further execution
      dispatch(addAlertError('Please enter a Prox card or press the cancel button.'));
      dispatch(pinPadCardActionCreators.resetCardDetails());
      pinPadPANManualEntry();
      return;
    }
    if (isDebitOnlyCard(state.pinpadCardDetails.crHostId, state.pinpadCardDetails.paymtMethCode)) {
      dispatch(addAlertError('Card must be swiped or inserted.'));
      dispatch(pinPadCardActionCreators.resetCardDetails());
      dispatch(pinPadActionCreators.resetCardActionStatus());
      dispatch(setProxOnlyFalse());
      if (process.env.NODE_ENV !== 'test') {
        browserHistory.push('card');
      }
      return;
    }
    dispatch(setCardTypeCredit());
    const isCardValid = rptPaymtMethCode !== '';
    const triggerSecurityCodeFlow = isCardValid && !/^HA/.test(rptPaymtMethCode);
    // if rptPaymtMethCode is not HD card (i.e., PLCC), then show expiry date component
    const triggerExpirationDateFlow = isCardValid && !/^H/.test(rptPaymtMethCode);
    const triggerZipCodeFlow = isCardValid && !/^H[RP]$/.test(rptPaymtMethCode);
    if (isCardValid) {
      dispatch(pinPadCardActionCreators.updatePrimaryAccountNumber(keyedPan));
      if (triggerExpirationDateFlow) {
        pinpadExpirationDateManualEntry();
      } else if (triggerSecurityCodeFlow) {
        pinPadCVV2ManualEntry();
      } else if (triggerZipCodeFlow) {
        pinPadPostalCodeManualEntry();
      }
    } else {
      dispatch(addAlertError('Invalid Card Number', 'Please inform customer to enter again'));
      pinPadPANManualEntry();
    }
  });
}

export function processKeyedCardDataResponse({ data, dispatch }) {
  console.log('processPrimaryAccountNumberManualEntry');
  dispatch(pinPadActionCreators.setSignatureRequiredTrue()); // Signature required regardless of amount for manual entry
  dispatch(pinPadCardActionCreators.updatePOSEntryMode('KEY_ENTRY'));
  const $xml = parseXml(data);
  const pinResponse = $xml.find('KeyPad');

  if (pinResponse.attr('buttonPressed') === '2') {
    console.log('Customer pressed cancel while keying Primary Account Number');
    dispatch(removeAllAlerts());
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
    if (process.env.NODE_ENV !== 'test') {
      browserHistory.push(`${rootPath}card`);
    }
    return;
  }

  const keyedResponse = $xml.find('MSR');
  // If an MSR element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (keyedResponse.length === 0) {
    return;
  }
  const keyedPan = keyedResponse.attr('accountNumber') || null;
  const etb = keyedResponse.attr('ETB') || null;

  // remove previously displayed alert messages
  dispatch(removeAllAlerts());

  if (etb === null) {
    handleProxCardData(dispatch, keyedPan);
  } else {
    handleNonProxCardData(dispatch, keyedPan, etb);
  }
}

export function processSignatureResponse({ data, dispatch }) {
  console.log('process signature response:', data);
  const $xml = parseXml(data);
  const keyedResponse = $xml.find('Signature');

  if (keyedResponse.attr('buttonPressed') === '59') {
    console.log('Customer pressed cancel while signing');
    const state = getState();
    if (state.pinpad.isEmv || state.pinpad.cardSwiped) {
      sendPinPadMsrData();
    }
    dispatch(doCreditAuthReversal());
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
    dispatch(clearCardApprovalStatus());
    dispatch(pinPadActionCreators.updateSignatureArray([]));
    dispatch(pinPadActionCreators.showWaitingForSignatureScreen(false));
    dispatch(setProxOnlyFalse());
    if (process.env.NODE_ENV !== 'test') {
      browserHistory.push('card');
    }
    return;
  }

  const sigArray = [];
  $xml.find('Point').each((index, point) => {
    const xCoordinate = parseFloat(point.attributes.x.value);
    const yCoordinate = parseFloat(point.attributes.y.value);
    sigArray[index] = { x: xCoordinate, y: yCoordinate };
  });

  dispatch(pinPadActionCreators.updateSignatureArray(sigArray));
}

export function processExpirationDateResponse({ data, dispatch }) {
  console.log('processExpirationDateResponse');
  const $xml = parseXml(data);
  const keyedResponse = $xml.find('KeyPad');
  // If an MSR element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (keyedResponse.length === 0) {
    return;
  }
  const keyedExpirationDate = keyedResponse.attr('keyedData') || null;

  if (keyedResponse.attr('buttonPressed') === '2') {
    console.log('Customer pressed cancel while keying expiration date');
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
    if (process.env.NODE_ENV !== 'test') {
      browserHistory.push(`${rootPath}card`);
    }
    return;
  }
  dispatch(removeAllAlerts());
  if (validateYearAndMonth(String(keyedExpirationDate))) {
    dispatch(pinPadCardActionCreators.updateExpiryDate(keyedExpirationDate));
    pinPadCVV2ManualEntry();
  } else {
    dispatch(addAlertError('Invalid Expiration Date', 'Please inform customer to enter again'));
    pinpadExpirationDateManualEntry();
  }
}

export function processSecurityCodeResponse({ data, dispatch }) {
  console.log('processSecurityCodeResponse');
  const $xml = parseXml(data);
  const keyedResponse = $xml.find('KeyPad');
  // If an MSR element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (keyedResponse.length === 0) {
    return;
  }
  const keyedSecurityCode = keyedResponse.attr('keyedData') || null;

  if (keyedResponse.attr('buttonPressed') === '2') {
    console.log('Customer pressed cancel while keying security code');
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
    if (process.env.NODE_ENV !== 'test') {
      browserHistory.push(`${rootPath}card`);
    }
    return;
  }

  const state = getState();

  const rptPaymtMethCode = state.pinpadCardDetails.rptPaymtMethCode;
  const isCardValid = rptPaymtMethCode !== '';
  // if rptPaymtMethCode is not HR or HP, then show zip code component
  const triggerZipCodeFlow = isCardValid && !/^H[RP]$/.test(rptPaymtMethCode);
  // only HP card prompt for buyer id modal
  const triggerBuyerIdFlow = isCardValid && /^HP$/.test(rptPaymtMethCode);
  const securityCodeLength = rptPaymtMethCode === 'AX' ? 4 : 3;
  dispatch(removeAllAlerts());
  if (keyedSecurityCode.length === securityCodeLength) {
    dispatch(pinPadCardActionCreators.updateSecurityCode(keyedSecurityCode));
    if (triggerZipCodeFlow) {
      pinPadPostalCodeManualEntry();
      return;
    }
    if (triggerBuyerIdFlow && state.pinpadCardDetails.buyerId === '') {
      // Do nothing here as control goes to UI for associate to enter Buyer ID.
      // Display BuyerID Modal, on submit from modal do credit auth
      dispatch(displayBuyerIdModal());
      processingMsrScreen();
      return;
    }
    processingMsrScreen();
    dispatch(doCreditAuth());
    console.log('CreditAuth Successful');
  } else {
    dispatch(addAlertError('Invalid Security Code', 'Please inform customer to enter again'));
    pinPadCVV2ManualEntry();
  }
}

export function processPostalCodeResponse({ data, dispatch }) {
  console.log('processPostalCodeResponse');
  const $xml = parseXml(data);
  const keyedResponse = $xml.find('KeyPad');
  processingMsrScreen();
  // If an MSR element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (keyedResponse.length === 0) {
    return;
  }
  const keyedZipCode = keyedResponse.attr('keyedData') || null;
  dispatch(pinPadCardActionCreators.updateZipCode(keyedZipCode));

  if (keyedResponse.attr('buttonPressed') === '2') {
    console.log('Customer pressed cancel while keying zip code');
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
    if (process.env.NODE_ENV !== 'test') {
      browserHistory.push(`${rootPath}card`);
    }
    return;
  }
  dispatch(doCreditAuth());
}

export default {
  GetMSRData: processGetMsrDataResponse,
  MSRProcessing: processProcessingScreenResponse,
  InfoMessage: processInfoMessageResponse,
  CardSwipedInsertCard: processGetMsrDataResponse,
  StartEMV: processGetMsrDataResponseEMV,
  CompleteEMV: processCompleteEMV,
  FinalizeEMV: processFinalizeEMV,
  EMVError: processEMVErrorResponse,
  GetPIN: processGetMsrDataResponseDebit,
  GetKeyedCardData: processKeyedCardDataResponse,
  GetSignature: processSignatureResponse,
  GetExpirationDate: processExpirationDateResponse,
  GetCVV2: processSecurityCodeResponse,
  GetPostalCode: processPostalCodeResponse,
};
