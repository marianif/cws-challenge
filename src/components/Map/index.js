import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Marker from "./Marker";
import { useSelector } from "react-redux";

const googleMapsApiKey = process.env.REACT_APP_MAPS_API_KEY;

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const Map = () => {
  const { viewport, markers } = useSelector((state) => state.ui);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={viewport}
      zoom={14}
      options={{
        disableDefaultUI: true,
      }}
    >
      {markers.pickup && <Marker position={markers.pickup} type="pickup" />}
      {markers.dropoff && <Marker position={markers.dropoff} type="dropoff" />}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
