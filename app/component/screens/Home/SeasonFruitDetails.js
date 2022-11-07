import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../../../config/colors";

function SeasonFruitDetails({ route }) {
  const listings = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        // preview={{ uri: listings.images[0].thumbnailUrl }}
        tint="light"
        // uri={listings.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listings.name}</Text>
        <Text>{listings.color}</Text>
        <Text>{listings.healthBenefits.description}</Text>
        <Text>{listings.vitamin}</Text>
        <Text>{listings.places}</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default SeasonFruitDetails;
