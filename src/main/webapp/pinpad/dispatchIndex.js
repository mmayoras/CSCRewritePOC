import React from 'react';
import configureStore from '../store/configureStore';

const store = configureStore();

export const dispatch = store.dispatch;

export const getState = store.getState;
