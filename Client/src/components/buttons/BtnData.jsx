import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EditSvg } from "../svgs/Svgs";

export default function BtnData({ data }) {
  return (
    <View style={styles.cardContent}>
      <Text>{data}</Text>
      <EditSvg height={16} width={16} fill="#00869F" />
    </View>
  );
}
const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 6,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 3,

    backgroundColor: "white",
    height: 30,
  },
  accordionBody: {
    padding: 16,
  },
});
