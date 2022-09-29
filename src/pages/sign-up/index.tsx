import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch } from 'src/app/store';
import { signUp } from 'src/entities/auth/model';
import { RootStackParams } from 'src/entities/navigation';

import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styled';

const SignUp = () => {
  const formDataInitialState = {
    email: '',
    name: '',
    phone: '',
    password: '',
    password_confirmation: '',
  };
  const [formData, setFormData] = useState(formDataInitialState);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useAppDispatch();

  const goToLogin = () => navigation.navigate('Login');

  const onEmailChangeHandler = (text: string) => {
    setFormData({ ...formData, email: text });
  };

  const onPasswordChangeHandler = (text: string) => {
    setFormData({ ...formData, password: text });
  };

  const onConfirmationPasswordChangeHandler = (text: string) => {
    setFormData({ ...formData, password_confirmation: text });
  };

  const onPhoneNumberChangeHandler = (text: string) => {
    setFormData({ ...formData, phone: text });
  };

  const onNameChangeHandler = (text: string) => {
    setFormData({ ...formData, name: text });
  };

  const onSubmit = () => {
    dispatch(signUp(formData));
    setFormData(formDataInitialState);
  };

  return (
    <AuthenticationLayout
      title="Sign Up"
      submitButtonName="Sign up"
      footerButtonName="Log in"
      footerTitle="Already have an account?"
      buttonCustomStyles={styles.button}
      footerButtonStyles={styles.footerButton}
      onFooterTextPress={goToLogin}
      onEmailChangeHandler={onEmailChangeHandler}
      onPasswordChangeHandler={onPasswordChangeHandler}
      onConfirmationPasswordChangeHandler={onConfirmationPasswordChangeHandler}
      onPhoneNumberChangeHandler={onPhoneNumberChangeHandler}
      onNameChangeHandler={onNameChangeHandler}
      onSubmit={onSubmit}
    />
  );
};

export default SignUp;
