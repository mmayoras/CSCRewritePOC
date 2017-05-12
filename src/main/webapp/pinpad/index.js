/* eslint-disable no-console */
import R from 'ramda';
import { connect, sendMessage } from '../socket';
import { dispatch, getState } from './dispatchIndex';
import responseHandlers from './responseHandlers';

import { addAlertError } from './../reducers/alertMessage/actionCreators';

export const pinpad = connect.subscribe(({ data }) => {
    const { requestType } = getState().pinpad;
    responseHandlers[requestType]({ data, dispatch });
    // Add actions here
}, (err) => {
    console.error('PIN pad connection error: ', err);
    dispatch(addAlertError('PIN Pad Offline'));
}, () => {
    console.warn('PIN pad socket closed');
});

export function sendToPinPad(message) {
    sendMessage(message);
}

// export function pinPadConnect() {
//   socket.subscribe(({ data }) => {
//     const { pinPadRequestType } = getState();
//
//     console.log(`About to hit ${pinPadRequestType} response handler`);
//     responseHandlers.get(pinPadRequestType)({ data, dispatch });
//   }, err => {
//     console.error('WebSocket Error:', err);
//     dispatch(alertActions.updateAlertErrorMessage('PIN Pad Offline'));
//   }, () => {
//     console.warn('socket closed');
//   });
// }

// Remove XML escape characters from input string
export const sanitizeInput = R.pipe(
    R.replace(/&/g, '&amp;'),
    R.replace(/</g, '&lt;'),
    R.replace(/>/g, '&gt;'),
    R.replace(/'/g, '&apos;'),
    R.replace(/"/g, '&quot;'),
);
