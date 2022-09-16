import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from 'src/entities/navigation';

import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styled';

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
