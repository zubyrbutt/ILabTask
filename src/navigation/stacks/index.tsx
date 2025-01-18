import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;