import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch } from 'src/app/store';
import { login } from 'src/entities/auth/model';
import { RootStackParams } from 'src/entities/navigation';

import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styles';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useAppDispatch();

  const goToSignUp = () => navigation.navigate('SignUp');

  const onEmailChangeHandler = (text: string) => {
    setFormData({ ...formData, email: text });
  };

  const onPasswordChangeHandler = (text: string) => {
    setFormData({ ...formData, password: text });
  };

  const onSubmit = () => dispatch(login(formData));

  return (
    <AuthenticationLayout
      title="Log in"
      submitButtonName="Log in"
      footerButtonName="Sign up"
      footerTitle="Do you need an account?"
      buttonCustomStyles={styles.button}
      footerButtonStyles={styles.footerButton}
      onFooterTextPress={goToSignUp}
      onEmailChangeHandler={onEmailChangeHandler}
      onPasswordChangeHandler={onPasswordChangeHandler}
      onSubmit={onSubmit}
    />
  );
}

export default Login;
