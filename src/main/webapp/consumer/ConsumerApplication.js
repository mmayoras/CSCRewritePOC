import React, {Component} from 'react';

class ConsumerApplication extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.consumerApplication.id}</td>
          <td>{this.props.consumerApplication.firstName}</td>
          <td>{this.props.consumerApplication.middleInitial}</td>
          <td>{this.props.consumerApplication.lastName}</td>
          <td>{this.props.consumerApplication.strNumber}</td>
          <td>{this.props.consumerApplication.date}</td>
          <td>{this.props.consumerApplication.addressLine1}</td>
          <td>{this.props.consumerApplication.addressLine2}</td>
          <td>{this.props.consumerApplication.city}</td>
          <td>{this.props.consumerApplication.state}</td>
          <td>
            <button className="btn btn-danger"
                    onClick={this.props.deleteConsumerApplication(
                        this.props.consumerApplication)}>Delete
            </button>
          </td>
        </tr>
    );
  }
}

export default ConsumerApplication;