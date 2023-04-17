import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import CardPromocion from "../cards/CardPromocion";
import CardShop from "../cards/CardShop";
import CardMenu from "../cards/CardMenu";
import { BtnPrimaryIconDef } from "../buttons/BtnsIcon";
import { useNavigation } from "@react-navigation/native";
const Swiper = require("react-native-swiper").default;
import CardEnvio from "../cards/CardEnvio";
import { StyleSheet } from "react-native";
import Loading from "../spinners/loading";

function CardsSwiper({
  swiperType,
  title,
  data,
  settering,
  isPressed,
  favorites,
  vote,
  isLoading,
}) {
  const [selectedButton, setSelectedButton] = React.useState(
    isPressed ? "Todos" : ""
  );

  const navigation = useNavigation();

  const toRestaurant = () => {
    navigation.navigate("Order");
  };

  return (
    <>
      {swiperType === "promo" ? (
        <Swiper autoplay={true} autoplayTimeout={6} height={200}>
          {data.map((promo) => (
            <View
              key={promo.id}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardPromocion
                title={promo.name}
                description={promo.description}
                image={promo.img}
              />
            </View>
          ))}
        </Swiper>
      ) : swiperType === "shop" ? (
        <View>
          <Text
            style={{
              width: "100%",
              fontSize: 17,
              fontWeight: 700,
              paddingBottom: 16,
              marginHorizontal: 16,
            }}
          >
            {isLoading ? "Cargando restaurantes..." : title}
          </Text>
         
            {isLoading ? (
              <Loading />
            ) : ( <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ width: "100%" }}
          >
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 10,
                }}
              >
                {data.map((shop) => (
                  <CardShop
                    key={shop.id}
                    title={shop.name}
                    description={shop.adress}
                    image={shop.img}
                    type="rest"
                    to={() => toRestaurant()}
                    id={shop.id}
                    isVoted={favorites.includes(shop.id)}
                    vote={vote}
                  />
                ))}
              </View></ScrollView>
            )}
          
          <View style={{ alignItems: "flex-end", width: "100%" }}>
            <BtnPrimaryIconDef text="Ver todo" />
          </View>
        </View>
      ) : swiperType === "favs" ? (
        <View>
          <Text
            style={{
              width: "100%",
              fontSize: 17,
              fontWeight: 700,
              padding: 16,
            }}
          >
            {isLoading ? "Cargando restaurantes..." : title}
          </Text>
          {isLoading ? (
              <Loading />
            ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                height: 160,
              }}
            >
              {data.map((shop) => (
                <View
                  style={{
                    width: 242,
                    marginLeft: 16,
                  }}
                  key={shop.id}
                >
                  <CardEnvio
                    title={shop.name}
                    address={shop.adress}
                    score={shop.rating}
                    deliverTime={shop.time}
                    image={shop.img}
                  />
                </View>
              ))}
            </View>
          </ScrollView>)}
          <View
            style={{
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <BtnPrimaryIconDef text="Ver todo" />
          </View>
        </View>
      ) : swiperType === "rebajas" ? (
        <View>
          <Text
            style={{
              width: "100%",
              fontSize: 17,
              fontWeight: 700,
              padding: 16,
            }}
          >
            {isLoading ? "Cargando comidas..." : title}
          </Text>
          {isLoading ? (
              <Loading />
            ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                height: 160,
              }}
            >
              {data.map((food) => (
                <View
                  style={{
                    width: 242,
                    marginLeft: 16,
                  }}
                  key={food.id}
                >
                  <CardMenu
                    image={food.img}
                    title={food.name}
                    price={food.price}
                    /* deliverTime={
                      data.find( (rest) => rest.id === food.restauranteId).tiempo_espera
										}
                    score={data.find( (rest) => rest.id === food.restauranteId).valoracion} */
                  />
                </View>
              ))}
            </View>
          </ScrollView>)}
          <View
            style={{
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <BtnPrimaryIconDef text="Ver todo" />
          </View>
        </View>
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              height: 100,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setSelectedButton("Todos");
                settering("Todos");
              }}
              style={{
                ...styles.tagButton,
                backgroundColor:
                  selectedButton === "Todos" ? "#00869F" : "#FFFFFF",
              }}
            >
              <Text
                style={{
                  color: selectedButton === "Todos" ? "#FFFFFF" : "#000000",
                }}
              >
                Todos
              </Text>
            </TouchableOpacity>
            {data.map((tag) => (
              <TouchableOpacity
                key={tag}
                onPress={() => {
                  if (selectedButton != tag) {
                    setSelectedButton(tag);
                    settering(tag);
                  } else {
                    setSelectedButton("Todos");
                    settering("Todos");
                  }
                }}
                style={{
                  ...styles.tagButton,
                  backgroundColor:
                    selectedButton === tag ? "#00869F" : "#FFFFFF",
                }}
              >
                <Text
                  style={{
                    color: selectedButton === tag ? "#FFFFFF" : "#000000",
                  }}
                >
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  tagButton: {
    height: 32,
    paddingHorizontal: 12,
    borderWidth: 0.5,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
});

export default CardsSwiper;
