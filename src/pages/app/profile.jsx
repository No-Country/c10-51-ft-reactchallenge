import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { ArrowSvg, OrangeWaveSvg } from "../../components/svgs/Svgs";
import CardAccordion from "../../components/cards/CardAccordion";

export default function Profile() {
  return (
    <ScrollView style={{}}>
      <View style={{ position: "relative" }}>
        <View style={{ position: "static", left: -65 }}>
          <OrangeWaveSvg height={350} width={600} />
        </View>
        <View
          style={{
            width: 35,
            height: 35,
            backgroundColor: "#ffffff",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 45,
            left: 16,
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.7,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          <ArrowSvg height={13} width={13} fill="#000000" rotating={90} />
        </View>

        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <Image
              source={require("../../../assets/user-photo-example.jpg")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text style={{ color: "white", fontWeight: 700, fontSize: 22 }}>
            Nombre Apellido
          </Text>
        </View>
      </View>

      <View>
        <CardAccordion iconType='location' title='Direcciones'  />
        <CardAccordion iconType='book' title='Direcciones'  />
        <CardAccordion iconType='heart' title='Direcciones'  />
      </View>
    </ScrollView>
  );
}
