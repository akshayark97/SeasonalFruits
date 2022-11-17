import { FlatList, StyleSheet, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import Screen from "../../Screen";
import { Form, FormField } from "../../form";
import SubmitButton from "../../form/SubmitButton";
import { seasonalFruitApi } from "../../../config/seasonalFruitApi";
import Card from "../../Card";
import { searchFruit } from "../../../config/utility";
import routes from "../../../navigation/routes";
import FruitDetail from "./FruitDetail";

const validationSchema = Yup.object().shape({
  searchItem: Yup.string().required().min(1).label("Search Fruit"),
});
function SearchFruitDetails({ navigation }) {
  const [searchExists, setSearchExists] = useState(false);
  const [searchResult, setSearchResult] = useState();
  
  const handleSearch = ({ searchItem }) => {debugger
    const fruitResult = searchFruit(searchItem, seasonalFruitApi)
    const updatedFruitResult = fruitResult.map((fruit, index) => fruit[0])
    const updatedResultNotUndefined = updatedFruitResult.filter(result => result !== undefined)
    setSearchResult(updatedResultNotUndefined)
    console.log(searchResult);
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
          placeholder="Search fruit season"
        />
        <SubmitButton title="Search" />
      </Form>
      <FlatList
        data={searchResult}
        keyExtractor={(list) => list.id}
        renderItem={({ item }) => 
          <FruitDetail
            title={item.season}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default SearchFruitDetails;
