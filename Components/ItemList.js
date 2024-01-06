import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const ItemList = ({ item }) => {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => Navigation.navigate(item.screen)}
    >
      <View>
        <Image style={styles.itemImage} source={{ uri: item.image }} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.itemText}>{item.title}</Text>
        <Icon
          name="arrowright"
          color="white"
          type="antdesign"
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingTop: 8,
    backgroundColor: "#f1f1f1",
    marginHorizontal: 10,
    marginTop: 30,
    borderRadius: 7,
  },
  itemImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  icon: {
    marginTop: 10,
    padding: 4,
    backgroundColor: "#333",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ItemList;
