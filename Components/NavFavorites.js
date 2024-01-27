import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { MaterialIcons } from "react-native-vector-icons";

const data = [
  {
    id: 1,
    name: "Home",
    Location: "Kfartha - Shibin Al-Qanater - Qalyubia",
    icon: "home",
  },
  {
    id: 823,
    name: "Work",
    Location: "Abbas Al-Akkad, Nasr City",
    icon: "work",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        paddingBottom: 20,
        paddingHorizontal: 20,
      }}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container}>
          <MaterialIcons
            name={item.icon}
            size={30}
            color={"#fff"}
            style={styles.icon}
          />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.Location}>{item.Location}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 5,
    marginBottom: 8,
  },
  icon: {
    backgroundColor: "#d8d8d8",
    padding: 5,
    borderRadius: 25,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  Location: {
    fontWeight: "500",
    color: "gray",
    width: 280,
  },
});

export default NavFavorites;
