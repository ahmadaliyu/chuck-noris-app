import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation";
import colors from "./src/components/utils/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
        <StatusBar style="auto" />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
