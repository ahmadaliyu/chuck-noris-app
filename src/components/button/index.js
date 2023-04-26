import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AppButton = ({
  title,
  onPress,
  color = "#FC4C01",
  textColor = "#fff",
  borderColor,
  borderWidth,
  width = "85%",
  height,
  fontSize = 16,
  mr,
  ml,
  mt,
  mb,
  mv = "4%",
  pv = "3%",
  ph,
  size,
  style,
  styleV,
  indicator,
  borderRadius = 10,
  alignSelf = "center",
  // fontFamily = "gilroy-semiBold",
  ...otherprops
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      {...otherprops}
      style={[
        styles.button,
        styleV,
        {
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth,
          borderRadius: borderRadius,
          width: width,
          height: height,
          alignSelf: alignSelf,
          paddingVertical: pv,
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
          marginVertical: mv,
        },
      ]}
      onPress={onPress}
    >
      {indicator ? (
        <View>{indicator}</View>
      ) : (
        <Text
          style={[
            styles.eText,
            {
              fontSize: fontSize,
              color: textColor,
            },
            style,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  eText: {
    color: "#fff",
    lineHeight: 20,
  },
});

export default AppButton;
