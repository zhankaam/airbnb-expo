import React from 'react';
import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from 'src/store';

import Navigate from './src/entities/navigation';

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Navigate />
      <StatusBar style="auto" />
    </View>
  </Provider>
);

export default App;
