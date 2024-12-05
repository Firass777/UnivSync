import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'; // Assuming HomeScreen is your main screen
import RequestSentScreen from '../screens/RequestSentScreen';
import LoadingScreen from '../screens/LoadingScreen'; // Import LoadingScreen here
import Copyright from '../screens/Copyright';
import Administration from '../screens/Administration';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoadingScreen">
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RequestSent" component={RequestSentScreen} />
      <Stack.Screen name="Copyright" component={Copyright} options={{ headerShown: false }} />
      <Stack.Screen name="Administration" component={Administration} options={{ headerShown: false }} />
    </Stack.Navigator>

  </NavigationContainer>
);

export default Navigation;
