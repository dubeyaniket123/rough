/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { View } from 'react-native';
// eslint-disable-next-line no-unused-vars
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from '../uicomponents/colors';
import More from './More';

import Offers from './Offers';
import MCI from 'react-native-vector-icons/AntDesign';
import Profile from './Profile'
import Task from './Task';

import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 105,
          borderTopWidth: 10,
          elevation: 10
        },
        showLabel: true,
        activeTintColor: COLORS.primary
      }}>
      <Tab.Screen
        name="my Space"
        component={Task}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
          source={require('../assets/Girl.png')}
          style={{
            resizeMode: 'contain',
            height: 30,
            width: 30,
            borderRadius:50
          }}
        /> 
          )
        }}
      />
      <Tab.Screen
        name="Home"
        component={Offers}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} />
          )
        }}
      />
     
      <Tab.Screen
        name="my team"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MCI name="team" color={color} size={28} />
          )
        }}
      />
      <Tab.Screen
        name="setting"
        component={More}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MCI name="setting" color={color} size={28} />

          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
