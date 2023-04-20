import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ArrowSvg, CartSvg, LupaSvg } from "../svgs/Svgs";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavBarRestaurant = () => {

  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        width: "100%",
        top: 30,
        justifyContent: "space-between",
        paddingHorizontal: 16,
      }}
    >
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.goBack()}
      >
        <ArrowSvg height={10} width={10} fill="#000000" rotating={90} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Cart")}
        >
          <CartSvg height={13} width={13} fill="#000000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Search")}
        >
          <LupaSvg height={13} width={13} fill="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    width: 35,
    height: 35,
    backgroundColor: "#ffffff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 15,
  }
});
export default NavBarRestaurant;
