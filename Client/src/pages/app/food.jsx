import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import AddComboButton from "../../components/buttons/AddComboButton";
import {
  BtnPrimaryColLargee,
} from "../../components/buttons/Buttons";
import { AddButtonSvg } from "../../components/svgs/Svgs";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import NavBarRestaurant from "../../components/navigation/NavBarRestaurant";
import { ImageBackground } from "react-native";



const Food = () => {
  const id = "localhost";
  const route = useRoute();
  const { foodId } = route.params;
  const [food, setFood] = React.useState([]);
  


  React.useEffect(() => {
    const fetchData = async () => {
      try {
      const food = await axios.get(`http://${id}:3001/food/${foodId}`);
      setFood(food.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView style={{ color: "#1A1A1A" }}>
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
            height: 290,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <AddComboButton/>
            <AddComboButton/>
            <AddComboButton/>
          </View>
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
            <AddButtonSvg type={"rest"} />
            <Text style={{ width: 54, textAlign: "center" }}>0</Text>
            <AddButtonSvg />
          </View>

          <BtnPrimaryColLargee text="Anadir $2400" />
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
