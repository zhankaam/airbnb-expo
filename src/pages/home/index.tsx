import React from 'react';
import {ImageBackground, Text, SafeAreaView, View, Pressable } from 'react-native';
import {BriefCaseIcon} from '../../shared/icons';
import CustomButton from '../../shared/ui/button';
import {COLORS} from '../../app/colors';

import globalStyles from '../../app/global-styles';

import styles from './styled';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../entities/navigation';

const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    const goToSignUp = () => navigation.navigate('SignUp');
    const goToLogin = () => navigation.navigate('Login');

    return (
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
                        color={COLORS.WHITE}/>
                    <Text style={[styles.name, globalStyles.text]}>Homebnb</Text>
                </View>
                <Text style={[styles.title, globalStyles.text]}>Find your home away {'\n'}from home.</Text>
                <Text style={[styles.text, globalStyles.text]}>Exploring the globe was {'\n'}never that easy</Text>
                <View style={styles.buttonsContainer}>
                    <CustomButton
                        text="Sign up"
                        buttonCustomStyles={styles.button}
                        textCustomStyles={styles.signUpButtonText}
                        onClick={goToSignUp}
                    />
                    <CustomButton
                        text="Log in"
                        buttonCustomStyles={[styles.button, styles.loginButton]}
                        textCustomStyles={[styles.loginButtonText, globalStyles.text]}
                        onClick={goToLogin}
                    />
                </View>
                <Pressable
                    style={styles.skipButton}
                    // onPress={() => console.log('pressed')}
                >
                    <Text style={[styles.skipButtonText, globalStyles.text]}>Skip</Text>
                </Pressable>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default Home;
