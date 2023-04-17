import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { EstrellaSvg, HeartSvg } from "../svgs/Svgs";

const CardFavorite = ({ title, rating }) => {
  return (
    <View
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
    >
      <View style={{}}>
        <Text>{title}</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <EstrellaSvg height={20} width={20} />
          <Text>{rating}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonCart}>
        <HeartSvg width={16} height={16} fill="#00869F" isPressed />
      </TouchableOpacity>
    </View>
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
