import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SVGevaoptions } from '../svgs/Svgs';

const CircleButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
      <SVGevaoptions/>    
       </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
  button: {

    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
});

export default CircleButton;
