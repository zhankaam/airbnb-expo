import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import Navigate from './src/entities/navigation';

function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navigate />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

export default App;
