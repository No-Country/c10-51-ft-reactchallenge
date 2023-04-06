import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


function Home() {
	return (
		<ScrollView>
			<Text style={{ width: "100%", fontSize: 14, fontWeight: 700 }}>
				Restaurantes populares
			</Text>
      <View style={{ width: 219 , position: 'absolute', backgroundColor:'green'}}></View>
		</ScrollView>
	);
}
export default Home;