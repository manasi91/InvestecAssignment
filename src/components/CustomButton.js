import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.containerStyle}>
            <Text style={props.btnStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;