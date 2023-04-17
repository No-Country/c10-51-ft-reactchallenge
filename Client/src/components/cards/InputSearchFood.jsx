import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FilterSvg, LupaSvg } from "../svgs/Svgs";

const InputSearchFood = ({ filterIcon, finalWidth, color, getInputValue,CategoryButton }) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 15,
        width: finalWidth + "%",
        height: 40,
        position: "relative",
      }}
    >
      <View style={{ position: "absolute", left: 15 }}>
        <LupaSvg width={21} height={21} fill={color} />
      </View>

      <TextInput
        style={{ marginLeft: 45, minWidth: "80%" }}
        placeholder="Buscar por nombre"
        value={inputValue}
    
        onChange={(e) => {
          setInputValue(e.nativeEvent.text);
        }}
        onSubmitEditing={() => {
          getInputValue(inputValue);
          setInputValue("");
        }}
      />

      <View
        style={{
          position: "absolute",
          right: 15,
          display: filterIcon ? "flex" : "none",
        }}
      >
        <FilterSvg width={21} height={21} fill={color} />
      </View>
    </TouchableOpacity>
  );
};

export default InputSearchFood;
