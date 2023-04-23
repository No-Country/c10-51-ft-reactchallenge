import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ArrowSvg, CartSvg, LupaSvg } from "../svgs/Svgs";
import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const NavBarRestaurant = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const cart = await axios.get(`https://c10-51-ft.up.railway.app/cart/4`);
        setCart(cart.data.cartIn)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

function goBack() {
    if(route.name === "Restaurant"){
      Alert.alert("Tu carrito se vaciará", "¿Estás seguro?", [  
        { text: "Cancelar", style: "cancel" },  
        { text: "OK", onPress: () => {
          axios.delete(`https://c10-51-ft.up.railway.app/cart/restart/4`)
          navigation.goBack()
        }}
      ]);
      
    }else{
      navigation.goBack();
    }

  }

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
        onPress={() => goBack()}
      >
        <ArrowSvg height={10} width={10} fill="#000000" rotating={90} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Cart")}
        >
          <CartSvg height={13} width={13} fill="#000000" />
          {cart?.length < 0 && (<Text style={{backgroundColor:'red',width:15,height:15,position:"absolute",right:0,top:0,borderRadius:100}}>{cart?.length}</Text>)}
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
