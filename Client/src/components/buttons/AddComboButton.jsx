import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from "react-native";
import { AddButtonSvg, AvatarSvg } from "../svgs/Svgs";
import axios from "axios";

const AddComboButton = ({ id, title, price, img, cant }) => {
	const [counter, setCounter] = useState(cant);
	console.log(id);
	const handleAdd = async (id) => {
		const userId = 4;
		axios.put(`https://c10-51-ft.up.railway.app/cart/add?idUser=4&idFood=${id}`)
		setCounter(counter + 1)
		onAdd();
	};

	


	return (
		
		<View as={Button} style={styles.container}>
			<View
				style={{
					width: 70,
					height: 70,
					borderRadius: 100,
					overflow: "hidden",
				}}
			>
				<Image
					source={{ uri: img }}
					style={{ width: "100%", height: "100%" }}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={{ fontWeight: 700 }}>{title}</Text>
				<Text style={{ fontWeight: 300, fontSize: 10 }}>{price}</Text>
			</View>
			<TouchableOpacity onPress={() => counter > 1 && setCounter(counter - 1)}>
				<AddButtonSvg type="rest" />
			</TouchableOpacity>
			<Text>{counter}</Text>
			<TouchableOpacity onPress={() => counter < 10 && handleAdd(id)}>
				<AddButtonSvg type="sum" />
			</TouchableOpacity>
		</View>
		
	);
};

export default AddComboButton;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: 328,
		height: 80,
		padding: 8,
	},
	textContainer: {
		width: "50%",
		height: "100%",
		justifyContent: "center",
		rowGap: 9,
	},
});
