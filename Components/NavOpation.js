import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { DATA } from "../data";
import ItemList from "./ItemList";

const NavOpations = () => {
  return (
    <SafeAreaView style={{ paddingLeft: 10 }}>
      <FlatList
        data={DATA}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ItemList item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default NavOpations;
