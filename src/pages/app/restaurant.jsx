import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CircleButton from "../../components/buttons/Circle";
import CardShop from "../../components/cards/CardShop";
import { InfoSvg, EstrellaSvg, RelojSvg, SvgMOTO   } from "../../components/svgs/Svgs";
import { useNavigation } from "@react-navigation/native";
import Ordenar from "./order";

const Restaurant = () => {
  const image = {
    uri: "https://www.palombohnos.com.ar/wp-content/uploads/2018/08/MC-Olivos-01.jpg",
  };

  const navigation = useNavigation();

  const toOrder = ()=> {navigation.navigate('Ordenar')};

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.imgContainer}>
        <Text>imagen</Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontFamily: "Poppins-SemiBold", paddingLeft: 16 }}>
          McDonalds's Vicente Lopez
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginTop: 18,
            paddingLeft: 16,
          }}
        >
          <View style={{ fontSize:12 ,flexDirection: "row", gap: 7 }}>
            <EstrellaSvg width={13} />
            <Text style={{ fontFamily: "Poppins-Regular" }}>
              4,5 Ver opiniones
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 7, }}>
            <InfoSvg width={13} fill="black" />
            <Text style={{ fontSize:12 ,fontFamily: "Poppins-Light" }}> Info</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 7 }}>
            <RelojSvg width={13} />
            <Text style={{ fontSize:12 ,fontFamily: "Poppins-Light",alignItems:'center' }}>20 min</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 7,alignItems:'center' }}>
          <SvgMOTO/>
          <Text style={{ fontSize:12 ,fontFamily: "Poppins-Light" }}>Envio $100</Text>
          </View>
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.seccion}>
              <CircleButton />
              <Text style={{ fontFamily: "Poppins-Light" }}>Descuentos</Text>
              <Text style={{ fontFamily: "Poppins-Light" }}>Comida</Text>
              <Text style={{ fontFamily: "Poppins-Light" }}>Bebida</Text>
              <Text style={{ fontFamily: "Poppins-Light" }}>
                Ofertas Increibles
              </Text>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            marginTop: 13,
            marginBottom: 10,
            marginHorizontal: 16,
          }}
        ></View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
              to={()=> toOrder()}
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
              to={()=> toOrder()}

            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
              to={()=> toOrder()}

            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
              to={()=> toOrder()}

            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
              to={()=> toOrder()}

            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
              to={()=> toOrder()}

            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
              to={()=> toOrder()}

            />
          </ScrollView>

          <Text
            style={{
              paddingLeft: 16,
              marginTop: 26,
              fontFamily: "Poppins-Bold",
              marginBottom: 16,
            }}
          >
            Hamburgresas
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
          </ScrollView>
          <Text
            style={{
              paddingLeft: 16,
              marginTop: 26,
              fontFamily: "Poppins-Bold",
              marginBottom: 16,
            }}
          >
            Con papas
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
            <CardShop
              title="Hamburgresa c/ papas y chedar"
              description="$1200"
              type="food"
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
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

export default Restaurant;
