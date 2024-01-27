import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { useDispatch, useSelector } from "react-redux";

import MapViewDirections from "react-native-maps-directions";
import { setTravelTimeInformation } from "../Slices/navSlice";

const MapReviews = () => {
  const mapRef = useRef(null);
  const { origin, destination } = useSelector((state) => {
    return state.nav;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom & fit to markers fitToSuppliedMarkers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: true,
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTimeTravel = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}&destinations=${destination.description}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };

    getTimeTravel();
  }, [origin, destination, process.env.EXPO_PUBLIC_GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
      style={{ flex: 1 }}
      ref={mapRef}
      showsUserLocation={true}
      zoomControlEnabled={true}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="#0069FF"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default MapReviews;
