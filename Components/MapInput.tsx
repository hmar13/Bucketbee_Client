import config from '../config';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const PLACE_API_KEY = config['REACT_NATIVE_GOOGLE_API_KEY'];

interface LatLng {
  lat: number;
  lng: number;
}

interface Props {
  updateLocation(val: LatLng): void;
  renderPlacePreview(val: object): void;
}

const MapInput: React.FC<Props> = ({ updateLocation, renderPlacePreview }) => {
  return (
    <GooglePlacesAutocomplete
      styles={{
        textInput: {
          height: 50,
          backgroundColor: '#FFFEF2',
          borderRadius: 25,
          fontSize: 20,
          fontFamily: 'Lato_400Regular',
          color: '#0d525f',
        },
        textInputContainer: {
          width: '90%',
          alignSelf: 'flex-end',
          justifyContent: 'center',
        },
        listView: {
          borderRadius: 25,
        },
        description: {
          fontFamily: 'Lato_400Regular',
          color: '#0d525f',
        },
        row: {
          backgroundColor: '#FFFEF2',
        },
        poweredContainer: {
          backgroundColor: '#FFFEF2',
        },
      }}
      placeholder={'Search'}
      //autoFocus in google-places-autocomplete package hasn't been included so ignoring the error:
      // @ts-ignore: Unreachable code error
      autoFocus={true}
      fetchDetails={true}
      onPress={(data, details = null) => {
        if (details) {
          updateLocation(details.geometry.location);
          renderPlacePreview(details);
        } //create an else statement here if details doesn't return the object
      }}
      onFail={(error) => console.error(error)}
      query={{
        key: PLACE_API_KEY,
        language: 'en',
      }}
      debounce={200}
    />
  );
};

export default MapInput;
