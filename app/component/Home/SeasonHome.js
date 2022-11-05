import { Text, StyleSheet, View } from "react-native";
import React from "react";
import Screen from "../Screen";
import Card from "../Card";

function SeasonHome() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.homeContainer}>
        <Card title="hello" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f4f4",
  },
  homeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
});

export default SeasonHome;
