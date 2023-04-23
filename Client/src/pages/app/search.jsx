import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CardEnvio from "../../components/cards/CardEnvio";
import InputSearchFood from "../../components/cards/InputSearchFood";
import { StyleSheet } from "react-native";
import { ArrowSvg, ClockSvg } from "../../components/svgs/Svgs";
import { useNavigation } from "@react-navigation/native";
import CardsSwiper from "../../components/swipers/CardsSwiper";
import axios from "axios";
import Loading from "../../components/spinners/loading";
import CardMenu from "../../components/cards/CardMenu";

export default function Search() {
  const [isLoading, setIsLoading] = React.useState(true);
  const navigation = useNavigation();
  const [dataSearch, setDataSearch] = React.useState([]);
  const [dataRestaurants, setDataRestaurants] = React.useState([]);
  const [dataCategories, setDataCategories] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [recentSearch, setRecentSearch] = React.useState([]);

  function getInputValue(dataInput) {
    setIsLoading(true);
    setInputValue(dataInput);
    if (recentSearch.length === 3) {
      recentSearch.pop();
      recentSearch.unshift(dataInput);
    } else {
      recentSearch.unshift(dataInput);
    }
  }
  //que funcion cumplen lo metodos de array pop mpush ,unshift y shift?y push?
  const setterCategories = (data) => {
    setIsLoading(true);
    data === "Todos" ? setInputValue("") : setInputValue(data);
  };

  React.useEffect(() => {
    try {
      axios.get(`https://c10-51-ft.up.railway.app/food/categories/`).then((res) => {
        setDataCategories(res.data);
      });
      if (inputValue != "") {
        axios.get(`https://c10-51-ft.up.railway.app/search/${inputValue}`).then((res) => {
          setDataSearch(res.data);
        });
      }
      axios.get(`https://c10-51-ft.up.railway.app/rest`).then((res) => {
        setDataRestaurants(res.data);
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [inputValue]);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            width: "100%",
            marginTop: 55,
            paddingHorizontal: 16,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <ArrowSvg fill="#000000" height={16} width={16} rotating={90} />
          </TouchableOpacity>

          <InputSearchFood
            isOpen={true}
            filterIcon={false}
            finalWidth="90"
            color="#000000"
            getInputValue={getInputValue}
            CategoryButton={setterCategories}
          />
        </View>
        <View>
          <Text style={{ marginTop: 30, paddingHorizontal: 16 }}>
            Busca por filtro
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CardsSwiper
              data={dataCategories}
              settering={setterCategories}
              isPressed={false}
            />
          </View>
        </View>

        {recentSearch.length > 0 ? (
          <View style={{ paddingHorizontal: 16 }}>
            <Text>Búsquedas reciente</Text>
            <View
              style={{
                width: "100%",
                height: 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {recentSearch.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={{ width: "100%" }}
                  onPress={() => setInputValue(item)}
                >
                  <View style={styles.recentItems}>
                    <ClockSvg fill="#514E4E" width="16" height="16" />
                    <Text style={styles.text}>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : null}

        <ScrollView style={{ paddingHorizontal: 16 }}>
          {isLoading ? (
            <Loading />
          ) : inputValue === "" ? (
            dataRestaurants.map((rest) => (
              <CardEnvio
                id={rest.id}
                key={rest.id}
                title={rest.name}
                address={rest.adress}
                image={rest.img}
                score={rest.rating}
                deliverTime={rest.time}
              />
            ))
          ) : (
            dataSearch.length === 0 ? (
            <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}><Text>No hay resultados de tu busqueda.</Text></View>
          ) : (dataSearch.map((food) => (
              <CardMenu
                id={food.id}
                key={food.id}
                image={food.img}
                title={food.name}
                price={food.price}
                deliverTime={
                  dataRestaurants.find((rest) => rest.id === food.restaurants[0].id)
                    .time
                }
                score="---"
              />
            ))))}
        </ScrollView>
      </View>
    </ScrollView>
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
  text: { width: "80%", fontWeight: 400, color: "#514E4E", fontSize: 17 },
  recentItems: {
    flexDirection: "row",
    gap: 20,
    width: "100%",
    height: 60,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    paddingHorizontal: 20,
  },
});
