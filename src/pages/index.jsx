import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardsSwiper from "../components/swipers/CardsSwiper";
import InputSearchFood from "../components/cards/InputSearchFood";
import data from "../../data.json";
import axios from "axios";

function Home() {
	const [dataRestaurants, setDataRestaurants] = React.useState([]);
	const [dataFood, setDataFood] = React.useState([]);
  const [dataCategories, setDataCategories] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const restaurants = await axios.get(
					"http://192.168.56.1:3001/rest/"
				);
        const food = await axios.get(
					"http://192.168.56.1:3001/food/"
				);
        const categories = await axios.get(
          "http://192.168.56.1:3001/categories/"
        );
				setDataRestaurants(restaurants.data);
				setDataFood(food.data);
        setDataCategories(categories.data);
				console.log("---------------", dataCategories);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return (
		<ScrollView style={{ backgroundColor: "white", paddingVertical: 16 }}>
			<CardsSwiper swiperType="promo" data={data} />

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
					/>
				</View>
			</View>

			<CardsSwiper data={dataCategories} />

			<CardsSwiper
				swiperType="shop"
				title="Restaurantes populares"
				data={dataRestaurants}
			/>

			<CardsSwiper
				swiperType="favs"
				title="Favoritos de la zona"
				data={dataRestaurants}
			/>

			<CardsSwiper
				swiperType="rebajas"
				title="Rebajas de última hora"
				data={dataFood}
			/>
		</ScrollView>
	);
}
export default Home;
