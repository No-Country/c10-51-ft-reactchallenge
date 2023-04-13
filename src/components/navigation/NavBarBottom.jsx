import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { HomeSvg, BagSvg, CreditCardSvg, UserProfileSvg } from "../svgs/Svgs";
import { useNavigation } from '@react-navigation/native';
import { useKeyboard } from '@react-native-community/hooks';


export default function NavBarBottom() {

  const navigation = useNavigation();
  const [pressed,setPressed]=useState(1);
  const {keyboardShown} = useKeyboard();
  
	return (

		<View style={{...styles.container,display: keyboardShown ? 'none' : 'flex',}} >
			<TouchableOpacity onPress={() => {
        setPressed(1)
        navigation.navigate('Home')
        }}>
				<HomeSvg fill='#00869F' isPressed={pressed === 1}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
        setPressed(2)
        navigation.navigate('Order')
        }}>
				<BagSvg fill='#00869F' isPressed={pressed === 2}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
        setPressed(3)
        navigation.navigate('Pay')
        }}>
				<CreditCardSvg fill='#00869F' width='20' height='20' isPressed={pressed === 3}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
        setPressed(4)
        navigation.navigate('Profile')
        }}>
				<UserProfileSvg fill='#00869F' isPressed={pressed === 4}/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
    
		backgroundColor: "white",
		width: "100%",
		height: 50,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		borderTopWidth: 0.5,
	},
});
