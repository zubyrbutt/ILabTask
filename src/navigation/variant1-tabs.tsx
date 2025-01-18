import React from 'react';

import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Variant1Screen from '../screens/variant1';
import {Variant1TabParamList} from './types';
import theme from '../theme';

const Tab = createBottomTabNavigator<Variant1TabParamList>();

const styles = StyleSheet.create({
  tabIcon: {
    padding: 8,
    borderRadius: 32,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

const Variant1Tabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarStyle: {
      height: 60 + insets.bottom,
      backgroundColor: theme.colors.white,
      borderTopWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
      paddingHorizontal: 16,
    },
    tabBarItemStyle: {
      paddingVertical: 8,
    },
    tabBarActiveTintColor: theme.colors.success[500],
    tabBarInactiveTintColor: theme.colors.gray[400],
    tabBarShowLabel: false, // Hides the labels
  }}
>
  <Tab.Screen 
    name="Overview" 
    component={Variant1Screen}
    options={{
      tabBarIcon: ({focused}) => (
        <View
          style={[
            styles.tabIcon,
            {backgroundColor: focused ? theme.colors.success[500] : 'transparent'},
          ]}>
          <Feather 
            name="home" 
            size={24} 
            color={focused ? theme.colors.white : theme.colors.gray[400]} 
          />
        </View>
      ),
    }}
  />
  <Tab.Screen 
    name="Transactions" 
    component={Variant1Screen}
    options={{
      tabBarIcon: ({focused}) => (
        <View
          style={[
            styles.tabIcon,
            {backgroundColor: focused ? theme.colors.success[500] : 'transparent'},
          ]}>
          <MaterialIcons 
            name="credit-card" 
            size={24} 
            color={focused ? theme.colors.white : theme.colors.gray[400]} 
          />
        </View>
      ),
    }}
  />
  <Tab.Screen 
    name="Cards" 
    component={Variant1Screen}
    options={{
      tabBarIcon: ({focused}) => (
        <View
          style={[
            styles.tabIcon,
            {backgroundColor: focused ? theme.colors.success[500] : 'transparent'},
          ]}>
          <MaterialIcons 
            name="credit-card" 
            size={24} 
            color={focused ? theme.colors.white : theme.colors.gray[400]} 
          />
        </View>
      ),
    }}
  />
  <Tab.Screen 
    name="Settings" 
    component={Variant1Screen}
    options={{
      tabBarIcon: ({focused}) => (
        <View
          style={[
            styles.tabIcon,
            {backgroundColor: focused ? theme.colors.success[500] : 'transparent'},
          ]}>
          <MaterialIcons 
            name="settings" 
            size={24} 
            color={focused ? theme.colors.white: theme.colors.gray[400]} 
          />
        </View>
      ),
    }}
  />
</Tab.Navigator>

  );
};

export default Variant1Tabs; 