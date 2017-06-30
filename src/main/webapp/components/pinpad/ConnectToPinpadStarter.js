import React, {Component} from 'react';

import {dispatch, getState} from '../../pinpadUtil/dispatchIndex';
import {isOpen} from '../../pinpadUtil/socket';
import {
  pinPadPostalCodeManualEntry,
  pinPadDOBHandlerManualEntry,
  sendWelcome,
} from '../../pinpadUtil/requestHandlers';
import {resetPinPadData} from '../../redux/pinpad/actionCreators';

class ConnectToPinpadStarter extends Component {
  constructor() {
    super();

    this.state = {
      pinPadConnected: false,
      updatePinPadConnected: false,
      localZipCode: '',
      localDOB: '',
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

  getDOB = () => {
    pinPadDOBHandlerManualEntry();
  };

  refreshData = () => {
    const zipCode = getState().pinpadCardDetails.zipCode;
    const dob = getState().pinpadCardDetails.dob;

    this.setState({
      localZipCode: zipCode,
      localDOB: dob,
    });
  };

  render() {
    let pinPadConnected = this.state.pinPadConnected;

    const pinpadHeaderStyle = {
      padding: '5px',
      fontSize: '1.5em',
    };

    const pinpadDataDivStyle = {
      display: 'inline-block',
      padding: '5px',
    };

    return (
        <div style={{textAlign: 'center'}}>
          <p style={pinpadHeaderStyle}>PIN Pad Data</p>
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
                    onClick={this.getDOB}
            >
              Date Of Birth
            </button>
          </div>
          <div style={pinpadDataDivStyle}>
            <button className="btn btn-info"
                    disabled={pinPadConnected ? null : true}
                    onClick={this.refreshData}
            >
              Refresh Data
            </button>
          </div>
          <p style={{padding: '5px'}}>Current
            Data: {this.state.localZipCode}, {this.state.localDOB}</p>
        </div>
    );
  }
}

export default ConnectToPinpadStarter;
