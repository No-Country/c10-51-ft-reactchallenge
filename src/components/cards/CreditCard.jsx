import React, { Fragment } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {VisaSvg,ChipSvg} from "../svgs/Svgs";

export default function CreditCard({ perspective }) {
	return (
		<View style={frontStyles.container}>
			<LinearGradient
				colors={["black", "gray", "white", "#c7c7c7", "gray"]}
				style={frontStyles.background}
				start={{ x: 0, y: 0.3 }}
				end={{ x: 0.3, y: 1.2 }}
			/>
			{perspective === "front" ? (
				<Fragment>
					<View style={frontStyles.content}>
						<VisaSvg />
						<Text style={frontStyles.text}>
							**** **** **** 1234
						</Text>
					</View>
				</Fragment>
			) : perspective === "back" ? (
				<Fragment>
					<View style={backStyles.blackLine}></View>
					<View style={backStyles.whiteLine}>
						<Text
							style={{
								textAlign: "right",
								textAlignVertical: "center",
								fontWeight: 700,
							}}
						>
							xxx
						</Text>
					</View>
				</Fragment>
			) : (
				<Fragment>
					<View style={toCompleteStyles.content}>
						<View>
							<ChipSvg />
						</View>
						<View>
							<Text style={toCompleteStyles.numberCard}>
								**** **** **** **** ****
							</Text>
							<View style={toCompleteStyles.dataCard}>
								<Text>Nombre y apellido</Text>
								<Text>MM/YY</Text>
							</View>
						</View>
					</View>
				</Fragment>
			)}
		</View>
	);
}

const frontStyles = StyleSheet.create({
	container: {
		width: 242,
		height: 131,
		backgroundColor: "white",
		borderRadius: 15,
		backgroundColor: "#ffc02b",
		overflow: "hidden",
	},
	content: {
		paddingHorizontal: 16,
		position: "absolute",
		bottom: 0,
	},
	text: {
		paddingVertical: 16,
		fontWeight: 700,
		fontSize: 12,
	},
	background: {
		flex: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: "100%",
		opacity: 0.5,
	},
});

const backStyles = StyleSheet.create({
	blackLine: {
		width: "100%",
		height: 25,
		backgroundColor: "black",
		marginTop: 16,
	},
	whiteLine: {
		marginHorizontal: 20,
		marginTop: 29,
		height: 25,
		backgroundColor: "white",
		paddingRight: 13,
	},
});

const toCompleteStyles = StyleSheet.create({
	dataCard: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	content: {
		height: "100%",
		justifyContent: "space-between",
		paddingVertical: 16,
		paddingHorizontal: 10,
	},
	numberCard: { marginBottom: 7, fontWeight: 700, fontSize: 12 }
});
