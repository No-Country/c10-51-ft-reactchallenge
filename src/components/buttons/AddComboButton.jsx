import React, { useState } from "react";
import { Text, View, StyleSheet, Button,TouchableOpacity } from "react-native";
import { AddButtonSvg, AvatarSvg } from "../svgs/Svgs";

const AddComboButton = () => {
	const [counter, setCounter] = useState(1);

	return (
		<View as={Button} style={styles.container}>
			<AvatarSvg width={"64"} height={"64"} />
			<View style={styles.textContainer}>
				<Text style={{ fontWeight: 700 }}>Lata de Coca-Cola 220ml</Text>
				<Text style={{ fontWeight: 300, fontSize: 10 }}>
        $220
				</Text>
			</View>
			<TouchableOpacity onPress={() =>
						counter > 1 && setCounter(counter - 1)
					}>
				<AddButtonSvg
					type="rest"
					
				/>
			</TouchableOpacity>
			<Text>{counter}</Text>
			<TouchableOpacity onPress={() =>
						counter < 10 && setCounter(counter + 1)
					}>
				<AddButtonSvg
					type="sum"
				/>
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
