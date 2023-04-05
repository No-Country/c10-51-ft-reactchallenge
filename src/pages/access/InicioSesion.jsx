import React from "react";
import {
     View, 
     StyleSheet, 
     Text, 
    } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { BtnPrimaryLarge } from "../../components/Buttons/Btns";
import { BtnPrimaryIconDef } from "../../components/Buttons/BtnsIcon"
const InicioSesion = () => {
  return (
    <View>
      <Text>NOMBRE</Text>
      <BtnPrimaryLarge text="register" />
      <Text>
        Ya tengo cuenta. <Text>Ingresar aqui</Text>
      </Text>
      <BtnPrimaryIconDef text="registrarse con google" />
      <BtnPrimaryIconDef text="registrarse con facebook" />
      <BtnPrimaryIconDef text="registrarse con apple" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default InicioSesion;
