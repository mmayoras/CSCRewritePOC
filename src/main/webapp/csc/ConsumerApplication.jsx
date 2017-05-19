import React from 'react';

class ConsumerApplication extends React.Component {
    constructor(props) {
        super(props);
        this.deleteConsumerApplication = this.deleteConsumerApplication.bind(this);
    }

    deleteConsumerApplication() {
        this.props.deleteConsumerApplication(this.props.consumerApplication);
    }

    render() {
        return (
            <tr>
                <td>{this.props.consumerApplication.id}</td>
                <td>{this.props.consumerApplication.firstName}</td>
                <td>{this.props.consumerApplication.lastName}</td>
                <td>{this.props.consumerApplication.strNumber}</td>
                <td>{this.props.consumerApplication.date}</td>
                <td>
                    <button className="btn btn-danger" onClick={this.deleteConsumerApplication}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default ConsumerApplication;