import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Button, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedClasse, setSelectedClasse] = useState(''); // Default value for Classe dropdown
  const [selectedNiveau, setSelectedNiveau] = useState(''); // Default value for Niveau dropdown
  const [showClasseModal, setShowClasseModal] = useState(false);
  const [showNiveauModal, setShowNiveauModal] = useState(false);

  
  const handleSelectClasse = (classe) => {
    setSelectedClasse(classe);
    setShowClasseModal(false);
  };

  const handleSelectNiveau = (niveau) => {
    setSelectedNiveau(niveau);
    setShowNiveauModal(false);
  };

  const handleSubmit = () => {
    if (name.toLowerCase() === 'admin') {
      // Navigate to a specific page when "administration" is entered
      navigation.navigate('Administration');
    } else {
      // Navigate to the SubmitScreen for other names
      navigation.navigate('SubmitScreen');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: '#deeafc' }]}>
      <Image source={require('../assets/image2.png')} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.label}>Nom et Prenom:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>N° Salle:</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => setShowClasseModal(true)}>
          <Text>{selectedClasse}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Niveau:</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => setShowNiveauModal(true)}>
          <Text>{selectedNiveau}</Text>
        </TouchableOpacity>
      </View>

      {/* Classe Modal for displaying options */}
      <Modal
        visible={showClasseModal} 
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectClasse('Salle 01')}>
              <Text>Salle 01</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectClasse('Salle 02')}>
              <Text>Salle 02</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectClasse('Salle 03')}>
              <Text>Salle 03</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectClasse('Salle 04')}>
              <Text>Salle 04</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectClasse('Salle 05')}>
              <Text>Salle 05</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectClasse('Salle 06')}>
              <Text>Salle 06</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectClasse('Salle 07')}>
              <Text>Salle 07</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectClasse('Salle 08')}>
              <Text>Salle 08</Text>
            </TouchableOpacity>

            {/* Add more options as needed */}
          </View>
        </View>
      </Modal>

      {/* Niveau Modal for displaying options */}
      <Modal
        visible={showNiveauModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectNiveau('1ere année')}>
              <Text>1ere année </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectNiveau('2ème année')}>
              <Text>2ème année</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectNiveau('3ème année')}>
              <Text>3ème année</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectNiveau('4ème année')}>
              <Text>4ème année</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelectNiveau('5ème année')}>
              <Text>5ème année</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

      <Button title="Entrer" onPress={handleSubmit} color="#4c74ad" />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    position: 'absolute',
    right: 15,
    top: 15,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  textContainer: {
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000', 
    textAlign: 'left', 
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 3,
    borderColor: '#5779ab',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#deeafc', 
  },
  dropdownButton: {
    width: '100%',
    height: 40,
    borderWidth: 3,
    borderColor: '#5779ab',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#deeafc', 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default HomeScreen
