import React from "react";
import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	TouchableOpacity
} 
from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {CartSvg} from "../svgs/Svgs";



export default function CardShop (){
	const image = {
		uri: "https://www.infobae.com/new-resizer/SR25lb-2pJMh1EVqh4ZzqbWYzKE=/768x512/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/4E7AO7Q6I5BULNYYH3SSO4WP2Y.jpeg",
	};
  

	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.backgroundImg}>
				<LinearGradient
					colors={["black", "transparent"]}
					style={styles.background}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.title}>
						Ultra Bacon Triple
					</Text>
					 <Text style={styles.description}>
						Triple medallón de carne vacuna + triple bacon + triple cheddar
					</Text> 
				</View>
				<TouchableOpacity style={styles.buttonCart}>
          <CartSvg width={'12'} height={'12'}/>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 118,
		width: 156,
		textAlign: "start",
		borderRadius: 12,
		overflow: "hidden"
	},
	textContainer: {
    paddingTop: 8
  },
	title: {
		fontStyle: "normal",
		color: "#fff",
		fontWeight: 700,
		fontSize: 12,
		lineHeight: 18,
		marginBottom: 5,
		paddingHorizontal: 8,
	},
	description: {
		fontStyle: "normal",
		color: "white",
		fontWeight: 400,
		fontSize: 12,
		lineHeight: 18,
		marginBottom: 5,
		paddingHorizontal: 8,
    maxHeight: 54,
    overflow: 'hidden'
	},

	background: {
		flex: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 120,
		opacity: 0.8,
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		borderRadius: 20,
	},
  buttonCart: {
    width: 28,
    height: 28,
    borderRadius: 12,
    backgroundColor: 'white',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
    position: 'absolute',
    bottom: 10,
    right: 7
  }
});

