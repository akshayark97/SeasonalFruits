import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  ScrollView,
} from "react-native";
import colors from "../../../config/colors";

function SeasonFruitDetails({ route }) {
  const listings = route.params;
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <Image style={styles.image} tint="light" source={listings.imageUrl}/>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listings.name}</Text>
          <View>
            <Text style={styles.sectionTitle}>Colors Available</Text>
            {listings.color.map((color) => (
              <Text style={styles.sectionSubText}>{color}</Text>
            ))}
          </View>
          <View>
            <Text style={styles.sectionTitle}>Health Benefits</Text>
            <Text style={styles.sectionSubText}>{listings.healthBenefits.description}</Text>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Vitamins</Text>
            {listings.vitamin.map((vit) => (
              <Text style={styles.sectionSubText}>{vit}</Text>
            ))}
          </View>
          <View>
            <Text style={styles.sectionTitle}>Places to grow in India</Text>
            {listings.places.map((place) => (
              <Text style={styles.sectionSubText}>{place}</Text>
            ))}
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  sectionSubText: {
    color: '#33425B',
    fontFamily: 'Cochin',
    fontSize: 18,
    fontWeight: "500",
    padding: 3
  },
  sectionTitle: {
    backgroundColor: '#55AE95',
    color: colors.white,
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 20,
    padding: 5,
  },
  image: {
    height: 200,
    width: "100%",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    color: "#FF7F3F",
    fontFamily: 'Cochin',
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default SeasonFruitDetails;
