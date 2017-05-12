/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies, global-require, import/prefer-default-export */
import React from 'react';

import configureStore from '../store/configureStore';

const store = configureStore();

export const dispatch = store.dispatch;

export const getState = store.getState;
