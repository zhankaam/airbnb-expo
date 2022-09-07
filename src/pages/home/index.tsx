import React from 'react';
import {ImageBackground, Text, SafeAreaView, View, Pressable } from 'react-native';
import {BriefCaseIcon} from '../../shared/icons';
import CustomButton from '../../shared/ui/button';

import styles from './styled';
import {COLORS} from '../../app/colors';

const Home = () => (
    <SafeAreaView style={styles.container}>
        <ImageBackground
            style={styles.backgroundImage}
            source={require('./../../app/images/container.jpg')}
            resizeMode="stretch"
        >
            <View style={styles.top}>
                <BriefCaseIcon
                    name="briefcase"
                    size={64}
                    color={COLORS.WHITE} />
                <Text style={styles.name}>Homebnb</Text>
            </View>
            <Text style={styles.title}>Find your home away {'\n'}from home.</Text>
            <Text style={styles.text}>Exploring the globe was {'\n'}never that easy</Text>
            <View style={styles.buttonsContainer}>
                <CustomButton
                    text="Sign up"
                    buttonCustomStyles={styles.button}
                    textCustomStyles={styles.signUpButtonText}
                    onClick={() => { alert('Clicked!'); }}
                />
                <CustomButton
                    text="Log in"
                    buttonCustomStyles={[styles.button, styles.loginButton]}
                    textCustomStyles={styles.loginButtonText}
                    onClick={() => { alert('Clicked!'); }}
                />
            </View>
            <Pressable
                style={styles.skipButton}
                // onPress={() => console.log('pressed')}
            >
                <Text style={styles.skipButtonText}>Skip</Text>
            </Pressable>
        </ImageBackground>
    </SafeAreaView>
);

export default Home;
