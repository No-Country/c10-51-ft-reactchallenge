import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchFood = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: 'gray', borderWidth: 1, borderRadius: '15px', padding: 7, width: '80%' }}>
      <Icon name="search" size={20} color="#000" />
      <TextInput
        style={{ marginLeft: 0, minWidth: '80%' }}
        placeholder="Buscar"
        placeholderTextColor="orange"
      />
      <Icon name="bars" size={20} color="#000" />
    </View>
  );
};

export default SearchFood;