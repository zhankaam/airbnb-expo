import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { RootStackParams } from 'src/entities/navigation';
import { FormDataType } from 'src/services/http/auth';
import { useAppDispatch } from 'src/store';
import { signUp } from 'src/store/auth';

import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styles';

const SignUp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormDataType) => dispatch(signUp(data));

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
      onSubmit={handleSubmit(onSubmit)}
      control={control}
      errors={errors}
      watch={watch}
    />
  );
};

export default SignUp;
