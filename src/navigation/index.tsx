import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import Variant1Tabs from './variant1-tabs';
import Variant2Tabs from './variant2-tabs';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Variant1" component={Variant1Tabs} />
      <Stack.Screen name="Variant2" component={Variant2Tabs} />
    </Stack.Navigator>
  );
};

export default Navigation; 