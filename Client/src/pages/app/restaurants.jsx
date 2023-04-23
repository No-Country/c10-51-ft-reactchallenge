import React from "react";
import { Alert, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardsSwiper from "../../components/swipers/CardsSwiper";
import InputSearchFood from "../../components/cards/InputSearchFood";
import axios from "axios";
import { LupaSvg, CartSvg, ArrowSvg } from "../../components/svgs/Svgs";

function Restaurants() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [dataRestaurants, setDataRestaurants] = React.useState([]);
  const [dataFood, setDataFood] = React.useState([]);
  const [dataCategories, setDataCategories] = React.useState([]);
  const [promos, setPromos] = React.useState([]);
  const [dataSearch, setDataSearch] = React.useState(null);
  const [categoryName, setCategoryName] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  // funcion que toma el valor del input search y setea el valor de la variable inputValue para mostrar info acorde a lo que se busca
  function getInputValue(dataInput) {
    setIsLoading(true);
    setInputValue(dataInput);
  }

  // funcion que setea el valor de la variable categoryName para mostrar info acorde a la categoria seleccionada
  const setterCategories = (data) => {
    if (data === "Todos") {
      setIsLoading(true);
      setInputValue("");
      setCategoryName("");
      setDataSearch(null);
    } else {
      setIsLoading(true);
      setCategoryName(data);
    }
  };

  //peticiones a la api
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurants = await axios.get(
          `https://c10-51-ft.up.railway.app/rest${
            categoryName === "" ? "" : `/?category=${categoryName}`
          }`
        );
        const food = await axios.get(
          `https://c10-51-ft.up.railway.app/food${
            categoryName === "" ? "" : `/?category=${categoryName}`
          }`
        );
        const categories = await axios.get(`https://c10-51-ft.up.railway.app/food/categories`);
        const promos = await axios.get(`https://c10-51-ft.up.railway.app/food`);
        if (inputValue != "") {
          const search = await axios.get(
            `https://c10-51-ft.up.railway.app/search/${inputValue}`
          );
          // aqui se guardan los restaurantes filtrados por la busqueda , ya que search es solo un arreglo de comidas filtradas
          const filteredRestaurants = search.data
            .reduce((acc, cur) => {
              const ids = cur.restaurants.map(
                (restaurant) => restaurant.restaurant_food?.restaurantId
              );
              return acc.concat(ids.filter((id) => id));
            }, [])
            .map((id) => restaurants.data.find((rest) => rest.id === id));

          setDataSearch(search.data);
          setDataRestaurants(filteredRestaurants);
          /* setDataRestaurants(restaurants.data.filter((rest) => )); */
        }
        const favorites = await axios.get(`https://c10-51-ft.up.railway.app/users/4`);
        setDataRestaurants(restaurants.data);
        setDataFood(food.data);
        setDataCategories(categories.data);
        setPromos(promos.data.filter((item) => item.promo === true));
        setFavorites(favorites.data.favorites);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [categoryName, inputValue]);

  //funcion de voto que se envia al hijo cardsSwiper
  async function vote(id, isVoted) {
    try {
      if (isVoted) {
        Alert.alert("Este restaurante ya no esta en tus favoritos!");
        await axios.put(
          `https://c10-51-ft.up.railway.app/users/noFavorite?idUser=4&idRest=${id}`
        );
        const [restaurants, favorites] = await Promise.all([
          axios.get(`https://c10-51-ft.up.railway.app/rest`),
          axios.get(`https://c10-51-ft.up.railway.app/users/4`),
        ]);
        setDataRestaurants(restaurants.data);
        setFavorites(favorites.data.favorites);
      } else {
        Alert.alert("Agregaste este restaurante a tus favoritos!");
        await axios.put(
          `https://c10-51-ft.up.railway.app/users/updateFavorites?idUser=4&idRest=${id}`
        );
        const [restaurants, favorites] = await Promise.all([
          axios.get(`https://c10-51-ft.up.railway.app/rest`),
          axios.get(`https://c10-51-ft.up.railway.app/users/4`),
        ]);
        setDataRestaurants(restaurants.data);
        setFavorites(favorites.data.favorites);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView style={{ backgroundColor: "white", paddingVertical: 16 }}>
      <View style={{ marginHorizontal: 16 }}>
        <View style={{ flexDirection: "row", marginTop: 45, marginBottom: 28 }}>
          <ArrowSvg
            width={15}
            height={15}
            fill={"black"}
            rotating={90}
          />
          <Text
            style={{
              marginRight: 101,
              fontFamily: "Poppins-SemiBold",
              fontSize: 16,
              marginLeft:71
            }}
          >
            Restaurants
          </Text>
          <View style={{marginLeft:50}}>
          <CartSvg width={20} height={20} fill={"black"}  />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: 19,
          }}
        >
          <InputSearchFood
            filterIcon={true}
            isOpen={true}
            finalWidth="100"
            color="#00869F"
            getInputValue={getInputValue}
            CategoryButton={setterCategories}
          />
        </View>
      </View>

      <CardsSwiper
        swiperType="shopRes"
        title={
          !dataSearch
            ? "Hamburgueserías"
            : dataSearch.length > 0
            ? "Resultados de la búsqueda"
            : "No se encontraron resultados"
        }
        data={dataRestaurants}
        favorites={favorites}
        vote={vote}
        isLoading={isLoading}
      />
      <CardsSwiper
        swiperType="shop"
        title={
          !dataSearch
            ? "Pizzas & Empanadas"
            : dataSearch.length > 0
            ? "Resultados de la búsqueda"
            : "No se encontraron resultados"
        }
        data={dataRestaurants}
        favorites={favorites}
        vote={vote}
        isLoading={isLoading}
      />

      <CardsSwiper
        swiperType="favs"
        title="Pizzerias Favoritas de la zona"
        data={dataRestaurants}
        isLoading={isLoading}
      />
      <CardsSwiper
        swiperType="shop"
        title={
          !dataSearch
            ? "Sushi"
            : dataSearch.length > 0
            ? "Resultados de la búsqueda"
            : "No se encontraron resultados"
        }
        data={dataRestaurants}
        favorites={favorites}
        vote={vote}
        isLoading={isLoading}
      />

      <View
        style={{ backgroundColor: "white", width: "100%", height: 50 }}
      ></View>
    </ScrollView>
  );
}
export default Restaurants;
