import React from 'react';
import ConsumerApplication from './ConsumerApplication.jsx';

class ConsumerTable extends React.Component {
    render() {
        var rows = [];
        var tableStyle = {
            float: "left",
            width: "50%"
        };

        this.props.consumerApplications.forEach(function(consumerApplication) {
            rows.push(<ConsumerApplication key={consumerApplication.id.toString()} consumerApplication={consumerApplication} />);
        });
        return (
            <div className="container" name="ConsumerApplication" style={tableStyle}>
                <h2 style={{textAlign: "center"}}>Consumer Accounts</h2>
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

export default ConsumerTable;