import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { EstrellaSvg, HeartSvg } from "../svgs/Svgs";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const CardFavorite = ({ id, title, rating, removeVote }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        height: 62,
        width: "100%",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
        backgroundColor: "white",
      }}
      onPress={() => {
        axios.post(`https://c10-51-ft.up.railway.app/cart/creator?idUser=4`);
        navigation.navigate("Restaurant", {
          restaurantId: id,
        });
      }}
    >
      <View style={{}}>
        <Text>{title}</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <EstrellaSvg height={20} width={20} />
          <Text>{rating}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonCart}
        onPress={() => removeVote(id)}
      >
        <HeartSvg width={16} height={16} fill="#00869F" isPressed />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonCart: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: "white",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default CardFavorite;
