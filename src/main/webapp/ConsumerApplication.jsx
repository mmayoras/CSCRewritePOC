import React from 'react';
import $ from 'jquery';
import toastr from 'toastr';

class ConsumerApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: true };
    }

    handleDelete() {
        var self = this;
        $.ajax({
            url: self.props.consumerApplication._links.self.href,
            type: 'DELETE',
            success: function(result) {
                self.setState({display: false});
            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error(xhr.responseJSON.message);
            }
        });
    }

    render() {
        if (this.state.display==false) return null;
        else return (
            <tr>
                <td>{this.props.consumerApplication.id}</td>
                <td>{this.props.consumerApplication.firstName}</td>
                <td>{this.props.consumerApplication.lastName}</td>
                <td>{this.props.consumerApplication.strNumber}</td>
                <td>{this.props.consumerApplication.date}</td>
                <td>
                    <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default ConsumerApplication;