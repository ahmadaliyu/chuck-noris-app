import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JokesCategories from "../screens/categories";
import RandomJokes from "../screens/random-jokes";
import HomeScreen from "../screens/homeScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "screen", headerShown: false }}
      presentation="none"
      initialRouteName="home"
    >
      <Stack.Screen
        options={({ navigation }) => ({})}
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({})}
        name="categories"
        component={JokesCategories}
      />
      <Stack.Screen
        options={({ navigation }) => ({})}
        name="randomJokes"
        component={RandomJokes}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
