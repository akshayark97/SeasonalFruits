import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";

import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          source={require('../../assets/Images/seasonFruitjanuary.png')}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title.toUpperCase()}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    color: 'tomato',
    fontWeight: 'bold',
    marginBottom: 7,
  },
});

export default Card;
