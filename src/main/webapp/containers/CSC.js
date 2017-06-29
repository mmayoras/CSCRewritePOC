/**
 * Created by MXM6930 on 6/13/2017.
 */
import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Menu from '../components/Menu';
import Commercial from './commercial/Commercial';
import Consumer from './consumer/Consumer';
import Home from '../components/Home';
import About from '../components/About';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class CSC extends Component {
  render() {
    const divMainStyle = {
      marginLeft: '20%',
      paddingTop: '1px'
    };

    return (
        <HashRouter>
          <div>
            <Menu/>
            <div style={divMainStyle}>
              {/* add the routes here */}
              <Route exact path="/" component={Home}/>
              <Route path="/consumer" component={Consumer}/>
              <Route path="/commercial" component={Commercial}/>
              <Route path="/about" component={About}/>
              <Alert stack={true} timeout={2000}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default CSC;