import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, ImageBackground } from "react-native";
import { InfoSvg, EstrellaSvg, RelojSvg, SvgMOTO,  } from "../../components/svgs/Svgs";
import {  useRoute } from "@react-navigation/native";
import axios from "axios";
import CardsSwiper from "../../components/swipers/CardsSwiper";
import NavBarRestaurant from "../../components/navigation/NavBarRestaurant";

const Restaurant = () => {
  const id = "192.168.56.1";
  const route = useRoute();
  const { restaurantId } = route.params;
  const [restaurant, setRestaurants] = React.useState([]);
  
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
      const restaurant = await axios.get(`http://${id}:3001/rest/${restaurantId}`);
      setRestaurants(restaurant.data)
      
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  


  return (
    <ScrollView style={{ flex: 1}}>
      <ImageBackground source={{ uri: restaurant.img}} style={{width:'100%',height:225}}>
        
      <NavBarRestaurant/>
      </ImageBackground>
      

      <View style={styles.container}>
        <Text style={{ fontFamily: "Poppins-SemiBold", paddingLeft: 16 }}>
          {restaurant.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginTop: 18,
            paddingLeft: 16,
           
          }}
        >
          <View style={{ fontSize:12 ,flexDirection: "row", gap: 7 ,alignItems:'center'}}>
            <EstrellaSvg width={20} height={20} />
            <Text style={{ fontFamily: "Poppins-Regular" }}>
              4.3
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 7, alignItems:'center'}}>
            <InfoSvg width={13} height={13} fill="black" />
            <Text style={{ fontSize:12 ,fontFamily: "Poppins-Light" }}> Info</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 7,alignItems:'center' }}>
            <RelojSvg width={13} height={13} />
            <Text style={{ fontSize:12 ,fontFamily: "Poppins-Light",alignItems:'center' }}>{restaurant.time} min</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 7,alignItems:'center' }}>
          <SvgMOTO/>
          <Text style={{ fontSize:12 ,fontFamily: "Poppins-Light" }}>Envio ${restaurant.shipping}</Text>
          </View>
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.seccion}>
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
          {restaurant.food?.reduce((acc, cur) => [...new Set([...acc, ...cur.categories])], []).map((category) => (
            <CardsSwiper key={category} data={restaurant.food?.filter((food) => food.categories?.includes(category))} title={category} swiperType='shop' typeOfCard='food' viewAllBtn={false}/>
          ))}
        
            {/*  */}
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 22,
    paddingTop: 20,
    backgroundColor:'white'
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
