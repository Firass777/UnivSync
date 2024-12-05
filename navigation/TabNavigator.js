import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Copyright from '../screens/Copyright';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5779ab', // Color of the active tab icon
        tabBarInactiveTintColor: '#888', // Color of the inactive tab icon
        tabBarStyle: {
          backgroundColor: '#f5f5f5', // Background color of the tab bar
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={Copyright}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
