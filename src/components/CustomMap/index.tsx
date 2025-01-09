import React, { FC, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import styles, { autoCompleteStyles } from './styles';
import { Location, GeocoderResult } from '../../types/LocationProps';
import CustomMapProps from '../../types/CustomMapProps';

Geocoder.init('YOUR GOOGLE MAP KEY HERE');

const CustomMap: FC<CustomMapProps> = ({ onLocationChange, initialPlace, initialLatitude, initialLongitude }) => {
  const [selectedPlace, setSelectedPlace] = useState<string>(initialPlace || '');
  const [location, setLocation] = useState<Location>({
    latitude: initialLatitude || '',
    longitude: initialLongitude || '',
  });

  const handleLocationUpdate = (place: string, latitude: string, longitude: string) => {
    setSelectedPlace(place);
    setLocation({ latitude, longitude });
    onLocationChange(place, latitude, longitude);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.searchContainer}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            minLength={2}
            fetchDetails={true}
            debounce={200}
            onPress={(data, details = null) => {
              const place = details?.formatted_address || '';
              const latitude = details?.geometry?.location?.lat?.toString() || '';
              const longitude = details?.geometry?.location?.lng?.toString() || '';
              handleLocationUpdate(place, latitude, longitude);
            }}
            query={{
              key: 'YOUR GOOGLE MAP KEY HERE',
              language: 'en',
              type: 'geocode',
            }}
            styles={autoCompleteStyles}
            listViewDisplayed={true}
          />
        </View>
      </ScrollView>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          onPress={(e) => {
            const { latitude, longitude } = e.nativeEvent.coordinate;
            Geocoder.from({ latitude, longitude })
              .then((json: GeocoderResult) => {
                const place = json.results[0].formatted_address;
                handleLocationUpdate(place, latitude.toString(), longitude.toString());
              })
              .catch((error) => console.warn(error));
          }}
        >
          <Marker
            coordinate={{
              latitude: parseFloat(location.latitude) || 0,
              longitude: parseFloat(location.longitude) || 0,
            }}
            draggable
            onDragEnd={(e) => {
              const { latitude, longitude } = e.nativeEvent.coordinate;
              Geocoder.from({ latitude, longitude })
                .then((json: GeocoderResult) => {
                  const place = json.results[0].formatted_address;
                  handleLocationUpdate(place, latitude.toString(), longitude.toString());
                })
                .catch((error) => console.warn(error));
            }}
          />
        </MapView>
        <View style={styles.infoContainer}>
          <Text>Place: {selectedPlace}</Text>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomMap;
