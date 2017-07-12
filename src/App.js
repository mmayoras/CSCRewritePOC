import React from 'react';
import {render} from 'react-dom';
import CSC from './main/webapp/containers/CSC';
import {Provider} from 'react-redux';
import {createHashHistory} from 'history';
import configureStore from './main/webapp/pinpadUtil/configureStore';
import './main/webapp/styles/base.scss';

const history = createHashHistory();
const store = configureStore();

render(
    <Provider store={store}>
      <CSC history={history}/>
    </Provider>, document.getElementById('csc'),
);