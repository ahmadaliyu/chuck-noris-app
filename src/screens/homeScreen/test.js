import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "./index";

describe("HomeScreen", () => {
  it("renders loading spinner when data is being fetched", () => {
    const { getByText } = render(<HomeScreen isLoading={true} />);
    const loadingText = getByText("Loading data");
    expect(loadingText).toBeTruthy();
  });

  it("renders categories button and search input when data is fetched", () => {
    const { getByText, getByPlaceholderText } = render(
      <HomeScreen isLoading={false} />,
    );
    const categoriesButton = getByText("Fetch categories");
    const searchInput = getByPlaceholderText("Enter text...");
    expect(categoriesButton).toBeTruthy();
    expect(searchInput).toBeTruthy();
  });

  it("renders error alert when an error occurs", () => {
    const error = { error: "Network error" };
    const { getByText } = render(<HomeScreen isError={true} error={error} />);
    const errorText = getByText("Network error");
    expect(errorText).toBeTruthy();
  });

  it("renders list of jokes when queryData is not empty", () => {
    const queryData = [{ value: "Chuck Norris can divide by zero." }];
    const { getByText } = render(<HomeScreen queryData={queryData} />);
    const jokeText = getByText("Chuck Norris can divide by zero.");
    expect(jokeText).toBeTruthy();
  });
});
