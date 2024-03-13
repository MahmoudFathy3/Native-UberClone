import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import { setOrigin } from "../../Slices/navSlice";
import GooglePlaces from "../../Components/GooglePlaces";
import NavFavorites from "../../Components/NavFavorites";
import NavOpations from "../../Components/NavOpation";

const platform = Platform.OS === "android" && { paddingTop: 40 };

const Home = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[styles.container, platform]}>
      <View style={styles.wapper}>
        <Text style={styles.text}>Uber</Text>
      </View>

      <GooglePlaces
        placeholder="Where From?"
        styles={{
          container: { flex: 0, paddingBottom: 10, marginVertical: 15 },
          textInputContainer: { paddingHorizontal: 10 },
          textInput: {
            borderWidth: 1,
            borderColor: "#eee",
            borderRadius: 4,
          },
        }}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
        }}
      />

      <NavOpations />
      {/* <NavFavorites /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  wapper: {
    marginTop: 40,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Home;
