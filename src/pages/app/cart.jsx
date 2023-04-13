import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AddComboButton from "../../components/buttons/AddComboButton";
import { BtnPrimary } from "../../components/buttons/Buttons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { ArrowDownSvg, ArrowTopSvg } from "../../components/svgs/Svgs";

export default function Cart() {
  const [selectDomicilio, setSelectDomicilio] = React.useState(
    "Seleccionar domicilio"
  );
  const [isClicked, setIsClicked] = React.useState(false);
  const domicilios = [
    {
      dom: "Domicilio 1",
    },
    {
      dom: "Domicilio 2",
    },
  ];
  const [data, setData] = useState(domicilios);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dropdown}>
        <TouchableOpacity
          style={styles.dropdownSelector}
          onPress={() => {
            setIsClicked(!isClicked);
          }}
        >
          <Text>{selectDomicilio}</Text>
          {isClicked ? (
            <ArrowTopSvg width={21} height={21} fill="#514E4E" />
          ) : (
            <ArrowDownSvg width={21} height={21} fill="#514E4E" />
          )}
        </TouchableOpacity>
        {isClicked ? (
          <View style={styles.dropdownArea}>
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.domicilios}
                    onPress={() => {
                      setSelectDomicilio(item.dom);
                      setIsClicked(false);
                    }}
                  >
                    <Text>{item.dom}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </View>

      <Text style={{ marginTop: 16 }}>Productos</Text>
      <View style={styles.buttonsContainer}>
        <AddComboButton />
        <AddComboButton />
        <AddComboButton />
        <AddComboButton />
        <AddComboButton />
      </View>

      <BtnPrimary text="Agregar productos" onPress={() => {}} />

      <BtnPrimary text="Aca va input cupon de descuento" onPress={() => {}} />
      <View style={styles.resumeContainer}>
        <View style={styles.resumeLine}>
          <Text>Total</Text>
          <Text>$2820</Text>
        </View>
        <View style={styles.resumeLine}>
          <Text>Envio</Text>
          <Text>$150</Text>
        </View>
        <View style={styles.resumeLine}>
          <Text>Subtotal</Text>
          <Text>$2970</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <BtnPrimary text="Siguiente" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 16,
  },
  buttonsContainer: {
    gap: 2,
    marginTop: 16,
  },
  resumeContainer: {
    gap: 2,
    marginTop: 16,
  },
  resumeLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    marginVertical: 10,
  },
  dropdownTitle: {
    alignSelf: "center",
  },
  dropdownSelector: {
    width: "90%",
    height: 40,
    borderWidth: 0.5,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
  },
  dropdownArea: {
    width: "90%",
    height: "auto",
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  domicilios: {
    width: "80%",
    height: 50,
    borderBottomWidth: 0.2,
    borderColor: "8E8E8E",
    alignSelf: "center",
    justifyContent: "center",
  },
});
