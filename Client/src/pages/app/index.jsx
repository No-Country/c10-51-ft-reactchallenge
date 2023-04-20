import React from "react";
import { Alert, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardsSwiper from "../../components/swipers/CardsSwiper";
import InputSearchFood from "../../components/cards/InputSearchFood";
import axios from "axios";

function Home() {
  const ip = "localhost";
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
          `http://${ip}:3001/rest${
            categoryName === "" ? "" : `/?category=${categoryName}`
          }`
        );
        const food = await axios.get(
          `http://${ip}:3001/food${
            categoryName === "" ? "" : `/?category=${categoryName}`
          }`
        );
        const categories = await axios.get(`http://${ip}:3001/food/categories`);
        const promos = await axios.get(`http://${ip}:3001/food`);
        if (inputValue != "") {
          const search = await axios.get(
            `http://${ip}:3001/search/${inputValue}`
          );
          // aqui se guardan los restaurantes filtrados por la busqueda , ya que search es solo un arreglo de comidas filtradas
          const filteredRestaurants = search.data.reduce((acc, cur) => {
            const ids = cur.restaurants.map(
              (restaurant) => restaurant.restaurant_food?.restaurantId
            );
            return acc.concat(ids.filter((id) => id));
          }, []).map((id) => restaurants.data.find((rest) => rest.id === id));
          
          setDataSearch(search.data);
          setDataRestaurants(filteredRestaurants);
          /* setDataRestaurants(restaurants.data.filter((rest) => )); */
        }
        const favorites = await axios.get(`http://${ip}:3001/users/3`);
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
  }, [categoryName, inputValue ]);


  //funcion de voto que se envia al hijo cardsSwiper
  async function vote(id,isVoted) {
    try {
      if(isVoted){
        Alert.alert("Este restaurante ya no esta en tus favoritos!");
        await axios.put(
          `http://${ip}:3001/users/noFavorite?idUser=3&idRest=${id}`
        );
        const [restaurants, favorites] = await Promise.all([
          axios.get(`http://${ip}:3001/rest`),
          axios.get(`http://${ip}:3001/users/3`),
        ]);
        setDataRestaurants(restaurants.data);
        setFavorites(favorites.data.favorites);
      }else{
        Alert.alert("Agregaste este restaurante a tus favoritos!");
        await axios.put(
          `http://${ip}:3001/users/updateFavorites?idUser=3&idRest=${id}`
        );
        const [restaurants, favorites] = await Promise.all([
          axios.get(`http://${ip}:3001/rest`),
          axios.get(`http://${ip}:3001/users/3`),
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
      <CardsSwiper swiperType="promo" data={promos}/>

      <View style={{ marginHorizontal: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
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
        data={dataCategories}
        settering={setterCategories}
        isPressed={categoryName === "" ? true : false}
      />

      <CardsSwiper
        swiperType="shop"
        title={
          !dataSearch
            ? "Restaurantes"
            : dataSearch.length > 0
            ? "Resultados de la búsqueda"
            : "No se encontraron resultados"
        }
        data={dataRestaurants}
        favorites={favorites}
        vote={vote}
        isLoading={isLoading}
        viewAllBtn={true}
      />

      <CardsSwiper
        swiperType="favs"
        title="Favoritos de la zona"
        data={dataRestaurants}
        isLoading={isLoading}
        viewAllBtn={true}
      />

      <CardsSwiper
        swiperType="rebajas"
        title="Rebajas de última hora"
        data={dataSearch ? dataSearch : dataFood}
        isLoading={isLoading}
        restaurants={dataRestaurants}
        viewAllBtn={true}
      />
      <View
        style={{ backgroundColor: "white", width: "100%", height: 50 }}
      ></View>
    </ScrollView>
  );
}
export default Home;
