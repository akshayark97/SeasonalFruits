import React from "react";
import { FlatList, StyleSheet } from "react-native";
import routes from "../../../navigation/routes";
import Card from "../../Card";
import Screen from "../../Screen";

function SeasonFruits({ navigation, route }) {
  const listings = route.params;
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings.fruits}
        keyExtractor={(list) => list.fruits}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            onPress={() => navigation.navigate(routes.FRUIT_DETAILS, item)}
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

export default SeasonFruits;
