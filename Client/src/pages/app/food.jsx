import React from "react";
import { View, StyleSheet, Text, ScrollView, Button, Alert } from "react-native";
import AddComboButton from "../../components/buttons/AddComboButton";
import {
  BtnPrimaryColLargee,
} from "../../components/buttons/Buttons";
import { AddButtonSvg } from "../../components/svgs/Svgs";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import NavBarRestaurant from "../../components/navigation/NavBarRestaurant";
import { ImageBackground } from "react-native";



const Food = () => {
  const route = useRoute();
  const { foodId } = route.params;
  const [food, setFood] = React.useState([]);
  


  React.useEffect(() => {
    const fetchData = async () => {
      try {
      const food = await axios.get(`https://c10-51-ft.up.railway.app/food/${foodId}`);
      setFood(food.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


    const [count, setCount] = React.useState(1);
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    const decrementCount = () => {
      setCount(count - 1);
    };
  const navigation = useNavigation();

  return (
    <ScrollView >
       <ImageBackground source={{ uri: food.img}} style={{width:'100%',height:225}}>
        
        <NavBarRestaurant/>
        </ImageBackground>

      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            paddingHorizontal: 16,
            fontSize: 16,
          }}
        >
          {food.name}
        </Text>

        <Text
          style={{
            fontFamily: "Poppins-Light",
            paddingHorizontal: 16,
            fontSize: 12,
            marginTop: 8,
          }}
        >
          {food.description}
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
           /*  height: 290, */
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <View>
            <AddComboButton/>
            <AddComboButton/>
            <AddComboButton/>
          </View> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 16,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
      <Text>Unidades: {count}</Text>
      <Button style={{backgroundColor: "#006477"}} title="+" onPress={incrementCount} />
      <Button title="-" onPress={decrementCount} />
    </View>
          </View>

          <BtnPrimaryColLargee text={count} onPress={() =>
          {Alert.alert("Comida agregada al carrito!")
          navigation.navigate("Cart")
          }
        }/>
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

    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 22,
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

export default Food;
