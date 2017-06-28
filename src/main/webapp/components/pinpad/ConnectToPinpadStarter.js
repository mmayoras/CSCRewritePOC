import React, {Component} from 'react';

import {dispatch, getState} from '../../pinpadUtil/dispatchIndex';
import {isOpen} from '../../pinpadUtil/socket';
import {pinPadPostalCodeManualEntry, sendWelcome} from '../../pinpadUtil/requestHandlers';
import {resetPinPadData} from '../../redux/pinpad/actionCreators';

class ConnectToPinpadStarter extends Component {
  constructor() {
    super();

    this.state = {
      pinPadConnected: false,
      updatePinPadConnected: false,
      localZipCode: "12345"
    };
  }

  componentDidMount = () => {
    const setup = setInterval(() => {
      if (isOpen()) {
        clearInterval(setup);
        this.setState({
          updatePinPadConnected: true,
          pinPadConnected: true
        });
      } else {
        clearInterval(setup);
        console.error('pinPad offline');
        this.setState({
          updatePinPadConnected: false,
          pinPadConnected: false
        });
      }
    }, 50);

    dispatch(resetPinPadData());
  };

  sendWelcomeMessage = () => {
    sendWelcome();
  };

  getZipCode = () => {
    pinPadPostalCodeManualEntry();
  };

  updateZipCode = () => {
    const ret = getState().pinpadCardDetails.zipCode;

    this.setState({
      localZipCode: ret
    });
  };

  render() {
    let pinPadConnected = this.state.pinPadConnected;
    let zipCode = this.state.localZipCode;

    const divButtonStyle = {
      padding: "10px",
      textAlign: "center"
    };

    const buttonStyle = {
      padding: "5px"
    };

    return (
        <div style={divButtonStyle}>
          <div>
            Current Zip Code: {zipCode}
          </div>
          <div style={buttonStyle}>
            <button className="btn btn-info"
                    disabled={pinPadConnected ? null : true}
                    onClick={this.sendWelcomeMessage}>
              Home
            </button>
            <button className="btn btn-info"
                    disabled={pinPadConnected ? null : true}
                    onClick={this.getZipCode}
            >
              Get Zip Code
            </button>
            <button className="btn btn-info"
                    disabled={pinPadConnected ? null : true}
                    onClick={this.updateZipCode}
            >
              Refresh Page
            </button>
            <br />
          </div>
        </div>
    );
  }
}

export default ConnectToPinpadStarter;
