import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import Login from './src/pages/login';
// import Home from './src/pages/home';
import SignUp from './src/pages/sign-up';

function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <Home /> */}
            <SignUp />
            {/* <Login /> */}
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

export default App;
