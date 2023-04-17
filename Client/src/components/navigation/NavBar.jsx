import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import {
  MenuSvg,
  LupaSvg,
  CartSvg,
  CampaingSvg,
  CuponSvg,
  CreditCardSvg,
  InfoSvg,
  BookSvg,
  CubiertosSvg,
} from "../svgs/Svgs";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function NavBar() {
  const ip = "192.168.56.1";
  const [isOpen, setIsOpen] = React.useState(false);
  const [typeOfMenu, setTypeOfMenu] = React.useState("");
  const height = React.useRef(new Animated.Value(0)).current;
  const [userData, setUserData] = React.useState([]);

  // effect for menu animation
  React.useEffect(() => {
    Animated.timing(height, {
      toValue: isOpen ? 1 : 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);
  // effect for get userData from db
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await axios.get(`http://${ip}:3001/users/3`);
        setUserData(userProfile.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const interpolatedHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400], // altura final deseada
  });

  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <Animated.View
        style={{
          ...styles.container,
          display: typeOfMenu === "search" ? "none" : "flex",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen);
            setTypeOfMenu("menu");
          }}
        >
          <MenuSvg width={"24"} height={"24"} />
        </TouchableOpacity>
        <View style={styles.containerUser}>
        <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              overflow: "hidden",
              backgroundColor:'gray'
            }}
          >
            <Image
              source={{uri:userData.img}}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text style={styles.navText}>Bienvenido, {userData.name}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <LupaSvg width={"24"} height={"24"} fill="#000000" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <CartSvg width={"24"} height={"24"} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        onPress={() => {
          setIsOpen(false);
          setTypeOfMenu("");
        }}
        style={{
          height: interpolatedHeight,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: typeOfMenu === "menu" ? "#F2F2F2" : "white",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "80%",
            height: 350,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.options}>
            <CampaingSvg fill="#00869F" width="25" height="25" />
            <Text style={styles.text}>Notificaciones</Text>
          </View>
          <View style={styles.options}>
            <BookSvg fill="#00869F" width="25" height="25" />
            <Text style={styles.text}>Mis pedidos</Text>
          </View>
          <View style={styles.options}>
            <CuponSvg fill="#00869F" width="25" height="25" />
            <Text style={styles.text}>Cupones</Text>
          </View>
          <View style={styles.options}>
            <CreditCardSvg fill="#00869F" width="25" height="25" />
            <Text style={styles.text}>Pagos</Text>
          </View>
          <View style={styles.options}>
            <InfoSvg fill="#00869F" width="25" height="25" />
            <Text style={styles.text}>Términos y condiciones</Text>
          </View>
          <TouchableOpacity
            style={styles.options}
            onPress={() => {
              navigation.navigate("RegisterRestaurant");
            }}
          >
            <CubiertosSvg fill="#00869F" width="25" height="25" />
            <Text style={styles.text}>Registra tu restaurante</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 64,
    marginTop: 32,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    gap: 0,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "60%",
  },
  navText: {
    height: 14,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 14,
  },
  text: { width: "80%", fontWeight: 400, color: "#1A1A1A", fontSize: 17 },
  options: {
    flexDirection: "row",
    gap: 25,
    height: 60,
    alignItems: "center",
  },
});
