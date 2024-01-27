import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlaces = (props) => {
  return (
    <>
      <GooglePlacesAutocomplete
        disableScroll={props.disableScroll}
        placeholder={props.placeholder}
        onPress={props.onPress}
        styles={props.styles}
        enablePoweredByContainer={false}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_APIKEY,
          language: "ar",
        }}
        fetchDetails={true}
        nearbyPlacesAPI="GooglePlaceSearch"
        debounce={400}
      />
    </>
  );
};

export default GooglePlaces;
