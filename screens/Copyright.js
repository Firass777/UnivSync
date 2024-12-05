import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Copyright = ({ navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor: '#deeafc' }]}>
      <View style={styles.member}>
        <Text style={styles.name}>Firass Fourati</Text>
        <Text style={styles.role}>Lead Developer</Text>
        <Text style={styles.email}>firassfourati9@gmail.com</Text>
      </View>
      <View style={styles.member}>
        <Text style={styles.name}>---</Text>
        <Text style={styles.role}>Software Tester</Text>
        <Text style={styles.email}>----</Text>
      </View>
      <View style={styles.member}>
        <Text style={styles.name}>-----</Text>
        <Text style={styles.role}>UI/UX Designer</Text>
        <Text style={styles.email}>-----</Text>
      </View>
      <Text style={styles.footer}>© 2024 All Rights Reserved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
  },
  member: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  role: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    fontSize: 14,
    color: '#888',
  },
});

export default Copyright;
