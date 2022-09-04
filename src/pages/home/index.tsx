import React from 'react';
import {ImageBackground, StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';
import { Dimensions } from 'react-native';
import {BriefCaseIcon} from '../../shared/icons';

const win = Dimensions.get('window');

const Home = () => (
    <SafeAreaView style={styles.container}>
        <ImageBackground
            style={styles.backgroundImage}
            source={require('./../../app/images/container.jpg')}
            resizeMode="stretch"
        >
            <View style={styles.topLevel}>
                <BriefCaseIcon style={styles.icon} />
                <Text style={styles.name}>Homebnb</Text>
            </View>
            <Text style={styles.title}>Find your home away {'\n'}from home.</Text>
            <Text style={styles.secondaryText}>Exploring the globe was {'\n'}never that easy</Text>
            <View style={styles.fixToText}>
                <Button
                    title="Sign up"
                    // onPress={() => Alert.alert('Left button pressed')}
                />
                <Button
                    title="Log in"
                    // onPress={() => Alert.alert('Right button pressed')}
                />
                <Text>Skip</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: win.width,
        height: win.height,
        color: 'white',
    },
    topLevel: {
        alignSelf: 'flex-start',
    },
    icon: {
    },
    name: {
        color: 'white',
        fontWeight: '700',
        fontSize: 34,
        fontFamily: 'PingFangHK-Regular'
    },
    title: {
        color: 'white',
        fontSize: 34,
        fontWeight: '400',
        lineHeight: 40,
        letterSpacing: 1.50,
        fontFamily: 'PingFangHK-Regular'
    },
    secondaryText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'PingFangHK-Regular',
        fontWeight: '400',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Home;
