import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import {
  ArrowSvg,
  BookSvg,
  HeartSvg,
  LocationSvg,
  LogOutSvg,
} from "../svgs/Svgs";
import BtnData from "../buttons/BtnData";
import CardFavorite from "./CardFavorite";
import axios from "axios";

export default function Accordion({ userData,favorites }) {
  const [isCollapsed, setIsCollapsed] = React.useState(undefined);

  const toggleAccordion = (index) => {
    isCollapsed === index ? setIsCollapsed(undefined) : setIsCollapsed(index);
  };



  return (
    <View style={{ zIndex: 1 }}>
      <View>
        <TouchableOpacity
          style={{
            height: 60,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => toggleAccordion(1)}
        >
          <LocationSvg height={16} width={16} fill="#00869F" />
          <Text style={{ color: "#4D4D4D", width: "80%" }}>Direcciones</Text>
          <ArrowSvg height={16} width={16} fill="#00869F" rotating={0} />
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed !== 1} style={styles.accordionBody}>
          <BtnData data={userData.address} />
        </Collapsible>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 60,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => toggleAccordion(2)}
        >
          <BookSvg height={16} width={16} fill="#00869F" />
          <Text style={{ color: "#4D4D4D", width: "80%" }}>Datos</Text>
          <ArrowSvg height={16} width={16} fill="#00869F" rotating={0} />
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed !== 2} style={styles.accordionBody}>
          <View style={{gap:4}}> 
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>Fecha de Nacimiento</Text>
              <BtnData data={userData.birthday} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>E-mail</Text>
              <BtnData data={userData.email} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>Número de teléfono</Text>
              <BtnData data={userData.phone} />
            </View>
          </View>
        </Collapsible>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 60,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => toggleAccordion(3)}
        >
          <HeartSvg height={16} width={16} fill="#00869F" />
          <Text style={{ color: "#4D4D4D", width: "80%" }}>Favoritos</Text>
          <ArrowSvg height={16} width={16} fill="#00869F" rotating={0} />
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed !== 3} style={styles.accordionBody}>
          <View style={{  gap: 12 }}>
            {favorites.map((rest) => (
              <CardFavorite key={rest.id} title={rest.name} rating={rest.rating} />

            ))}
            
          </View>
        </Collapsible>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 60,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => toggleAccordion(4)}
        >
          <LogOutSvg height={16} width={16} fill="#00869F" rotating={0} />
          <Text style={{ color: "#4D4D4D", width: "80%" }}>Cerrar sesión</Text>
          <ArrowSvg height={16} width={16} fill="#ffffff" rotating={0} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accordionBody: {
    padding: 16,
  },
});
