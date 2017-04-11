/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './src/reducers';

// Components
import App from './src/components/App';

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default class uploadSaver extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}


AppRegistry.registerComponent('uploadSaver', () => uploadSaver);
