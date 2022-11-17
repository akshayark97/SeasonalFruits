import { StyleSheet, FlatList } from "react-native";
import React from "react";
import Screen from "../../Screen";
import Card from "../../Card";
import { seasonalFruitApi } from "../../../config/seasonalFruitApi";
import routes from "../../../navigation/routes";

function SeasonHome({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={seasonalFruitApi}
        keyExtractor={(listings) => listings.id}
        renderItem={({ item }) => (
          <Card
            title={item.id}
            imageUrl={item.imageUrl}
            onPress={() => navigation.navigate(routes.FRUIT_LISTINGS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f4f4",
  },
  homeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default SeasonHome;
