import React from "react";
import Svg, { Path } from "react-native-svg";

const EstrellaSvg = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7255 2.84549L12.25 1.38197L11.7745 2.84549L9.75385 9.06434H3.21496H1.67612L2.92107 9.96885L8.21114 13.8123L6.19051 20.0312L5.71498 21.4947L6.95993 20.5902L12.25 16.7467L17.5401 20.5902L18.785 21.4947L18.3095 20.0312L16.2889 13.8123L21.5789 9.96885L22.8239 9.06434H21.285H14.7462L12.7255 2.84549Z"
        fill="transparent"
        stroke="black"
      />
    </Svg>
  );
};

export default EstrellaSvg;
