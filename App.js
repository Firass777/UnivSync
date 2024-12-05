import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './navigation/TabNavigator';
import SubmitScreen from './screens/SubmitScreen';
import RequestSentScreen from './screens/RequestSentScreen'; // Import your SubmitScreen component
import LoadingScreen from './screens/LoadingScreen';
import Administration from './screens/Administration';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="SubmitScreen" component={SubmitScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RequestSentScreen" component={RequestSentScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Administration" component={Administration} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
