import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";
import { useSelector } from "react-redux";

const data = [
  {
    id: "RideX-1",
    name: "RideX",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzc_lRR6fFaLn4XB_MY7iyPKjh33JyerpPOQ&usqp=CAU",
    multiplier: 1,
  },
  {
    id: "Ride XL-2",
    name: "Ride XL",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFALWaOKCvJ5ovdgpY-tRGytAhLt8M2vO_g&usqp=CAU",
    multiplier: 1.2,
  },
  {
    id: "Ride LUX-3",
    name: "Ride LUX",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9508vP6V4AF13PhtNHeljjo9p8P942k-HhptdxRdo8AlK1rlnf-ZRyQrcLDQaMKQ3Wk&usqp=CAU",
    multiplier: 1.75,
  },
];

// iF we Surge Pricing , this goes up
const SURGE_CHARGE_RATE = 1.5;

const RideOptionCard = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const { travelTimeInformation } = useSelector((state) => state.nav);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.headerRide}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name="chevron-left" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Select Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.carCard,
              item.id === selected.id && {
                backgroundColor: "rgb(240, 240, 240)",
              },
            ]}
            onPress={() => setSelected(item)}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ marginLeft: -20 }}>
              <Text style={styles.carCardName}>{item.name}</Text>
              <Text style={{ color: "gray" }}>
                {travelTimeInformation?.duration?.text} Travel Time
              </Text>
            </View>
            <Text style={{ marginRight: 15 }}>
              {new Intl.NumberFormat("en-ar", {
                style: "currency",
                currency: "EGP",
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={[
          styles.ChooseBtn,
          !selected && { backgroundColor: "rgb(240, 240, 240)" },
        ]}
        disabled={!selected}
      >
        <Text style={styles.ChooseBtnText}>Choose {selected.name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerRide: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: { position: "absolute", left: 20, top: 15 },
  headerText: {
    fontSize: 17,
    marginVertical: 15,
    fontWeight: "bold",
  },
  carCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  carCardName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  ChooseBtn: {
    margin: 15,
    backgroundColor: "rgb(60, 60, 60)",
    padding: 10,
    borderRadius: 5,
  },
  ChooseBtnText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default RideOptionCard;
