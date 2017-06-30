import $ from 'jquery';
import * as pinPadActionCreators from '../redux/pinpad/actionCreators';
import * as pinPadCardActionCreators from '../redux/pinpadCardDetails/actionCreators';
import {processingMsrScreen} from './requestHandlers';

/**
 * Jquery function to parse data out of xml from Pinpad
 */
function parseXml(data) {
  const xmlDoc = $.parseXML(data);
  return $(xmlDoc);
}

export function processGetMsrDataResponse({data, dispatch}) {
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

    return;
  }

}

export function processProcessingScreenResponse({data}) {
  console.log('Debugging: in processProcessingScreenResponse()');
  console.log('processing auth screen:', data);
}

export function processPostalCodeResponse({data, dispatch}) {
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
  }

  return;
}

export function processDOBResponse({data, dispatch}) {
  console.log('processDOBResponse');
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
  dispatch(pinPadCardActionCreators.updateDOB(keyedZipCode));

  if (keyedResponse.attr('buttonPressed') === '2') {
    console.log('Customer pressed cancel while keying date of birth');
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
  }

  return;
}

export default {
  GetMSRData: processGetMsrDataResponse,
  MSRProcessing: processProcessingScreenResponse,
  GetPostalCode: processPostalCodeResponse,
  DOBKeyPad: processDOBResponse,
};
