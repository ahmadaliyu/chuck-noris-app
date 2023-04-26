import React, { memo, useCallback, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import CustomStatusBar from "../../components/status-bar";
import AppText from "../../components/text";
import {
  useFetchCategoriesQuery,
  useGetRandomJokeQuery,
} from "../../../redux/services";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../components/utils/colors";
import { Pressable } from "react-native";

const JokesCategories = ({ navigation: { route, goBack } }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data } = useFetchCategoriesQuery();
  const {
    data: _data,
    error,
    isFetching,
  } = useGetRandomJokeQuery(selectedCategory);

  // console.log(555, _data);

  const handleGoBack = () => {
    goBack();
  };

  const handleSelectCategory = useCallback((id) => {
    setSelectedCategory(id);
  }, []);

  if (isFetching) {
    return (
      <View style={styles.indicator}>
        <AppText title={"Loading data"} />
        <ActivityIndicator color={colors.gray} size={"large"} />
      </View>
    );
  }

  if (_data) {
    Alert.alert("Chuck Noris random data", _data.value);
  }

  return (
    <>
      <CustomStatusBar />
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.content}>
            <Pressable onPress={handleGoBack}>
              <Ionicons name="arrow-back" size={25} color={colors.dark} />
            </Pressable>
            <AppText
              title={"Jokes categories"}
              fontSize={24}
              lineHeight={28}
              textAlign={"center"}
              ml={"10%"}
            />
          </View>
          <AppText title={"Click an item to get a random joke"} mh={"4%"} />
        </SafeAreaView>
        <FlatList
          data={data}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.itemsContainer}>
                <TouchableOpacity
                  onPress={() => handleSelectCategory(item)}
                  style={styles.textItem}
                >
                  <AppText title={item} fontSize={16} style={styles.text} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    margin: "5%",
  },
  itemsContainer: {
    margin: "2%",
    marginHorizontal: "4%",
  },
  textItem: {
    backgroundColor: "#c4c4c4",
  },
  text: { padding: "3%" },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(JokesCategories);
