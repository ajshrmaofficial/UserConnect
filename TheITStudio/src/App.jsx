import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import Welcome from './components/Welcome';
import Form from './components/Form';
import SubmitScreen from './components/SubmitScreen';
import UserProvider from './utility/userProvider';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Welcome} />
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="SubmitScreen" component={SubmitScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
