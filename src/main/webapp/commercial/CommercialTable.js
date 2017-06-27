import React, { Component } from 'react';
import CommercialApplication from './CommercialApplication';
import CommercialForm from "./CommercialForm";

class CommercialTable extends Component {
  render() {
    const imageStyle = {
      height: '200px',
      width: '300px',
      paddingLeft: '25px',
      paddingRight: '25px',
      paddingTop: '10px',
      paddingBottom: '25px',
    };

    let commercialApplications = this.props.commercialApplications.map(
        commercialApplication =>
            <CommercialApplication key={commercialApplication._links.self.href}
                                   commercialApplication={commercialApplication}
                                   deleteCommercialApplication={this.props.deleteCommercialApplication}
            />,
    );

    return (
        <div className="container" name="CommercialApplication">
          <b><p style={{
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '0px',
            fontSize: '2em',
          }}>Commercial Accounts</p></b>
          <p style={{textAlign: 'center', fontSize: '1.5em', color: 'grey'}}>for
            your business</p>
          <div style={{display: 'table', width: '100%'}}>
            <div style={{width: '50%', float: 'left'}}>
              <div style={{float: 'right'}}>
                <img src='/images/crcNew02APR2014.gif'
                     alt="commercial card" style={imageStyle}/>
              </div>
            </div>
            <div style={{width: '50%', float: 'right'}}>
              <img src='/images/proxNew02APR2014.gif'
                   alt="commercial card" style={imageStyle}/>
            </div>
          </div>
          <CommercialForm createCommercial={this.props.createCommercial}/>
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