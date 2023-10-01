import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignUp } from './src/SignUp';
import { SignIn } from './src/SignIn';
import { Home } from './src/Home';
import { Chat } from './src/Chat';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Sign In' component={SignIn} options={{ title: 'Chat App' }} /> */}
        <Stack.Screen name='Sign Up' component={SignUp} options={{ title: 'Create New Account' }} />
        <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name='Chat' component={Chat} options={{ title: 'Chat' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

