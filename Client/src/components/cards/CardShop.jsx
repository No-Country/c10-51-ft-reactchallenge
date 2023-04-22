import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CartSvg, HeartSvg } from "../svgs/Svgs";
import { useNavigation } from "@react-navigation/native";

export default function CardShop({
  title,
  description,
  type,
  image,
  id,
  isVoted,
  vote,
}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (type === "food") {
          navigation.navigate("Food", {
            foodId: id,
          });
        } else {
          navigation.navigate("Restaurant", {
            restaurantId: id,
          });
        }
      }}
    >
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
          <TouchableOpacity style={styles.buttonCart} onPress={() => {
            Alert.alert("Producto agregado al carrito✅");
          }}>
            <CartSvg width={12} height={12} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonCart} onPress={() => vote(id,isVoted)}>
            <HeartSvg
              width={12}
              height={12}
              fill="#000000"
              isPressed={isVoted}
            />
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
    elevation: 2
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
