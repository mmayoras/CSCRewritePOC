import React from 'react';
import $ from 'jquery';
import toastr from 'toastr';

class CommercialApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: true };
    }

    handleDelete() {
        var self = this;
        $.ajax({
            url: self.props.commercialApplication._links.self.href,
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
                <td>{this.props.commercialApplication.id}</td>
                <td>{this.props.commercialApplication.firstName}</td>
                <td>{this.props.commercialApplication.lastName}</td>
                <td>{this.props.commercialApplication.strNumber}</td>
                <td>{this.props.commercialApplication.date}</td>
                <td>
                    <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default CommercialApplication