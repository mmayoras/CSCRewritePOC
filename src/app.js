import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom'
import Commercial from './main/webapp/csc/Commercial.jsx';
import Consumer from './main/webapp/csc/Consumer.jsx';
import Home from './main/webapp/csc/Home.jsx';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class CSC extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divMainStyle = {
      marginLeft: "25%",
      paddingTop:"1px",
      paddingRight: "16px"
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
              <Route exact path="/" component={Home}/>
              <div style={{clear: 'both', display: "table", width: "100%"}}>
                {/* add the routes here */}
                <Route path="/consumer" component={Consumer}/>
                <Route path="/commercial" component={Commercial}/>
                <Alert stack={true} timeout={2000} />
              </div>
            </div>
          </div>
        </HashRouter>
    );
  }
}

ReactDOM.render(<CSC/>, document.getElementById('csc'));