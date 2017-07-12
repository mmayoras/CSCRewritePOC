import React from 'react';
import {render} from 'react-dom';
import CSC from './main/webapp/containers/CSC';
import {Provider} from 'react-redux';
import {createHashHistory} from 'history';
import configureStore from './main/webapp/pinpadUtil/configureStore';

const history = createHashHistory();
const store = configureStore();

render(
    <Provider store={store}>
      <CSC history={history}/>
    </Provider>, document.getElementById('csc'),
);
// ReactDOM.render(<CSC/>, document.getElementById('csc'));