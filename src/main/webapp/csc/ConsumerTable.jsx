import React from 'react';
import ConsumerApplication from './ConsumerApplication.jsx';
import ConsumerForm from "./ConsumerForm.jsx";

class ConsumerTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageStyle = {
      height: "200px",
      width: "300px",
      paddingLeft: "25px",
      paddingRight: "25px",
      paddingTop: "10px",
      paddingBottom: "25px"
    };

    let consumerApplications = this.props.consumerApplications.map(
        consumerApplication =>
            <ConsumerApplication key={consumerApplication._links.self.href}
                                 consumerApplication={consumerApplication}
                                 deleteConsumerApplication={this.props.deleteConsumerApplication}/>);

    return (
        <div className="container" name="ConsumerApplication">
          <b><p style={{
            textAlign: "center",
            marginBottom: "0px",
            fontSize: "2em"
          }}>Consumer Accounts</p></b>
          <p style={{textAlign: "center", fontSize: "1.5em", color: "grey"}}>for
            your home</p>
          <div style={{display: "table", width: "100%"}}>
            <div style={{width: "50%", float: "left"}}>
              <div style={{float: "right"}}>
                <img src="images/rpl.gif" style={imageStyle}/>
              </div>
            </div>
            <div style={{width: "50%", float: "right"}}>
              <img src="images/projectloanNew02APR2014.gif" style={imageStyle}/>
            </div>
          </div>
          <ConsumerForm createConsumer={this.props.createConsumer}/>
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