import { View, StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../../../config/colors";

function FruitDetail({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  text: {
    backgroundColor: "#55AE95",
    color: "#fff",
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    padding: 20
  }
});

export default FruitDetail;
