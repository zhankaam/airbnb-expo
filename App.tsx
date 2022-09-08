import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
// import Home from './src/pages/home';
import SignUp from './src/pages/sign-up';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/*<Home />*/}
            <SignUp />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
