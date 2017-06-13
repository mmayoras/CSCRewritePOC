import React, { Component } from 'react';

class CommercialApplication extends Component {
  constructor(props) {
    super(props);
    this.deleteCommercialApplication = this.deleteCommercialApplication.bind(
        this);
  }

  deleteCommercialApplication() {
    this.props.deleteCommercialApplication(this.props.commercialApplication);
  }

  render() {
    return (
        <tr>
          <td>{this.props.commercialApplication.id}</td>
          <td>{this.props.commercialApplication.firstName}</td>
          <td>{this.props.commercialApplication.middleInitial}</td>
          <td>{this.props.commercialApplication.lastName}</td>
          <td>{this.props.commercialApplication.strNumber}</td>
          <td>{this.props.commercialApplication.date}</td>
          <td>{this.props.commercialApplication.addressLine1}</td>
          <td>{this.props.commercialApplication.addressLine2}</td>
          <td>{this.props.commercialApplication.city}</td>
          <td>{this.props.commercialApplication.state}</td>
          <td>
            <button className="btn btn-danger"
                    onClick={this.deleteCommercialApplication}>Delete
            </button>
          </td>
        </tr>
    );
  }
}

export default CommercialApplication;