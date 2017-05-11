/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';

import { dispatch } from './dispatchIndex';
import { isOpen } from './socket';
import { sendPinPadMsrData, sendWelcome } from './pinpad/requestHandlers';
import { resetPinPadData } from './reducers/pinpad/actionCreators';
import { updateCreditAuthResponse } from './reducers/creditAuthResponse/actionCreators';
import { resetCardType } from './reducers/cardType/actionCreators';
import { updateAuthorizationIdentificationResponse } from './reducers/authorizationIdentificationResponse/actionCreators';
import { englishCurrencyFilter } from './utils/formatters';

class ConnectToPinpadStarter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pinPadConnected: false,
        };

        sendWelcome();

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
        const { updatePinPadConnected } = this.props;
        updatePinPadConnected(true);
        this.setState({
            pinPadConnected: true,
        });
    }

    setPinPadNotConnected() {
        console.error('pinPad offline');
        const { updatePinPadConnected } = this.props;
        updatePinPadConnected(false);
        this.setState({
            pinPadConnected: false,
        });
    }

    initializePinPad() {
        const { orderTotal, languageCode } = this.props;
        sendPinPadMsrData(languageCode, orderTotal);
    }

    handlePayNow() {
        const { updateReadyToPay } = this.props;
        this.initializePinPad();
        updateReadyToPay(true);
    }

    render() {
        const { orderTotal } = this.props;
        const pinPadConnected = this.state.pinPadConnected;

        return (
            <div className="card-panel__single-split">
                <div className="card-panel__single-split-instructions">
                    Ready to charge {englishCurrencyFilter(orderTotal)}
                </div>
                <div className="card-panel__single-split-checkout-buttons">
                    <button
                        className="md-button primary"
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
