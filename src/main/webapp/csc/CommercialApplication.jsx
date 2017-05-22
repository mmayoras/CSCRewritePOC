import React from 'react';

class CommercialApplication extends React.Component {
    constructor(props) {
        super(props);
        this.deleteCommercialApplication = this.deleteCommercialApplication.bind(this);
    }

    deleteCommercialApplication() {
        this.props.deleteCommercialApplication(this.props.commercialApplication);
    }

    render() {
        return (
            <tr>
                <td>{this.props.commercialApplication.id}</td>
                <td>{this.props.commercialApplication.firstName}</td>
                <td>{this.props.commercialApplication.lastName}</td>
                <td>{this.props.commercialApplication.strNumber}</td>
                <td>{this.props.commercialApplication.date}</td>
                <td>
                    <button className="btn btn-danger" onClick={this.deleteCommercialApplication}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default CommercialApplication;