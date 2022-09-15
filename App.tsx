import React from 'react';
import { SafeAreaView } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Navigate from './src/entities/navigation'

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigate />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default App
