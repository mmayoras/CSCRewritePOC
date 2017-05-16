/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';

import { dispatch } from './dispatchIndex';
import { isOpen } from '../socket';
import { sendPinPadMsrData, sendWelcome } from './requestHandlers';
import { resetPinPadData } from '../reducers/pinpad/actionCreators';
import { updateCreditAuthResponse } from '../reducers/creditAuthResponse/actionCreators';
import { resetCardType } from '../reducers/cardType/actionCreators';
import { updateAuthorizationIdentificationResponse } from '../reducers/authorizationIdentificationResponse/actionCreators';

class ConnectToPinpadStarter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pinPadConnected: false,
            orderTotal: "$51.00",
            updateReadyToPay: false,
            updatePinPadConnected: false,
            languageCode: "en_US"
        };

        //sendWelcome();

        this.handlePayNow = this.handlePayNow.bind(this);
    }

    componentDidMount() {
        const setup = setInterval(() => {
            if (isOpen()) {
                clearInterval(setup);
                this.setPinPadConnected();
            } else {
                clearInterval(setup);
                this.setPinPadNotConnected();
            }
        }, 50);
        dispatch(resetPinPadData());
        dispatch(updateCreditAuthResponse({}));
        dispatch(resetCardType());
        dispatch(updateAuthorizationIdentificationResponse(''));
    }

    setPinPadConnected() {
        this.setState({
            updatePinPadConnected: true,
            pinPadConnected: true
        });
    }

    setPinPadNotConnected() {
        console.error('pinPad offline');
        this.setState({
            updatePinPadConnected: false,
            pinPadConnected: false
        });
    }

    initializePinPad() {
        sendPinPadMsrData(this.state.languageCode, this.state.orderTotal);
    }

    handlePayNow() {
        this.initializePinPad();
        this.setState({
            updateReadyToPay: true
        });
    }

    render() {
        const pinPadConnected = this.state.pinPadConnected;

        // var divBodyStyle = {
        //     height:"%50",
        //     width:"%100"
        // };

        return (
            <div>
                <div>
                    Ready to charge {this.state.orderTotal}
                </div>
                <div>
                    <button
                        disabled={pinPadConnected ? null : true}
                        onClick={this.handlePayNow}
                    >
                        Pay Now
                    </button>
                    <br />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ConnectToPinpadStarter/>, document.getElementById('pinpad'));
