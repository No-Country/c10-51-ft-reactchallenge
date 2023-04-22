import React, { useState } from "react";
import { Text, View, StyleSheet, Button,TouchableOpacity, Image } from "react-native";
import { AddButtonSvg, AvatarSvg } from "../svgs/Svgs";

const AddComboButton = ({title,price,img}) => {
	const [counter, setCounter] = useState(1);

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
				<Text style={{ fontWeight: 300, fontSize: 10 }}>
        {price}
				</Text>
			</View>
			<TouchableOpacity onPress={() =>
						counter > 1 && setCounter(counter - 1)
					}>
				<AddButtonSvg
					type="rest"
					
				/>
			</TouchableOpacity>
			<Text>2</Text>
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
