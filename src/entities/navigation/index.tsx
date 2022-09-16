import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../pages/home';
import Login from '../../pages/login';
import SignUp from '../../pages/sign-up';

export type RootStackParams = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function Navigate() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          // options={{ title: 'Home' }}
        />
        <RootStack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
          // options={{ title: 'Sign Up' }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
          // options={{ title: 'Log In' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
