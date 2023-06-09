import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { BtnPrimaryColLarge } from "../../components/buttons/Buttons";
import { Ionicons } from '@expo/vector-icons';
import DesingRegister from "../../components/svgs/Desing2";
import { useForm, Controller } from "react-hook-form";
import { useContext } from 'react';
import { LoginContext } from '../../../context/loginContext';




const Login = () => {

  const { login, logFunction } = useContext(LoginContext);

 
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //form
  const {control,handleSubmit,formState: { errors },} = useForm({
    defaultValues: {
      UserName: "",
      Password: "",
    },
  });
  const onSubmit = (data) => {
    logFunction();
    console.log(data)
    }


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

        <Text style={styles.primaryText}>Bot Appetite</Text>
      </View>
      <View style={{ paddingHorizontal: 16, marginTop:20 }}>
        <Text style={{fontFamily:'Poppins-Regular', marginVertical:16,fontSize:12}}>Iniciar Sesion</Text>
      </View>
      <View style={styles.containerInputs}>

      <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
          
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          placeholder="Usuario"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
        />
        )}
        name="UserName"
      />
      {errors.UserName?.type === "required" && (
        <Text style={styles.required}>Debe completar este campo.</Text>
      )}
    
    <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
          
        <TextInput
          style={{...styles.input, marginBottom:24}}
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          placeholder="Contrase'a"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!showPassword}

        />
        )}
        name="Password"
      />
      {errors.Password?.type === "required" && (
        <Text style={{ ...styles.required, top:76,right:60}}>Debe completar este campo.</Text>
      )}
        <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
        <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} color="#333" />
      </TouchableOpacity>

        <BtnPrimaryColLarge text="Iniciar Sesion"  onPress={handleSubmit(onSubmit)}
 />
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            marginVertical: 24, fontSize:12, lineHeight: 14
          }}
        >
          No tengo cuenta.{" "}
          <Text style={{ fontFamily: "Poppins-SemiBold" }}>Registrarse aqui</Text>
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
  required: {
    color: "red",
    fontSize: 12,
    position: "absolute",
    right: 23,
    top: 13,
  },
  containerInputs: {
    width: "100%",
    height: 545,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  primaryText: {
    fontFamily: "Poppins-Bold",
    color: "white",
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
    top:71,
    right:30
  },
 
});

export default Login;

