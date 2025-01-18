import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/home';
import Header from '../../components/header';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;