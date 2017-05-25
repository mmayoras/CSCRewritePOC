/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

import { dispatch , getState} from './dispatchIndex';
import { isOpen } from '../socket';
import { pinPadPostalCodeManualEntry, sendWelcome } from './requestHandlers';
import { resetPinPadData } from '../reducers/pinpad/actionCreators';

class ConnectToPinpadStarter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pinPadConnected: false,
            updatePinPadConnected: false,
            localZipCode: "12345"
        };

        this.getZipCode = this.getZipCode.bind(this);
        this.updateZipCode = this.updateZipCode.bind(this);
    }

    // componentWillMount() {
    //     sendWelcome();
    // }

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

    getZipCode() {
        pinPadPostalCodeManualEntry();
    }

    updateZipCode() {
        const ret = getState().pinpadCardDetails.zipCode;

        this.setState({
            localZipCode: ret
        });
    }

    render() {
        const pinPadConnected = this.state.pinPadConnected;
        const zipCode = this.state.localZipCode;

        var divButtonStyle = {
            padding: "10px",
            textAlign: "center"
        };

        var buttonStyle = {
            padding: "5px"
        };

        return (
            <div style={divButtonStyle}>
                <div>
                    Current Zip Code: {zipCode}
                </div>
                <div style={buttonStyle} >
                    <button className="btn btn-info"
                            disabled={pinPadConnected ? null : true}
                            onClick={this.getZipCode}
                    >
                        Get Data
                    </button>
                    <button className="btn btn-info"
                            disabled={pinPadConnected ? null : true}
                            onClick={this.updateZipCode}
                    >
                        Refresh Zip Code
                    </button>
                    <br />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ConnectToPinpadStarter/>, document.getElementById('pinpad'));
