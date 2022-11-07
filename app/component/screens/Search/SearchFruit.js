import { FlatList, StyleSheet, Text, TextInput } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../../Screen";
import { Form, FormField } from "../../form";
import SubmitButton from "../../form/SubmitButton";
import seasonFruitApi from "../../../config/seasonalFruitApi.json";
import Card from "../../Card";

const validationSchema = Yup.object().shape({
  searchItem: Yup.string().required().min(1).label("Search Fruit"),
});
function SearchFruit({ navigation }) {
  const [searchExists, setSearchExists] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = ({ searchItem }) => {
    console.log("====================================");
    console.log(searchItem);
    console.log("====================================");
    seasonFruitApi.seasonalFruit.map((seasonFruit) => {
      if (seasonFruit !== undefined) {
        seasonFruit.fruits.map((fruit) => {
          if (fruit !== undefined) {
            if (fruit.name === searchItem) {
              setSearchExists(true);
              setSearchResult([...searchResult, fruit]);
              console.log("Search result====================================");
              console.log(searchResult);
              console.log("====================================");
            }
          }
        });
      }
    });
  };
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          searchItem: "",
        }}
        onSubmit={handleSearch}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          name="searchItem"
          placeholder="search here..."
        />
        <SubmitButton title="Search" />
      </Form>
      {searchExists && <Text>{searchResult.map((result) => result.name)}</Text>}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default SearchFruit;
