import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;