/* eslint-disable max-len,no-console,new-cap */
import { Map } from 'core-js/es6';
import padStart from 'lodash/padStart';
import padEnd from 'lodash/padEnd';

import {
    pinPadEnglishCurrencyFilter,
    pinPadFrenchCanadaCurrencyFilter,
} from './../utils/formatters';
import { sanitizeInput } from './index';

const tenderTypes = new Map([
    ['AX', 'AMEX'],
    ['DS', 'DISCOVER'],
    ['MA', 'MASTERCARD'],
    ['VI', 'VISA'],
    ['HC', 'CONSUMER'],
    ['HR', 'COMMERCIAL'],
    ['HP', 'PROX'],
    ['HI', 'IMPROVER'],
]);


export function welcomeRequest(sessionId) {
    return `<PinPadRequest sessionID="${sessionId}"><Action name="Welcome" waitForResponse="false"></Action></PinPadRequest>`;
}

/* generic info message to display on pin pad */
export function pinPadInfoMessage(sessionId, message) {
    return `<PinPadRequest sessionID="${sessionId}"><Action name="InfoMessage" waitForResponse="false"><Form padStatus="${message}" clearText="true"></Form></Action></PinPadRequest>`;
}


export function msrDataPinPadRequest(sessionId, languageCode, total) {
    const balanceDueEnUs = 'BALANCE DUE';
    const balanceDueEnCa = 'BALANCE DUE';
    const balanceDueFrCa = 'SOLDE À PAYER';

    const formatter = languageCode === 'fr_CA' ? pinPadFrenchCanadaCurrencyFilter : pinPadEnglishCurrencyFilter;
    const formattedTotal = formatter(total).replace(' $', '$');
    const formattedBalance = formattedTotal;

    let balanceDueText;
    switch (languageCode) {
        case 'en_CA':
            balanceDueText = balanceDueEnCa;
            break;
        case 'fr_CA':
            balanceDueText = balanceDueFrCa;
            break;
        case 'en_US':
        default:
            balanceDueText = balanceDueEnUs;
    }

    return `<PinPadRequest sessionID="${sessionId}"><Action name="GetMSRData" waitForResponse="false"><Txn totalLine="TOTAL  ${formattedTotal}" balanceLine="${balanceDueText} ${formattedBalance}"><headerLine><String value=""/></headerLine><itemLine><String value=""/></itemLine></Txn></Action></PinPadRequest>`;
}


export function msrDeclineRequest(sessionId, languageCode) {
    const declinedEnUs = 'Declined';
    const declinedEnCa = 'Declined';
    const declinedFrCa = 'Refusée';

    let declinedText;
    switch (languageCode) {
        case 'en_CA':
            declinedText = declinedEnCa;
            break;
        case 'fr_CA':
            declinedText = declinedFrCa;
            break;
        case 'en_US':
        default:
            declinedText = declinedEnUs;
    }
    return pinPadInfoMessage(sessionId, declinedText);
}


export function msrApprovedRequest(sessionId, languageCode) {
    const approvedEnUs = 'Approved';
    const approvedEnCa = 'Approved';
    const approvedFrCa = 'Approuvée';

    let approvedText;
    switch (languageCode) {
        case 'en_CA':
            approvedText = approvedEnCa;
            break;
        case 'fr_CA':
            approvedText = approvedFrCa;
            break;
        case 'en_US':
        default:
            approvedText = approvedEnUs;
    }
    return pinPadInfoMessage(sessionId, approvedText);
}


export function invalidCardMessage(sessionId, languageCode) {
    const invalidCardEnUs = 'Invalid card';
    const invalidCardEnCa = 'Invalid card';
    const invalidCardFrCa = 'Carte non valide';

    let invalidCardText;
    switch (languageCode) {
        case 'en_CA':
            invalidCardText = invalidCardEnCa;
            break;
        case 'fr_CA':
            invalidCardText = invalidCardFrCa;
            break;
        case 'en_US':
        default:
            invalidCardText = invalidCardEnUs;
    }
    return pinPadInfoMessage(sessionId, invalidCardText);
}


export function cardSwipedInsertCardRequest(sessionId, languageCode) {
    const insertCardEnUs = 'Please Insert Card';
    const insertCardEnCa = 'Please Insert Card';
    const insertCardFrCa = 'Veuillez insérer la carte';

    let insertCardText;
    switch (languageCode) {
        case 'en_CA':
            insertCardText = insertCardEnCa;
            break;
        case 'fr_CA':
            insertCardText = insertCardFrCa;
            break;
        case 'en_US':
        default:
            insertCardText = insertCardEnUs;
    }
    return `<PinPadRequest sessionID="${sessionId}"><Action name="CardSwipedInsertCard" waitForResponse="false"><Form name="insertCard" padStatus="${insertCardText}"><dynamicText><Text text="${insertCardText}" rowIndex="0" align="center"/></dynamicText></Form></Action></PinPadRequest>`;
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


export function promptForSignatureRequest(sessionId, languageCode, xref, orderTotal, rptPaymtMethCode) {
    const lastFourOfCard = xref.substr(length - 4);
    const formatter = languageCode === 'fr_CA' ? pinPadFrenchCanadaCurrencyFilter : pinPadEnglishCurrencyFilter;
    let total = formatter(orderTotal).replace(' $', '$');
    total = padStart(total, 12);
    const tenderType = padEnd(tenderTypes.get(rptPaymtMethCode), 11); // This could potentially be refactored to use util.js/getFriendlyCardName
    return `<PinPadRequest sessionID="${sessionId}"><Action name="GetSignature" waitForResponse="false"><Signature enabled="true"><dynamicText><Text text="xxxxxxxxxxxx${lastFourOfCard} ${tenderType}${total}" rowIndex="1" align="center"/></dynamicText></Signature></Action></PinPadRequest>`;
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


export function getDebitPinData(sessionId, languageCode, orderTotal, encryptedPan, rawTrack2PinPadData) {
    const amount = orderTotal.toFixed(2);
    const displayLanguage = languageCode;
    const base64Encode = window.btoa;
    const track2Data = base64Encode(rawTrack2PinPadData);
    return `<PinPadRequest sessionID="${sessionId}"><Action name="GetPIN" waitForResponse="false"><MSR Amount="${amount}" Language="${displayLanguage}" TerminalID="terminal" accountNumber="${encryptedPan}" MerchantID="merchant" track2Data="${track2Data}"></MSR></Action></PinPadRequest>`;
}


export function emvStart(sessionId, languageCode, orderTotal, countryCode, creditOnlyFlag, emvTranSeqNumber) {
    const amount = orderTotal.toFixed(2);
    const displayLanguage = languageCode.substring(0, 2);
    const displayCountry = countryCode;
    // const emvTranSeqNumber = `0000${Math.floor(Math.random() * (9999))}`.slice(-4);
    const toolRentalDepositTransCreditOnly = creditOnlyFlag;
    return `<PinPadRequest sessionID="${sessionId}"><Action displayCountry="${displayCountry}" displayLanguage="${displayLanguage}" name="StartEMV" waitForResponse="false"><MSR Amount="${amount}" EMVTranSeqNumber="${emvTranSeqNumber}" EMVTransactionType="EMVPurchase" EMV_AMOUNT_CHANGE_FLAG="false" ToolRentalDepositTransCreditOnly="${toolRentalDepositTransCreditOnly}" entryMethod="4"/></Action></PinPadRequest>`;
}


export function emvComplete(sessionId, languageCode, countryCode, authStatusString, emvTagsFromHostRaw) {
    const displayLanguage = languageCode.substring(0, 2);
    const displayCountry = countryCode;
    const authStatus = authStatusString === 'APPROVED' ? '1' : '2';
    const emvTagsFromHost = (emvTagsFromHostRaw || '{}').split('"').join('&quot;');
    return `<PinPadRequest sessionID="${sessionId}"><Action displayCountry="${displayCountry}" displayLanguage="${displayLanguage}" name="CompleteEMV" waitForResponse="false"><EMV AUTH_STATUS="${authStatus}" EMVTagsFromHost="${emvTagsFromHost}" Language="${languageCode}"/></Action></PinPadRequest>`;
}


export function emvFinalize(sessionId, languageCode, countryCode, authStatus) {
    const displayLanguage = languageCode.substring(0, 2);
    const displayCountry = countryCode;
    return `<PinPadRequest sessionID="${sessionId}"><Action displayCountry="${displayCountry}" displayLanguage="${displayLanguage}" name="FinalizeEMV" waitForResponse="false"><EMV EMVStatus="Proceed" Language="${languageCode}" PAD_STATUS="${authStatus}"/></Action></PinPadRequest>`;
}


export function displayTerms(sessionId, languageCode, countryCode, termsAndConditions) {
    const displayLanguage = languageCode.substring(0, 2);
    const displayCountry = countryCode;
    const termsText = sanitizeInput(termsAndConditions);
    return `<PinPadRequest sessionID="${sessionId}"><Action displayCountry="${displayCountry}" displayLanguage="${displayLanguage}" name="GetSignatureCancel" waitForResponse="false"><Signature enabled="true"><dynamicText><Text text="${termsText}" rowIndex="1" align="left"/></dynamicText></Signature></Action></PinPadRequest>`;
}
