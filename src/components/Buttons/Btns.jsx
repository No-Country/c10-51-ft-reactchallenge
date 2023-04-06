import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SvgAPPLE, SvgFACE, SvgGOOGLE } from "../svgs/Svgs";

export function BtnPrimaryLarge(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.btnsPrimaryLarge, backgroundColor: "#f1f1f1" }}
    >
      <Text style={{ ...styles.textBtn, color: "#00869F" }}>{text}</Text>
    </TouchableOpacity>
  );
}
export function BtnPrimaryLargeIcon(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.btnsPrimaryLarge,
        flexDirection: "row",
        gap: 8,
        backgroundColor: "#f1f1f1",
      }}
    >
      <Ionicons name="arrow-forward-outline" size={18} />
      <Text style={{ ...styles.textBtn, color: "#00869F" }}>{text}</Text>
    </TouchableOpacity>
  );
}

export function BtnPrimaryColLarge(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.btnsPrimaryLarge, backgroundColor: "#FE793D" }}
    >
      <Text style={{ ...styles.textBtn, color: "#f1f1f1" }}>{text}</Text>
    </TouchableOpacity>
  );
}

export function BtnPrimary(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.btnsPrimary, backgroundColor: "#f1f1f1" }}
    >
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
}

export function BtnPrimaryCol(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.btnsPrimary, backgroundColor: "#FE793D" }}
    >
      <Text style={{ ...styles.textBtn, color: "#f1f1f1" }}>{text}</Text>
    </TouchableOpacity>
  );
}

export function BtnAddCart(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={() => alert("ejemplo")}
      style={styles.btnAddCart}
    >
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
}

export function BtnFiltroComp(props) {
  const { text, onPress, color } = props;
  return (
    <TouchableOpacity
      onPress={() => alert("ejemplo")}
      style={{
        ...styles.btnAddCart,
        border: 1,
        width: "auto",
        paddingHorizontal: 12,
        paddingVertical: 10,
      }}
    >
      <Text style={styles.textBtn}>Filtro</Text>
    </TouchableOpacity>
  );
}

export function BtnPrimaryLargeIconGoogle(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.btnsPrimaryLarge,
        paddingLeft: 40,
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: 12,
        backgroundColor: "#f1f1f1",
      }}
    >
      <SvgGOOGLE />
      <Text style={{ ...styles.textBtn, color: "#00869F" }}>{text}</Text>
    </TouchableOpacity>
  );
}
export function BtnPrimaryLargeIconFace(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.btnsPrimaryLarge,
        paddingLeft: 40,
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: 12,
        backgroundColor: "#f1f1f1",
      }}
    >
      <SvgAPPLE />
      <Text style={{ ...styles.textBtn, color: "#00869F" }}>{text}</Text>
    </TouchableOpacity>
  );
}
export function BtnPrimaryLargeIconApple(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.btnsPrimaryLarge,
        paddingLeft: 40,
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: 12,
        backgroundColor: "#f1f1f1",
      }}
    >
      <SvgFACE />
      <Text style={{ ...styles.textBtn, color: "#00869F" }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnsPrimaryLarge: {
    width: "64%",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  textBtn: {
    fontFamily: "Poppins-SemiBold",
  },
  btnsPrimary: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  btnAddCart: {
    width: "50%",
    paddingVertical: 11,
    borderRadius: 15,
    backgroundColor: "#FE793D",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});
