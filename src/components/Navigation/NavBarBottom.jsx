import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { HomeSvg, BagSvg, CreditCardSvg, UserProfileSvg } from "../svgs/Svgs";
import { useNavigation } from '@react-navigation/native';


export default function NavBarBottom() {

  const navigation = useNavigation();
  const [pressed,setPressed]=useState(1);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => {
        setPressed(1)
        navigation.navigate('Home')
        }}>
				<HomeSvg isPressed={pressed === 1}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
        setPressed(2)
        navigation.navigate('Order')
        }}>
				<BagSvg isPressed={pressed === 2}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
        setPressed(3)
        navigation.navigate('Pay')
        }}>
				<CreditCardSvg isPressed={pressed === 3}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
        setPressed(4)
        navigation.navigate('Profile')
        }}>
				<UserProfileSvg isPressed={pressed === 4}/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		width: "100%",
		height: 80,
		paddingBottom: 25,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		borderTopWidth: 1,
	},
});