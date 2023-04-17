import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CartSvg, HeartSvg } from "../svgs/Svgs";


export default function CardShop({ title, description, type, image, to, id,isVoted,vote }) {


	

  return (
    <TouchableOpacity style={styles.container} onPress={to}>
      <ImageBackground source={{ uri: image }} style={styles.backgroundImg}>
        <LinearGradient
          colors={["black", "transparent"]}
          style={styles.background}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {type === "food" ? (
          <TouchableOpacity style={styles.buttonCart}>
            <CartSvg width={12} height={12} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonCart} onPress={() => vote(id)}>
            <HeartSvg width={12} height={12} fill="#000000" isPressed={isVoted} />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 118,
    width: 156,
    textAlign: "start",
    borderRadius: 12,
    overflow: "hidden",
    marginLeft: 16,
  },
  textContainer: {
    paddingTop: 8,
  },
  title: {
    fontStyle: "normal",
    color: "#fff",
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 5,
    paddingHorizontal: 8,
  },
  description: {
    fontStyle: "normal",
    color: "white",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 5,
    paddingHorizontal: 8,
    maxHeight: 54,
    overflow: "hidden",
  },

  background: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 120,
    opacity: 0.8,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 20,
  },
  buttonCart: {
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: "white",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4,
    position: "absolute",
    bottom: 10,
    right: 7,
  },
});
