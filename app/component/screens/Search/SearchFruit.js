import { View, StyleSheet, Text } from "react-native";
import React from "react";
import Screen from "../Screen";

function SearchFruit() {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.header}>Fruits in Season in January</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#f8f4f4",
      },
      header: {
      },
});

export default SearchFruit;
