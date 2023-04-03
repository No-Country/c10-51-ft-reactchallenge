import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardsSwiper from "./components/swipers/CardsSwiper";


function Home() {
	return (
		<ScrollView>
			<CardsSwiper swiperType='promo' />
			<Text style={{ width: "100%", fontSize: 14, fontWeight: 700 }}>
				Restaurantes populares
			</Text>
      <CardsSwiper swiperType='food'/>
      <View style={{ width: 219 , position: 'absolute', backgroundColor:'green'}}></View>
		</ScrollView>
	);
}
export default Home;