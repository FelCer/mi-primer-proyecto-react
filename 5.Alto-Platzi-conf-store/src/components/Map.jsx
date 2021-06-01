import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const apiKey = String(process.env.Google_Map_key);
  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const defaultCenter = {
      lat: data.lat, 
      lng: data.lng
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
      >
          <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
