import { createStackNavigator } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import NavigateCard from "../../Components/NavigateCard";
import RideOptionCard from "../../Components/RideOptionCard";
import MapReviews from "../../Components/MapReview";
import { AntDesign } from "react-native-vector-icons";

const Stack = createStackNavigator();

const Maps = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerLeft}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={25} color="#333" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <MapReviews />

      <View style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
            headerMode: "float",
            headerShown: false,
          }}
        >
          <Stack.Screen name="NavigateCard" component={NavigateCard} />
          <Stack.Screen name="RideOptionCard" component={RideOptionCard} />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginHorizontal: 20,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    height: 60,
  },
  btnRides: {
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
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  textBtnEats: {
    fontWeight: "bold",
    color: "#333",
  },
});
export default Maps;
