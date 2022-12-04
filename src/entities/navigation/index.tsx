import React from 'react';

import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from 'src/entities/navigation/main-tab-navigator';
import { useAuthentication } from 'src/shared/hooks/use-authentication';

import Home from '../../pages/home';
import Login from '../../pages/login';
import SignUp from '../../pages/sign-up';

export type RootStackParams = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  Main: NavigatorScreenParams<MainStackParams>;
};

export type MainStackParams = {
  Explore: undefined;
  Wishlists: undefined;
  Trips: undefined;
  Profile: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function Navigate() {
  const { user } = useAuthentication();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        {user ? (
          <RootStack.Screen name="Main" component={MainTabNavigator} />
        ) : (
          <RootStack.Group>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="SignUp" component={SignUp} />
            <RootStack.Screen name="Login" component={Login} />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
