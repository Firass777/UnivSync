import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const RequestSentScreen = ({ navigation }) => {
  const handleNavigateHome = () => {
    // Navigate to the Home screen
    navigation.navigate('Tabs', { screen: 'Home' });
  };

  return (
    <View style={[styles.container, { backgroundColor: '#deeafc' }]}>
       <Image source={require('../assets/image9.png')} style={styles.image} />
       <Image source={require('../assets/image10.png')} style={styles.image2} />

      <View style={styles.buttonContainer}>
        <Button title="Go to Home" onPress={handleNavigateHome} color="#5779ab"/>
      </View>
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
    top: 50,
    width: 100,
    height: 40,
    resizeMode: 'cover',
  },
  image2: {
    top: 30,
    width: '99%', // Make image fill container width
    height: '75%', // Make image fill container height
    resizeMode: 'cover',
  },
  buttonContainer: {
    position: 'absolute',
    top: 530, 
    
  },
});

export default RequestSentScreen;
