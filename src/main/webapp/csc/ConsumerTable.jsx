import React from 'react';
import ConsumerApplication from './ConsumerApplication.jsx';

class ConsumerTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var tableStyle = {
            float: "left",
            width: "50%"
        };

        var consumerApplications = this.props.consumerApplications.map(consumerApplication =>
            <ConsumerApplication key={consumerApplication._links.self.href} consumerApplication={consumerApplication} deleteConsumerApplication={this.props.deleteConsumerApplication} />);

        return (
            <div className="container" name="ConsumerApplication" style={tableStyle}>
                <b><p style={{textAlign: "center", marginBottom:"0px", fontSize:"2em"}}>Consumer Accounts</p></b>
                <p style={{textAlign: "center", fontSize:"1.5em", color:"grey"}}>for your home</p>
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
                    <tbody>{consumerApplications}</tbody>
                </table>
            </div>);
    }
}

export default ConsumerTable;