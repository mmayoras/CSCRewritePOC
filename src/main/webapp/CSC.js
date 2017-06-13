/**
 * Created by MXM6930 on 6/13/2017.
 */
import React, { Component } from 'react';
import {HashRouter, Route, Link} from 'react-router-dom'
import Commercial from './commercial/Commercial';
import Consumer from './consumer/Consumer.js';
import Home from './Home.js';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class CSC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divMainStyle = {
      marginLeft: "20%",
      paddingTop: "1px"
    };

    return (
        <HashRouter>
          <div>
            <ul role="nav">
              <li><Link className="active" to="/">Home</Link></li>
              <li><Link to="/consumer">Consumer Credit App</Link></li>
              <li><Link to="/commercial">Commercial Credit App</Link></li>
              {/*<li><a href="#about">About</a></li>*/}
            </ul>
            <div style={divMainStyle}>
              {/* add the routes here */}
              <Route exact path="/" component={Home}/>
              <Route path="/consumer" component={Consumer}/>
              <Route path="/commercial" component={Commercial}/>
              <Alert stack={true} timeout={2000}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default CSC;