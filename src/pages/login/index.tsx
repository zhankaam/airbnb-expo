import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styled';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../entities/navigation';

function Login() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    const goToSignUp = () => navigation.navigate('SignUp');

    return (
        <AuthenticationLayout
            title="Log in"
            submitButtonName="Log in"
            footerButtonName="Sign up"
            footerTitle="Do you need an account?"
            buttonCustomStyles={styles.button}
            footerButtonStyles={styles.footerButton}
            onFooterTextPress={goToSignUp}
        />
    );
}

export default Login;
