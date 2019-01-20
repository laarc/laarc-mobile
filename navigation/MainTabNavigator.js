import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import { HomeScreen, SubmitScreen, UserScreen } from '../screens';

const HomeStack = createStackNavigator({
  home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'top',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} />
  ),
};

const SubmitStack = createStackNavigator({
  submit: SubmitScreen,
});

SubmitStack.navigationOptions = {
  tabBarLabel: 'submit',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

const UserStack = createStackNavigator({
  user: UserScreen,
});

UserStack.navigationOptions = {
  tabBarLabel: 'me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-at' : 'md-at'} />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SubmitStack,
  UserStack,
});
