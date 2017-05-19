import React from 'react';
import CommercialApplication from './CommercialApplication.jsx';

class CommercialTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var tableStyle = {
            float: "right",
            width: "50%"
        };

        var commercialApplications = this.props.commercialApplications.map(commercialApplication =>
            <CommercialApplication key={commercialApplication._links.self.href} commercialApplication={commercialApplication} deleteCommercialApplication={this.props.deleteCommercialApplication} />);

        return (
            <div className="container" name="CommercialApplication" style={tableStyle}>
                <b><p style={{textAlign: "center", marginBottom:"0px", fontSize:"2em"}}>Commercial Accounts</p></b>
                <p style={{textAlign: "center", fontSize:"1.5em", color:"grey"}}>for your business</p>
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
                    <tbody>{commercialApplications}</tbody>
                </table>
            </div>);
    }
}

export default CommercialTable;