import React, { memo, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import AppText from "../../components/text/index";
import CustomStatusBar from "../../components/status-bar";
import AppButton from "../../components/button/index";
import { WIDTH } from "../../components/constants";
import colors from "../../components/utils/colors";
import {
  useFetchCategoriesQuery,
  useSearchJokeQuery,
} from "../../../redux/services";

const HomeScreen = ({ navigation: { navigate } }) => {
  const [queryString, setQueryString] = useState("");
  const { data, isLoading, error, isError } = useFetchCategoriesQuery();
  const { data: queryData, isFetching } = useSearchJokeQuery(queryString);

  const handleViewCategories = () => {
    navigate("categories");
  };

  const handleSearchJoke = useCallback((queryParam) => {
    if (!queryParam) setQueryString("");
    setQueryString(queryParam);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <AppText title={"Loading data"} />
        <ActivityIndicator color={colors.gray} size={"large"} />
      </View>
    );
  }

  if (isError) Alert.alert(error.error); // do something else to handle errors

  return (
    <>
      <CustomStatusBar />
      <View style={styles.container}>
        <SafeAreaView>
          <AppText
            title={"Chuck Noris Jokes app"}
            fontSize={24}
            lineHeight={28}
            textAlign={"center"}
            mt={"20%"}
          />
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={handleViewCategories}
              title={"Fetch categories"}
              indicator={
                isLoading ? <ActivityIndicator color={colors.default} /> : null
              }
            />
          </View>
          <AppText
            title={
              "You can also try the free text search by a search term below "
            }
            mh={"5%"}
          />
          <AppText title={"Search"} fontSize={16} ml={"5%"} mt={"5%"} />
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={(val) => handleSearchJoke(val)}
              value={queryString}
              style={styles.textInput}
              placeholder="Enter text..."
              placeholderTextColor={colors.gray}
            />
          </View>
          {queryString && !isFetching ? (
            <FlatList
              data={queryData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.itemsContainer}>
                    <AppText
                      title={item.value}
                      fontSize={12}
                      style={styles.text}
                    />
                  </View>
                );
              }}
            />
          ) : isFetching ? (
            <ActivityIndicator style={{ marginTop: "5%" }} size={"small"} />
          ) : null}
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: (100 / 375) * WIDTH,
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: "#666",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    paddingVertical: "1.5%",
    marginTop: "2%",
  },
  textInput: {
    width: "100%",
    marginHorizontal: "2%",
  },
  text: { padding: "3%" },
});

export default memo(HomeScreen);
