import React, {Component} from 'react';

import {dispatch, getState} from '../../pinpadUtil/dispatchIndex';
import {isOpen} from '../../pinpadUtil/socket';
import {
  pinPadPostalCodeManualEntry,
  sendWelcome,
} from '../../pinpadUtil/requestHandlers';
import {resetPinPadData} from '../../redux/pinpad/actionCreators';

class ConnectToPinpadStarter extends Component {
  constructor() {
    super();

    this.state = {
      pinPadConnected: false,
      updatePinPadConnected: false,
      localZipCode: '12345',
    };
  }

  componentDidMount = () => {
    const setup = setInterval(() => {
      if (isOpen()) {
        clearInterval(setup);
        this.setState({
          updatePinPadConnected: true,
          pinPadConnected: true,
        });
      } else {
        clearInterval(setup);
        console.error('pinPad offline');
        this.setState({
          updatePinPadConnected: false,
          pinPadConnected: false,
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
      localZipCode: ret,
    });
  };

  render() {
    let pinPadConnected = this.state.pinPadConnected;

    const pinpadHeaderStyle = {
      padding: '10px',
      fontSize: '1.5em',
      textAlign: 'center',
    };

    const pinpadDataDivStyle = {
      display: 'inline-block',
      padding: '5px',
    };

    return (
        <div>
          <p style={pinpadHeaderStyle}>PIN Pad Data</p>
          <div>
            <div style={pinpadDataDivStyle}>
              <button className="btn btn-info"
                      disabled={pinPadConnected ? null : true}
                      onClick={this.sendWelcomeMessage}>
                Home
              </button>
            </div>
            <div style={pinpadDataDivStyle}>
              <button className="btn btn-info"
                      disabled={pinPadConnected ? null : true}
                      onClick={this.getZipCode}
              >
                Zip Code
              </button>
            </div>
            <div style={pinpadDataDivStyle}>
            <button className="btn btn-info"
                    disabled={pinPadConnected ? null : true}
                    // onClick={this.getZipCode}
            >
              Date Of Birth
            </button>
          </div>
            <div style={pinpadDataDivStyle}>
              <button className="btn btn-info"
                      disabled={pinPadConnected ? null : true}
                      onClick={this.updateZipCode}
              >
                Refresh Data
              </button>
            </div>
          </div>
          <p style={{padding: '5px'}}>Current Data: {this.state.localZipCode}</p>
        </div>
    );
  }
}

export default ConnectToPinpadStarter;
