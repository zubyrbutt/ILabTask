import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/home';
import Header from '../../components/header';
import Variant1 from '../../screens/variant1';
import Variant2 from '../../screens/variant2';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Variant2"
    >
      <Stack.Screen name="Home" component={HomeScreen} 
      
      />
      <Stack.Screen name="Variant1" component={Variant1}
        options={{
          header: () => <Header />,
        }}
       />
       <Stack.Screen name="Variant2" component={Variant2} />
    </Stack.Navigator>
  );
}

export default StackNavigator;