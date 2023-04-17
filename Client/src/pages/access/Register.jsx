import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { BtnPrimaryColLarge } from "../../components/buttons/Buttons";
import { Ionicons } from '@expo/vector-icons';
import DesingRegister from "../../components/svgs/Desing2";


const RegisterScreen = () => {
  const [text, onChangeText] = useState("");
  const [user, onChangeUser] = useState("");
  const [password, onChangePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

console.log(process.env,BASE_URL)
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 231,
          paddingTop: 24,
          justifyContent: "center",
          alignItems: "center", 
          width: "100%",
        }}
        >
        <DesingRegister style={{position:'absolute'}}/>
        <Text style={styles.primaryText}>Nombre de la APP</Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{fontFamily:'Poppins-Regular', marginBottom:16,marginTop:45,fontSize:12}}>Crear Cuenta</Text>
      </View>
      <View style={styles.containerInputs}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Ejemplo@gmail.com"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
          />
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
          placeholder="Usuario"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
        />
        <TextInput
          style={{...styles.input, marginBottom:24}}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Contrase'a"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!showPassword}

        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
        <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} color="#333" />
      </TouchableOpacity>

        <BtnPrimaryColLarge text="Registrarse" />
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            marginVertical: 24, fontSize:12, lineHeight: 14
          }}
        >
          Ya tengo cuenta.{" "}
          <Text style={{ fontFamily: "Poppins-SemiBold" }}>Ingresar aqui</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  containerInputs: {
    width: "100%",
    height: 545,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  primaryText: {
    fontFamily: "Poppins-Bold",
    color: "#00869F",
    fontSize: 30,
    lineHeight: 37,
    marginBottom: 15,
    
  },
  
  input: {
    fontSize: 10,
    lineHeight: 14,  
    fontFamily:'Poppins-Regular',  
    width:'100%',
    marginBottom:24,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center', 
    position:'absolute',
    top:135,
    right:30
  },
 
});

export default RegisterScreen;
