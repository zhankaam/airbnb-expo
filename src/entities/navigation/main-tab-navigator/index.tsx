import React from 'react';
import { Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from 'src/app/colors';
import Explore from 'src/pages/explore';
import Profile from 'src/pages/profile';
import Trips from 'src/pages/trips';
import Wishlists from 'src/pages/wishlists';
import { AntDesignIcon, EvilIconsIcon, FontAwesome5Icon, FontAwesomeIcon } from 'src/shared/icons';

import { styles } from './styles';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesignIcon
              size={25}
              color={focused ? COLORS.SECONDARY_RED : COLORS.DARKER_GREY}
              name="search1"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused ? styles.activeLabel : styles.inactiveLabel]}>
              Explore
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlists"
        component={Wishlists}
        options={{
          tabBarIcon: ({ focused }) => (
            <EvilIconsIcon
              size={35}
              color={focused ? COLORS.SECONDARY_RED : COLORS.DARKER_GREY}
              name="heart"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused ? styles.activeLabel : styles.inactiveLabel]}>
              Wishlists
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5Icon
              size={30}
              color={focused ? COLORS.SECONDARY_RED : COLORS.DARKER_GREY}
              name="airbnb"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused ? styles.activeLabel : styles.inactiveLabel]}>
              Trips
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              size={25}
              color={focused ? COLORS.SECONDARY_RED : COLORS.DARKER_GREY}
              name="user-o"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused ? styles.activeLabel : styles.inactiveLabel]}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
