import React, { Component } from 'react';

class Home extends Component {

  render() {
    const imageStyle = {
      paddingLeft: "20px",
      paddingRight: "20px",
      height: "60px",
      float: "left"
    };

    const divHeaderStyle = {
      verticalAlign: "middle",
      fontSize: "3.5em",
      position: "relative",
      height: "84px"
    };

    return (
        <div>
          <img src="images/Master_Depot_Logo.jpg" style={imageStyle}/>
          <h1 style={divHeaderStyle}>Credit Services Center</h1>
        </div>
    );
  }
}

export default Home;