import React from "react";
import { TouchableOpacity ,StyleSheet,View } from "react-native";
import HomeSvg from "../svgs/HomeSvg";
import BagSvg from "../svgs/BagSvg";
import CreditCardSvg from "../svgs/CreditCardSvg";
import UserProfileSvg from "../svgs/UserProfileSvg";


export default function NavBarBottom (){
	return (
		<View style={styles.container}>
			<TouchableOpacity><HomeSvg/></TouchableOpacity>
			<TouchableOpacity><BagSvg/></TouchableOpacity>
			<TouchableOpacity><CreditCardSvg/></TouchableOpacity>
			<TouchableOpacity><UserProfileSvg/></TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    backgroundcolor: 'white',
    width: '100%',
    height: 50,
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1
  }
})