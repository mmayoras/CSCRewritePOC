/**
 * Created by MXM6930 on 7/7/2017.
 */
import React, {Component} from 'react';
import {pinPadPhoneNumberHandlerManualEntry} from '../../pinpadUtil/requestHandlers';

class PhoneNumber extends Component {
  getPhoneNumber = () => {
    pinPadPhoneNumberHandlerManualEntry();
  };

  render() {
    return (
        <div style={this.props.divStyle}>
          <button className="btn btn-info"
                  disabled={this.props.pinpadConnected ? null : true}
                  onClick={this.getPhoneNumber}>
            Phone Number
          </button>
        </div>
    );
  }
}

export default PhoneNumber;