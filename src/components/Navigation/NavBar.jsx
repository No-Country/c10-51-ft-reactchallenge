import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import {MenuSvg,
  LupaSvg,
  CartSvg,
  AvatarSvg} from "../svgs/Svgs";


export default function NavBar() {

 

	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<MenuSvg width={'24'} height={'24'}/>
			</TouchableOpacity>
			<View style={styles.containerUser}>
				<TouchableOpacity>
					<AvatarSvg width={'38'} height={'38'}/>
				</TouchableOpacity>
				<Text style={styles.navText}>Bienvenido, User</Text>
			</View>
			<TouchableOpacity>
				<LupaSvg width={'24'} height={'24'}/>
			</TouchableOpacity>
			<TouchableOpacity>
				<CartSvg width={'24'} height={'24'}/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 64,
    marginTop: 32,
		paddingHorizontal: 20,
		top: 0,
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
    lineHeight: 14
	},
});
