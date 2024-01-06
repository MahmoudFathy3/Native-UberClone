import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import NavOpation from "../../Components/NavOpation";


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wapper}>
        <Text style={styles.text}>Uber</Text>
      </View>

      <NavOpation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  wapper: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Home;
