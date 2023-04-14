import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { EditSvg, SvgMOTO, ArrowSvg } from "../svgs/Svgs";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardDeliveryDetail = ({ domicilio }) => {
  const image = require("../../../assets/map.png");

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={{ alignItems: "flex-start", width: "100%", padding: 10, gap:5  }}>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text>Enviar a {domicilio}</Text>
          <EditSvg width={15} height={15} fill="#006477" />
        </View>
        <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
          <Text>Dar instrucciones de entrega</Text>
          <ArrowSvg width={15} height={15} rotating={0} fill={'black'} />
        </TouchableOpacity>
        <View style={{flexDirection:'row', gap:5}}>
          <SvgMOTO width={15} height={15} />
          <Text>Delivery 10 - 20 min</Text>
        </View>
      </View>
    </View>
  );
};

export default CardDeliveryDetail;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    height: 200,
    width: 300,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "transparent",
    borderWidth: 0.2,
    elevation: 1,
  },
  image: {
    shadowTopRightRadius: 10,
    shadowTopLeftRadius: 10,
    width: "100%",
    height: "55%",
  },
});
