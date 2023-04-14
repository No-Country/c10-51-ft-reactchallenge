import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { BtnPrimaryCol } from "../../components/buttons/Buttons";

const RegisterRestaurant = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (name && address && category && phone) {
      console.log("Name:", name);
      console.log("Address:", address);
      console.log("Category:", category);
      console.log("Phone:", phone);
      console.log("Datos enviados correctamente.");
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          padding: 20,
          alignSelf: "center",
        }}
      >
        Registrá tu negocio
      </Text>
      <Text style={styles.label}>Nombre del local:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Dirección del local:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <Text style={styles.label}>Categoría del restaurant:</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <Text style={styles.label}>Teléfono de contacto:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="numeric"
      />
      <View style={{ width: "65%", alignSelf: "center" }}>
        <BtnPrimaryCol text="Comenzar" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 32,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});

export default RegisterRestaurant;
