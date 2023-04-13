import React from "react";
import { View, Text } from "react-native";
import Restaurant from "./restaurant";

export default function RestaurantContainer() {
const restaurantSelected = true //funcion para mostrar o no el restaurante, falta logica


	return (
		<View style={{height: '100%', alignItems:'center', justifyContent: 'center'}}>
			{restaurantSelected ? <Restaurant /> : <Text style={{fontSize: 35 , fontWeight: "600"}}>Eliga un restaurante</Text>}
		</View>
	);
}
