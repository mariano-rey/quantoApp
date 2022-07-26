import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Router from './src/containers/router';
import store from './src/store';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
