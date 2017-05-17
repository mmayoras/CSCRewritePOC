import React from 'react';
import CommercialApplication from './CommercialApplication.jsx';

class CommercialTable extends React.Component {
    render() {
        var rows = [];
        var tableStyle = {
            float: "right",
            width: "50%"
        };

        this.props.commercialApplications.forEach(function(commercialApplication) {
            rows.push(<CommercialApplication key={commercialApplication.id.toString()} commercialApplication={commercialApplication} />);
        });
        return (
            <div className="container" name="CommercialApplication" style={tableStyle}>
                <h2 style={{textAlign: "center"}}>Commercial Accounts</h2>
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

export default CommercialTable;