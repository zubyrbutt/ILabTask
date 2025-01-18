import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Variant2Screen from '../screens/variant2';
import {Variant2TabParamList} from './types';

const Tab = createBottomTabNavigator<Variant2TabParamList>();

const Variant2Tabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60 + insets.bottom,
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
        },
        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: '#6B7280',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen 
        name="Overview" 
        component={Variant2Screen}
        options={{
          tabBarLabel: 'Overview',
        }}
      />
      <Tab.Screen 
        name="Transactions" 
        component={Variant2Screen}
        options={{
          tabBarLabel: 'Transactions',
        }}
      />
      <Tab.Screen 
        name="Cards" 
        component={Variant2Screen}
        options={{
          tabBarLabel: 'Cards',
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Variant2Screen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default Variant2Tabs; 