import React from 'react';
import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styled';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../entities/navigation';

const SignUp = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    const goToLogin = () => navigation.navigate('Login');

    return (
        <AuthenticationLayout
            title="Sign Up"
            submitButtonName="Sign up"
            footerButtonName="Log in"
            footerTitle="Already have an account?"
            buttonCustomStyles={styles.button}
            footerButtonStyles={styles.footerButton}
            onFooterTextPress={goToLogin}
        />
    );
};

export default SignUp;
