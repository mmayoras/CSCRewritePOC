/**
 * Created by MXM6930 on 7/6/2017.
 */
import React, {Component} from 'react';
import {pinPadDOBHandlerManualEntry} from '../../pinpadUtil/requestHandlers';

class DOB extends Component {
  getDOB = () => {
    pinPadDOBHandlerManualEntry();
  };

  render() {
    return (
        <button className="btn btn-info"
                disabled={this.props.pinpadConnected ? null : true}
                onClick={this.getDOB}
        >
          Date Of Birth
        </button>
    );
  }
}

export default DOB;
