import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';
import Variant1Tabs from './variant1-tabs';
import Variant2Tabs from './variant2-tabs';
import {RootStackParamList} from './types';
import HeaderVariation1 from '../components/HeaderVariation1';
import HeaderVariation2 from '../components/HeaderVariation2';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Variant1" component={Variant1Tabs}
      options={{
        header: () => <HeaderVariation1 />
      }}
       />
      <Stack.Screen name="Variant2" component={Variant2Tabs}
      options={{
        header: () => <HeaderVariation2 />
      }}
       />
    </Stack.Navigator>
  );
};

export default Navigation; 