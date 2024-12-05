import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RequestSentScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#deeafc' }]}>


      <Text style={styles.text}>Administration Page ! </Text>
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

  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5779ab',
  },
});

export default RequestSentScreen;
