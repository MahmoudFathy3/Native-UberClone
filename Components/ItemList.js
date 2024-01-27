import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "react-native-vector-icons";
import { useSelector } from "react-redux";

const ItemList = ({ item }) => {
  const Navigation = useNavigation();
  const { origin } = useSelector((state) => state.nav);

  return (
    <TouchableOpacity
      style={[styles.itemContainer, { opacity: !origin ? 0.4 : 1 }]}
      onPress={() => Navigation.navigate(item.screen)}
      disabled={!origin}
    >
      <View style={styles.imgContainer}>
        <Image style={styles.itemImage} source={{ uri: item.image }} />
      </View>
      <View>
        <Text style={styles.itemText}>{item.title}</Text>
        <View style={styles.containerIcon}>
          <AntDesign
            name="arrowright"
            color="white"
            size={20}
            style={styles.icon}
          />
        </View>
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
    marginBottom: 20,
    borderRadius: 7,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  imgContainer: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
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
  containerIcon: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 50,
    alignSelf: "flex-end",
    marginTop: 5,
  },
});

export default ItemList;
