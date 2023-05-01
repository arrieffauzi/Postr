import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const FloatingButton = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{navigation.navigate('NewPost')}}>
          <Icon name="plus" size={35} color='black'/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonContainer:{
    backgroundColor:'lightblue',
    padding:10,
    borderRadius:50
  }
});
