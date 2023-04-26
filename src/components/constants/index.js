import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("screen");
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const WIDTH = width;
const HEIGHT = height;

export { WIDTH, HEIGHT, STATUSBAR_HEIGHT, APPBAR_HEIGHT };
