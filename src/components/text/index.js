import React from "react";
import { Text, View } from "react-native";

function AppText({
  title,
  color = "#333333",
  fontSize = 14,
  textAlign,
  width,
  style,
  lineHeight = 18,
  alignItems,
  textStyle,
  ml,
  mr,
  mb,
  mt,
  mh,
  mv,
  ...otherProps
}) {
  return (
    <View
      style={[
        otherProps.style,
        style,
        {
          alignItems: alignItems,
          width: width,
          marginTop: mt,
          marginBottom: mb,
          marginHorizontal: mh,
          marginVertical: mv,
          marginLeft: ml,
          marginRight: mr,
          ...otherProps,
        },
      ]}
    >
      <Text
        style={[
          {
            color: color,
            fontSize: fontSize,
            textAlign: textAlign,
            lineHeight: lineHeight,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

export default AppText;
