import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/pages/home';
import {BriefCaseIcon} from './src/shared/icons';

export default function App() {
    return (
        <View style={styles.container}>
            <Home />
            <BriefCaseIcon />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:  {
        width: 30,
        height: 30,
    }
});
