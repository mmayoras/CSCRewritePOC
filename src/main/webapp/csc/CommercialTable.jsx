import React from 'react';
import CommercialApplication from './CommercialApplication.jsx';
import CommercialForm from "./CommercialForm.jsx";

class CommercialTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var tableStyle = {
            float: "right",
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

        var commercialApplications = this.props.commercialApplications.map(commercialApplication =>
            <CommercialApplication key={commercialApplication._links.self.href} commercialApplication={commercialApplication} deleteCommercialApplication={this.props.deleteCommercialApplication} />);

        return (
            <div className="container" name="CommercialApplication" style={tableStyle}>
                <b><p style={{textAlign: "center", marginBottom:"0px", fontSize:"2em"}}>Commercial Accounts</p></b>
                <p style={{textAlign: "center", fontSize:"1.5em", color:"grey"}}>for your business</p>
                <div>
                    <img src="images/crcNew02APR2014.gif" style={imageStyle} />
                    <img src="images/proxNew02APR2014.gif" style={imageStyle} />
                </div>
                <CommercialForm createCommercial={this.props.createCommercial} />
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
                    <tbody>{commercialApplications}</tbody>
                </table>
            </div>);
    }
}

export default CommercialTable;