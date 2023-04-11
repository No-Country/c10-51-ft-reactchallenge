import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardsSwiper from "../../components/swipers/CardsSwiper";
import InputSearchFood from "../../components/cards/InputSearchFood";
import { BtnFiltroComp } from "../../components/buttons/Buttons";

function Home() {
	const tags = [
		"Hamburguesas",
		"Sushi",
		"Pizza",
		"Comida arabe",
		"Comida china",
		"Comida italiana",
		"Comida mexicana",
		"Comida peruana",
		"Comida tailandesa",
		"Comida vegetariana",
		"Comida vegana",
		"Comida rápida",
		"Comida saludable",
		"Comida gourme",
	];

 

	return (
		<ScrollView style={{backgroundColor:'white',paddingVertical:16}}>
     

			<CardsSwiper swiperType="promo" />
      

      <View style={{marginHorizontal:16}}>
      <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center',width: '100%'}}>
			<InputSearchFood filterIcon={true} isOpen={true} finalWidth='100'/>

      </View>

      </View>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<View style={{ flexDirection: "row", height: 100 ,alignItems:'center' }}>
					{tags.map((tag) => (
            <View key={tag} >
							<BtnFiltroComp text={tag}/>
						</View>
						
            ))}
				</View>
			</ScrollView>

			<CardsSwiper swiperType="food" title='Restaurants populares'/>
			
			<CardsSwiper swiperType="fav" title='Pizzerías favoritas de la zona'/>
      
			<CardsSwiper swiperType="fav" title='Pizzerías favoritas de la zona'/>
		</ScrollView>
	);
}
export default Home;

