import React from 'react';
import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from 'src/app/store';

import Navigate from './src/entities/navigation';
function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Navigate />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

export default App;
