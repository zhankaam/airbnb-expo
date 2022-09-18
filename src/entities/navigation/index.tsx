import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from 'src/entities/navigation/main-tab-navigator';

import Home from '../../pages/home';
import Login from '../../pages/login';
import SignUp from '../../pages/sign-up';

export type RootStackParams = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  Main: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function Navigate() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="SignUp" component={SignUp} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Main" component={MainTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
