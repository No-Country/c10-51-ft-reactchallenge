import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { RelojSvg, EstrellaSvg } from "../svgs/Svgs";

import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const CardEnvio = ({ title, address, image, deliverTime, score ,id}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        axios.post(`https://c10-51-ft.up.railway.app/cart/creator?idUser=4`)
        navigation.navigate("Restaurant", {
          restaurantId: id,
        });
      }}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        style={styles.linear}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{address}</Text>
        </View>
        <View style={styles.titles}>
          <View style={styles.contentTitles}>
            <EstrellaSvg width={18} height={18} />
            <Text style={styles.text}>{score}</Text>
          </View>
          <View style={styles.contentTitles}>
            <RelojSvg width={15} height={15} />
            <Text style={styles.text}>{`${deliverTime} min.`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 152,
    width: "100%",
    textAlign: "start",
    borderRadius: 20,
    zIndex: 10,
    overflow: "hidden",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  content: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titles: {
    justifyContent: "space-between",
  },
  contentTitles: {
    flexDirection: "row",
    gap: 5,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 12,
  },
  text: {
    fontSize: 12,
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

export default CardEnvio;
