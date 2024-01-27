import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import React from "react";
import GooglePlaces from "./GooglePlaces";
import { useDispatch } from "react-redux";
import { setDestination } from "../Slices/navSlice";
import { Ionicons } from "react-native-vector-icons";
import NavFavorites from "./NavFavorites";

const NavigateCard = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Pressable onPressOut={() => Keyboard.dismiss()} style={{ flex: 1 }}>
        <Text style={styles.title}>Good Morning, Mahmoud</Text>
        <View style={{ flex: 1 }}>
          <GooglePlaces
            placeholder="Where To?"
            styles={GoogleStyles}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionCard");
            }}
          />
          <NavFavorites />
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.btnRides}
              onPress={() => navigation.navigate("RideOptionCard")}
            >
              <Ionicons name="car" size={25} color="#fff" />
              <Text style={styles.textBtnRides}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnEats}>
              <Ionicons name="fast-food-outline" size={25} color="#333" />
              <Text style={styles.textBtnEats}>Eats</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const GoogleStyles = {
  container: {
    flex: 0,
    paddingBottom: 25,
  },
  textInputContainer: { paddingHorizontal: 10 },
  textInput: {
    backgroundColor: "#e6e6e6",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 4,
  },
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 15,
  },
  border: {
    flexShrink: 1,
    backgroundColor: "#ddd",
  },

  containerButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    paddingVertical: 15,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  btnRides: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#333",
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  textBtnRides: {
    fontWeight: "bold",
    color: "#fff",
  },
  btnEats: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  textBtnEats: {
    fontWeight: "bold",
    color: "#333",
  },
});

export default NavigateCard;
