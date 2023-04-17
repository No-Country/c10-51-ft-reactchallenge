import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { CardShop } from "../../components/swipers/CardsSwiper";
import AddComboButton from "../../components/buttons/AddComboButton";
import { BtnPrimaryCol, BtnPrimaryColLarge, BtnPrimaryColLargee } from "../../components/buttons/Buttons";
import { AddButtonSvg } from "../../components/svgs/Svgs";
const Ordenar = () => {
  return (
    <View style={{ color: "#1A1A1A" }}>
      <View style={styles.imgContainer}>
        <Text>imagen</Text>
      </View>

      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            paddingHorizontal: 16,
            fontSize: 16,
          }}
        >
          Hamburguesa con cheddar y papas fritas
        </Text>

        <Text
          style={{
            fontFamily: "Poppins-Light",
            paddingHorizontal: 16,
            fontSize: 12,
            marginTop: 8,
          }}
        >
          Doble medallón de carne, doble panceta, doble queso cheddar y doble
          cebolla morada.
        </Text>

        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            paddingHorizontal: 16,
            fontSize: 16,
            marginTop: 29,
            marginBottom: 24,
          }}
        >
          Agregale a tu combo
        </Text>

        <View
          style={{
            height: 290,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <AddComboButton />
            <View
              style={{
                borderBottomColor: "#999999",
                borderBottomWidth: 0.5,
                marginVertical: 8,
              }}
            ></View>
            <AddComboButton />
            <View
              style={{
                borderBottomColor: "#999999",
                borderBottomWidth: 0.5,
                marginVertical: 8,
              }}
            ></View>

            <AddComboButton />
            <View
              style={{
                borderBottomColor: "#999999",
                borderBottomWidth: 0.5,
                marginVertical: 8,
              }}
            ></View>

            <AddComboButton />
            <View
              style={{
                borderBottomColor: "#999999",
                borderBottomWidth: 0.5,
                marginVertical: 8,
              }}
            ></View>

            <AddComboButton />
            <View
              style={{
                borderBottomColor: "#999999",
                borderBottomWidth: 0.5,
                marginVertical: 8,
              }}
            ></View>

            <AddComboButton />

            <View
              style={{
                borderBottomColor: "#999999",
                borderBottomWidth: 0.5,
                marginVertical: 8,
              }}
            ></View>
          </ScrollView>
        </View>
        <View style={{flexDirection:'row', alignItems:"center", justifyContent:'space-between', marginHorizontal:16, marginTop:20}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <AddButtonSvg type={"rest"}/>
            <Text style={{width:54, textAlign:'center'}}>0</Text>
            <AddButtonSvg/>
          </View>
          
            <BtnPrimaryColLargee text='Anadir $2400'/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    minWidth: "100%",
    height: 225,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  container: {
    minWidth: "100%",
    backgroundColor: "#f5f5f5",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 22,
    position: "absolute",
    top: 203,
    paddingTop: 20,
  },
  seccion: {
    fontFamily: "Poppins-Regular",
    marginTop: 31,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingLeft: 16,
  },
});

export default Ordenar;
