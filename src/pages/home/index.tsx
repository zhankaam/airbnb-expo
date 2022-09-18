import React from 'react';
import { ImageBackground, Pressable, SafeAreaView, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLORS } from 'src/app/colors';
import { RootStackParams } from 'src/entities/navigation';
import { FeatherIcon } from 'src/shared/icons';

import globalStyles from '../../app/global-styles';
import CustomButton from '../../shared/ui/button';
import styles from './styled';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const goToSignUp = () => navigation.navigate('SignUp');
  const goToLogin = () => navigation.navigate('Login');
  const goToMainPage = () => navigation.navigate('Main');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./../../app/images/container.jpg')}
        resizeMode="stretch">
        <View style={styles.top}>
          <FeatherIcon name="briefcase" size={64} color={COLORS.WHITE} />
          <Text style={[styles.name, globalStyles.text]}>Homebnb</Text>
        </View>
        <Text style={[styles.title, globalStyles.text]}>Find your home away {'\n'}from home.</Text>
        <Text style={[styles.text, globalStyles.text]}>
          Exploring the globe was {'\n'}never that easy
        </Text>
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
        <Pressable style={styles.skipButton} onPress={goToMainPage}>
          <Text style={[styles.skipButtonText, globalStyles.text]}>Skip</Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
