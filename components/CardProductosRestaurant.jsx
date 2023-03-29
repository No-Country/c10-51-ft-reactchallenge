import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";




const CardProductosRestaurant = () => {
  const image = {
    uri: "https://www.clarin.com/img/2022/05/27/la-hamburguesa-mucho-mas-que___0HXb0UR0v_1256x620__2.jpg#1653659778281",
  };
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']} style={styles.linear}/>

      <View style={styles.textContainer}>
        <View style={{ textAlign: "left", width: "100%" }}>
          <Text style={{ fontWeight: "bold", marginBottom:5 }}>Titulo</Text>
          <Text style={{ fontSize: 10 }}>Descripcion</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            // código a ejecutar al presionar el botón
          }}
        >
          <Feather
            name="shopping-cart"
            size={15}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 155,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.2,
  },
  image: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
    height: "60%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    paddingHorizontal: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    flex: 1,
  },
  icon: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "black",
    padding: 8,
  },
  linear: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "30%",
    borderRadius: 10,
    opacity: 0.8,
  },

});

export default CardProductosRestaurant;
