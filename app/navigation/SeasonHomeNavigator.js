import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SeasonFruits from "../component/screens/Home/SeasonFruits";
import SeasonHome from "../component/screens/Home/SeasonHome";
import SeasonFruitDetails from "../component/screens/Home/SeasonFruitDetails";

const Stack = createNativeStackNavigator();
const SeasonHomeNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="SeasonListings" component={SeasonHome} />
    <Stack.Screen name="FruitListings" component={SeasonFruits} />
    <Stack.Screen name="FruitDetails" component={SeasonFruitDetails} />
  </Stack.Navigator>
);

export default SeasonHomeNavigator;
