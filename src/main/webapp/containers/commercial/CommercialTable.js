import React, {Component} from 'react';
import CommercialApplication from '../../components/commercial/CommercialApplication';
import CommercialForm from '../../components/commercial/CommercialForm';

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
        <div name="CommercialApplication">
          <h1 style={{textAlign: 'center', margin: '0'}}>Commercial
            Accounts</h1>
          <h2 style={{
            textAlign: 'center',
            color: 'grey',
            margin: '0',
            padding: '10px',
          }}>for your business</h2>
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
          <table className="standard-table">
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