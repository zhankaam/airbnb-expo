import React from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';

import { signOut } from 'firebase/auth';
import Button from 'src/shared/ui/button';

import { auth } from '../../../firebase';

const MyComponent = () => {
  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <SafeAreaView>
      <Text>Profile page</Text>
      <Button text="Logout" onClick={signOutUser} />
    </SafeAreaView>
  );
};

export default MyComponent;
