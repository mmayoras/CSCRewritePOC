/**
 * Created by MXM6930 on 6/29/2017.
 */
import React, { Component } from 'react';

class About extends Component {
  render() {
    const padLeft = {
      paddingLeft: "20px"
    };

    return (
        <div>
          <h2 style={padLeft}>About Us</h2>
          <p style={padLeft}>Home Depot's CSC Web Application Rewritten in React + Spring Boot by Marques Mayoras</p>
        </div>
    );
  }
}

export default About;
