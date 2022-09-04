import React from 'react';
import {View, ImageBackground, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

const Home = () => (
    <View style={styles.container}>
        <ImageBackground
            style={styles.backgroundImage}
            source={require('./../../app/images/container.jpg')}
            resizeMode="stretch"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: win.width,
        height: win.height,
        resizeMode: 'contain',
    },
});

export default Home;
