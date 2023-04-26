import { SafeAreaView, StatusBar, View } from "react-native";
import React from "react";

const CustomStatusBar = ({ backgroundColor, barStyle }) => {
  return (
    <View style={[, { backgroundColor, height: StatusBar.currentHeight }]}>
      <SafeAreaView>
        <StatusBar
          translucent
          barStyle={barStyle}
          backgroundColor={backgroundColor}
        />
      </SafeAreaView>
    </View>
  );
};

export default CustomStatusBar;
