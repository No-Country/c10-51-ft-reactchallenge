import React from "react";
import { View, StyleSheet, TouchableOpacity,Text } from "react-native";
import AddButtonSvg from ".././svgs/AddButtonSvg";

const AddCardButton = () => {
  return (
    <TouchableOpacity
    onPress={()=> alert("ejemplo")}
     style={styles.container}>
      <Text style={{fontFamily:'Poppins-SemiBold'}}>  Añadir Tarjeta </Text>
      <AddButtonSvg />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 251,
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    backgroundColor: 'white',
    paddingLeft:18,
    paddingRight:8,
    
  },
});

export default AddCardButton;
