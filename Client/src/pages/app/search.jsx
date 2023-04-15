import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CardEnvio from "../../components/cards/CardEnvio";
import InputSearchFood from "../../components/cards/InputSearchFood";
import { StyleSheet } from "react-native";
import { ClockSvg } from "../../components/svgs/Svgs";
import { useNavigation } from "@react-navigation/native";
import CardsSwiper from "../../components/swipers/CardsSwiper";
import axios from "axios";


export default function Pay() {
	
	const navigation = useNavigation();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    try {
      axios.get("http://localhost:3001/food/categories/").then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, [])

	return (
		<ScrollView style={{}}>
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
					>
						<Text style={{ fontSize: 25 }}>{`<`}</Text>
					</TouchableOpacity>
					<InputSearchFood
						isOpen={true}
						filterIcon={false}
						finalWidth="90"
						color="#000000"
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
						<CardsSwiper data={data} />
					</View>
				</View>
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
						<View style={styles.recentItems}>
							<ClockSvg
								fill="#514E4E"
								width="16"
								height="16"
							/>
							<Text style={styles.text}>Pizza</Text>
						</View>
						<View style={styles.recentItems}>
							<ClockSvg
								fill="#514E4E"
								width="16"
								height="16"
							/>
							<Text style={styles.text}>Sushi</Text>
						</View>
						<View style={styles.recentItems}>
							<ClockSvg
								fill="#514E4E"
								width="16"
								height="16"
							/>
							<Text style={styles.text}>Arepa</Text>
						</View>
					</View>
				</View>
				<ScrollView style={{ paddingHorizontal: 16 }}>
					<CardEnvio />
					<CardEnvio />
					<CardEnvio />
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
