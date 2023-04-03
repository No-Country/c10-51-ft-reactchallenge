import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import PesosSvg from "../svgs/PesosSvg";
import RelojSvg from "../svgs/RelojSvg";
import EstrellaSvg from "../svgs/EstrellaSvg";
import { LinearGradient } from "expo-linear-gradient";

const CardMenu = () => {
  const image = {
    uri: "https://www.clarin.com/img/2022/05/27/la-hamburguesa-mucho-mas-que___0HXb0UR0v_1256x620__2.jpg#1653659778281",
  };
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']} style={styles.linear}/>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <View style={styles.titles}>
          <View style={styles.contentTitles}>
            <PesosSvg width={15} height={15} />
            <Text style={styles.text}>Precio</Text>
          </View>
          <View style={styles.contentTitles}>
            <RelojSvg width={15} height={15} />
            <Text style={styles.text}>Tiempo</Text>
          </View>
          <View style={styles.contentTitles}>
            <EstrellaSvg width={15} height={15} />
            <Text style={styles.text}>Puntaje</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 152,
    width: "55%",
    textAlign: "start",
    borderRadius: 20,
    margin: 10,
    zIndex: 10,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  content: {
    padding: 10,
  },
  titles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentTitles: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize:12,
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

export default CardMenu;
