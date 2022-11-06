import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchFruit from "../component/Search/SearchFruit";
import SeasonHomeNavigator from "./SeasonHomeNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={SeasonHomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
        <Tab.Screen
          name="search"
          component={SearchFruit}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="card-search" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
    </Tab.Navigator>
  );
};

export default AppNavigator;
