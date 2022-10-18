import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'src/app/store';
// import { setAuthError, signUp } from 'src/entities/auth/model';
import { RootStackParams } from 'src/entities/navigation';
import { FormDataType } from 'src/shared/api/auth';

import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styles';

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
  const {
    control,
    handleSubmit,
    formState, // : { errors }
  } = useForm<FormDataType>({
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      password_confirmation: '',
    },
  });

  console.log({ control, handleSubmit, formState });
  const onSubmit = (data: any) => console.log(data);

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

  // const onSubmit = () => {
  //   const { email, name, phone, password, password_confirmation } = formData;
  //
  //   if (!email) {
  //     dispatch(setAuthError('email is required'));
  //   } else if (!name) {
  //     dispatch(setAuthError('name is required'));
  //   } else if (!phone) {
  //     dispatch(setAuthError('phone is required'));
  //   } else if (!password) {
  //     dispatch(setAuthError('password is required'));
  //   } else if (!password_confirmation) {
  //     dispatch(setAuthError('password_confirmation is required'));
  //   } else {
  //     dispatch(signUp(formData));
  //     setFormData(formDataInitialState);
  //   }
  // };

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
      onSubmit={handleSubmit(onSubmit)}
      control={control}
    />
  );
};

export default SignUp;
