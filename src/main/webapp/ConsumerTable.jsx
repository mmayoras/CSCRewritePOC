import React from 'react';
import ConsumerApplication from './ConsumerApplication.jsx';

export default class ConsumerTable extends React.Component() {
    render() {
        var rows = [];
        var tableStyle = {
            float: "left",
            textAlign: "center",
            width: "50%"
        };

        this.props.consumerApplications.forEach(function(consumerApplication) {
            rows.push(<ConsumerApplication consumerApplication={consumerApplication} />);
        });
        return (
            <div className="container" name="ConsumerApplication" style={tableStyle}>
                <h2>Consumer Accounts</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>StoreNumber</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>);
    }
}