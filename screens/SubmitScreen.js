import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SubmitScreen = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSubmit = () => {
    navigation.navigate('RequestSentScreen', { selectedItems });
  };

  const handleSelectItem = (item) => {
    const index = selectedItems.indexOf(item);
    if (index === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      const newSelectedItems = [...selectedItems];
      newSelectedItems.splice(index, 1);
      setSelectedItems(newSelectedItems);
    }
  };

  const isItemSelected = (item) => {
    return selectedItems.includes(item);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#deeafc' }]}>
  
      <Image source={require('../assets/image2.png')} style={styles.image2} />


      <View style={styles.table}>
        <View style={styles.tableRow}>
          <TouchableOpacity style={[styles.tableCell, isItemSelected(1) && styles.selectedCell]} onPress={() => handleSelectItem(1)}>
            <Image source={require('../assets/image3.png')} style={styles.image} />
            <Text style={styles.text}>Brouillon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tableCell, isItemSelected(2) && styles.selectedCell]} onPress={() => handleSelectItem(2)}>
            <Image source={require('../assets/image4.png')} style={styles.image} />
            <Text style={styles.text}>Suite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tableCell, isItemSelected(3) && styles.selectedCell]} onPress={() => handleSelectItem(3)}>
            <Image source={require('../assets/image5.png')} style={styles.image} />
            <Text style={styles.text}>Agrafeuse</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tableRow}>
          <TouchableOpacity style={[styles.tableCell, isItemSelected(4) && styles.selectedCell]} onPress={() => handleSelectItem(4)}>
            <Image source={require('../assets/image6.png')} style={styles.image} />
            <Text style={styles.text}>Questions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tableCell, isItemSelected(5) && styles.selectedCell]} onPress={() => handleSelectItem(5)}>
            <Image source={require('../assets/image7.png')} style={styles.image} />
            <Text style={styles.text}>Remplaçant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tableCell, isItemSelected(6) && styles.selectedCell]} onPress={() => handleSelectItem(6)}>
            <Image source={require('../assets/image8.png')} style={styles.image} />
            <Text style={styles.text}>Souci</Text>
          </TouchableOpacity>
        </View>
      </View>
        {/* Style for the button */}
        <View style={styles.buttonContainer}>
          <Button title="Envoyer" onPress={handleSubmit} color="#5779ab"/>
        </View>


      {/* Style for the text */}
      <Text style={styles.selectedItemsText}> Selectionnez vos besoins: {selectedItems.join(', ')}</Text>
      </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    marginTop : 40 ,
    position: 'absolute',
    right: 15,
    top: 15,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  topRight: {
    alignItems: 'flex-end',
  },
  table: {
    marginTop : 50 ,
    top : 25 ,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  tableCell: {
    alignItems: 'center',

  },
  selectedCell: {
    backgroundColor: 'pink',
  },
  image: {
    width: 110,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18, // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
    color: 'black', // Adjust the text color as needed
    marginTop: 1, // Adjust the margin top as needed
    fontStyle: 'italic', // Make the text italic
  },
  
  buttonContainer: {
    marginTop : 50 ,
    position: 'absolute',
    top : 450 ,
  },
  
  selectedItemsText: {
    marginTop : 60 ,
    position : 'absolute' ,
    top : 70 ,
    fontSize: 18, // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
    color: '#4c74ad', // Adjust the text color as needed
    fontStyle: 'italic', // Make the text italic
  },
});

export default SubmitScreen;
