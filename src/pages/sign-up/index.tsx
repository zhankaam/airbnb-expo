import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import { RootStackParams } from 'src/entities/navigation';

import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styled';

// "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzZlN2U5YjgzZmY0N2JjMTNkYzNkN2U5NWZiYWEzOTUzODA0ODUzMjI3N2IxMWE1MDRjNjUzODU0NjhiNTQwODBhYzhmOGNlOWE3MDIzOTkiLCJpYXQiOjE2NjQxMjU3NjcuNTExOTYxLCJuYmYiOjE2NjQxMjU3NjcuNTExOTY3LCJleHAiOjE2OTU2NjE3NjcuNDg1NzMyLCJzdWIiOiI4OSIsInNjb3BlcyI6W119.jtKASjOHKeelEWQHR631j7OM42nXUHMf_wpNzYll-fzsKVTByk9mgJrlCv-MLOGP7XHfyq9WsPiuBL2tgq-Pw_zcfWiXy5gAHvWpvhShIQQMc--lJlzQFE9Xg3XdGUT6ZoSURCb2kayJDaTDmFudMFqEpr7-ulKHp5dDZPnHWb7B3PJDpqzFCpqKj6QQfEoC0d6uBrpCau0pSgEHIObMdxTdTXibR9Hq5mgihqMDDAG5zcv9jTD-82HagaAzU38HB8yVij7f5YP-hhgV1zYS4z7uQ9kkQpbOAvfIt_rvYP37n8hW5I_o4LREK-KX4NqnFxA39NuTj6gZCuHmbuVOP2r-9jiBTEpBvUVEaVcLaLc5XrIRixsjvMl5EHMVtiT_z94JSmiSc4OzOXo4DRo1pF74jtUgCo0MddRyow-r5O4mS4Gw3hIkZCOFWffFjcgO_2td07uhxrKOYpIB0PoDVDrm281OeFSbj-u6cZIA28Y8JqjAlOb3G4XpTR6BbaIrtmGjLmnCrXi3dZwoecGblUNq8XIce8YHdoCBI8hhE_vQCAUdVJSBvb6rKsI-n7aqChoI_lklIWXp_xLpNl_8kJgUScjKSGdpoFi2k2wrUrr938CVhoXR9jOxTE6Tm_q2b94GqdQbwFRmfZ7bc2w-GadYmcUWLLVGAO3OMcPpWkc"
// "{"email":"Leonardozhan@gmail.com","password":"reactjs2022@","name":"Zhanat","phone":"5555551234","password_confirmation":"reactjs2022@"}"
const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

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
    axios
      .post('https://apingweb.com/api/register', formData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
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
