import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { RootStackParams } from 'src/entities/navigation';
import { FormDataType } from 'src/services/http/auth';
import { useAppDispatch } from 'src/store';
import { login } from 'src/store/auth';

import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styles';

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormDataType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useAppDispatch();

  const goToSignUp = () => navigation.navigate('SignUp');

  const onSubmit = async (data: FormDataType) => dispatch(login(data));

  return (
    <AuthenticationLayout
      title="Log in"
      submitButtonName="Log in"
      footerButtonName="Sign up"
      footerTitle="Do you need an account?"
      buttonCustomStyles={styles.button}
      footerButtonStyles={styles.footerButton}
      onFooterTextPress={goToSignUp}
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      watch={watch}
    />
  );
}

export default Login;
