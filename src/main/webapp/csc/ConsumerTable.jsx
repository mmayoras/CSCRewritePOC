import React from 'react';
import ConsumerApplication from './ConsumerApplication.jsx';
import ConsumerForm from "./ConsumerForm.jsx";

class ConsumerTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var tableStyle = {
            float: "left",
            width: "50%"
        };

        var imageStyle = {
            height: "250px",
            width: "50%",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "25px"
        };

        var consumerApplications = this.props.consumerApplications.map(consumerApplication =>
            <ConsumerApplication key={consumerApplication._links.self.href} consumerApplication={consumerApplication} deleteConsumerApplication={this.props.deleteConsumerApplication} />);

        return (
            <div className="container" name="ConsumerApplication" style={tableStyle}>
                <b><p style={{textAlign: "center", marginBottom:"0px", fontSize:"2em"}}>Consumer Accounts</p></b>
                <p style={{textAlign: "center", fontSize:"1.5em", color:"grey"}}>for your home</p>
                <div>
                    <img src="images/rpl.gif" style={imageStyle} />
                    <img src="images/projectloanNew02APR2014.gif" style={imageStyle} />
                </div>
                <ConsumerForm createConsumer={this.props.createConsumer} />
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>Middle Initial</th>
                        <th>LastName</th>
                        <th>StoreNumber</th>
                        <th>Date</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                    </thead>
                    <tbody>{consumerApplications}</tbody>
                </table>
            </div>);
    }
}

export default ConsumerTable;