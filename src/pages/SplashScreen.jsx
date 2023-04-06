import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  BtnPrimaryLarge,
  BtnPrimaryLargeIcon,
  BtnPrimaryLargeIconApple,
  BtnPrimaryLargeIconFace,
  BtnPrimaryLargeIconGoogle,
} from "../components/Buttons/Btns";
import { BtnPrimaryIconDef } from "../components/Buttons/BtnsIcon";
import Ilustracion from "../components/svgs/Ilustracion";
import Desing from "../components/svgs/Desing";
//navigate
import { useNavigation } from "@react-navigation/native";

export const SplashScreen = () => {
  const navigation = useNavigation();
  const toRegister = () => {
    navigation.navigate("Register");
  };

  const toLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.viewContainer}>
      <View
        style={{ ...styles.viewContainer, alignItems: "center", marginTop: 58 }}
      >
        <Ilustracion />
      </View>
      <View style={styles.container}>
        <Desing style={{ position: "absolute" }} />
        <Text style={styles.primaryText}>MessirveAPP</Text>
        <BtnPrimaryLarge text="Registrarse" onPress={() => toRegister()} />
        <Text
          onPress={() => toLogin()}
          style={{
            fontFamily: "Poppins-Regular",
            color: "white",
            marginVertical: 30,
          }}
        >
          Ya tengo cuenta.{" "}
          <Text style={{ fontFamily: "Poppins-SemiBold" }}>Ingresar aqui</Text>
        </Text>
        <BtnPrimaryLargeIconGoogle text="Registrarse con Google" />
        <BtnPrimaryLargeIconFace text="Registrarse con Facebook" />
        <BtnPrimaryLargeIconApple text="Registrarse con Apple" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    //backgroundColor:'#FE793D',
  },
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 47,
    height: "58%",
  },
  primaryText: {
    fontFamily: "Poppins-Bold",
    color: "#00869F",
    fontSize: 30,
    lineHeight: 37,
    marginBottom: 15,
  },
});
