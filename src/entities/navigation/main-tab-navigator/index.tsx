import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from 'src/app/colors';
import Explore from 'src/pages/explore';
import Profile from 'src/pages/profile';
import Trips from 'src/pages/trips';
import Wishlists from 'src/pages/wishlists';
import { AntDesignIcon, EvilIconsIcon, FontAwesome5Icon, FontAwesomeIcon } from 'src/shared/icons';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: () => <AntDesignIcon size={25} color={COLORS.BLACK} name="search1" />,
        }}
      />
      <Tab.Screen
        name="Wishlists"
        component={Wishlists}
        options={{
          tabBarIcon: () => <EvilIconsIcon size={35} color={COLORS.BLACK} name="heart" />,
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarIcon: () => <FontAwesome5Icon size={30} color={COLORS.BLACK} name="airbnb" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <FontAwesomeIcon size={25} color={COLORS.BLACK} name="user-o" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
