import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import {  LupaSvg } from "../svgs/Svgs";

const InputSearchFood = ({  finalWidth, color, getInputValue }) => {
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

      
    </TouchableOpacity>
  );
};

export default InputSearchFood;
