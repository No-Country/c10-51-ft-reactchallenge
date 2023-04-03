import React from "react";
import { Text, View, StyleSheet ,Button} from "react-native";

import AddButtonSvg from "../svgs/AddButtonSvg";
import AvatarSvg from "../svgs/AvatarSvg";

const AddComboButton = () => {
	return (
		<View as={Button} style={styles.container}>
			<AvatarSvg width={"64"} height={"64"} />
			<View style={styles.textContainer}>
				<Text style={{ fontWeight: 700 }}>Titulo</Text>
				<Text style={{ fontWeight: 300, fontSize: 10 }}>
					Precio
				</Text>
			</View>
			<AddButtonSvg />
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
		borderColor: "black",
		borderWidth: 0.5,
		borderRadius: 12,
		
	},
	textContainer: {
		width: "60%",
		height: "100%",
		justifyContent: "center",
		rowGap: 9,
	},
});
