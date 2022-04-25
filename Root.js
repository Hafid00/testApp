import React from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {App} from './src/index';
import {NavigationContainer} from '@react-navigation/native';

const Root = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

export default Root;
