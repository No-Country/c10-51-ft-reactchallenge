import React from "react";
import Svg,{Path} from "react-native-svg";


const MenuSvg = ({width,height}) => {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 18 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z"
				fill="black"
			/>
		</Svg>
	);
};

export default MenuSvg;
