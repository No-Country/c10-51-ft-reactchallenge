import React from "react";
import { View, TextInput ,Animated} from "react-native";
import { FilterSvg, LupaSvg } from "../svgs/Svgs";


const InputSearchFood = ({ filterIcon,isOpen , finalWidth}) => {
	const width = React.useRef(new Animated.Value(0)).current;
  const position = React.useRef(new Animated.Value(0)).current;

	React.useEffect(() => {
		Animated.timing(width, {
			toValue: isOpen ? 1 : 0,
			duration: 600,
			useNativeDriver: false,
      
		}).start();
    Animated.timing(position, {
			toValue: isOpen ? 1 : 0,
			duration: 600,
			useNativeDriver: false,
      
		}).start();
	}, [isOpen]);

	const interpolatedWidth = width.interpolate({
		inputRange: [0, 1],
		outputRange: ['30%', `${finalWidth}%`], // altura final deseada
	});
  
  const interpolatedPosition = position.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 15], // posicion final deseada
  });


	return (
		<Animated.View
			style={{
				flexDirection: "row",
				alignItems: "center",
				borderColor: "gray",
				borderWidth: 1,
				borderRadius: 15,
				width: interpolatedWidth,
				height: 40,
				position: "relative",
			}}
		>
			<Animated.View style={{ position: "absolute", left: interpolatedPosition }}>
				<LupaSvg width={21} height={21} />
			</Animated.View>
			<TextInput
				style={{ marginLeft: 45, minWidth: "80%" }}
				placeholder="Buscar"
			/>
			<View
				style={{
					position: "absolute",
					right: 15,
					display: filterIcon ? "flex" : "none",
				}}
			>
				<FilterSvg width={21} height={21} />
			</View>
		</Animated.View>
	);
};

export default InputSearchFood;
