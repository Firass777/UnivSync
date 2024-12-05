import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const RequestSentScreen = ({ navigation }) => {
  // Define a function to navigate to the home screen after a delay
  const navigateToHomeAfterDelay = () => {
    setTimeout(() => {
      // Navigate to the Home screen
      navigation.navigate('Tabs', { screen: 'Home' });
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  // Call the function to navigate after the component mounts
  useEffect(() => {
    navigateToHomeAfterDelay();
  }, []); // Empty dependency array to ensure the effect runs only once after the component mounts

  return (
    <View style={[styles.container, { backgroundColor: '#deeafc' }]}>
       <Image source={require('../assets/image9.png')} style={styles.image} />
       <Image source={require('../assets/image2.png')} style={styles.image2} />

      {/* No need for a button to navigate */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  image: {
    position: 'absolute',
    left: 3,
    top: 60,
    width: 100,
    height: 40,
    resizeMode: 'cover',
  },
  image2: {
    top: 40,
    width: '90%', // Make image fill container width
    height: '75%', // Make image fill container height
    resizeMode: 'cover',
  },
});

export default RequestSentScreen;
