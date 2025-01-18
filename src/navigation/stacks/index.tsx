import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/home';
import HeaderVariation1 from '../../components/HeaderVariation1';
import Variant1 from '../../screens/variant1';
import Variant2 from '../../screens/variant2';
import HeaderVariation2 from '../../components/HeaderVariation2';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} 
      
      />
      <Stack.Screen name="Variant1" component={Variant1}
        options={{
          header: () => <HeaderVariation1 />,
        }}
       />
       <Stack.Screen name="Variant2" component={Variant2} 
        options={{
          header: () => <HeaderVariation2 />,
        }}
       />
    </Stack.Navigator>
  );
}

export default StackNavigator;