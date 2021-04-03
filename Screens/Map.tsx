/* eslint-disable curly */
/* eslint-disable dot-notation */
const PHOTO_API_KEY = config['REACT_NATIVE_GOOGLE_API_KEY'];
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyMapView from '../Components/MapView';
import MapInput from '../Components/MapInput';
import PlacePreview from '../Components/PlacePreview';
import PlaceDetail from '../Components/PlaceDetail';
import AddModal from '../Components/AddModal';
import config from '../config';
import Place from '../interfaces/Place';
import Position from '../interfaces/Position';
import Region from '../interfaces/Region';

import { StackNavigationProp } from '@react-navigation/stack';
import ParamList from '../interfaces/ParamsList';

type ProfileScreenNavigationProp = StackNavigationProp<
  ParamList,
  'Map'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

type PhotoObjType = {
  height: number;
  html_attributions: String[];
  photo_reference: string;
  width: number;
};

const Map = ({ navigation }: Props) => {
  const [reg, setReg] = useState<Region | null>(null);
  const [placePreview, setPlacePreview] = useState<Place | undefined>();
  const [pdVisible, setPdVisible] = useState(false);
  const [AddModalVisible, setAddModalVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const latitudeDelta = 0.04;
  const longitudeDelta = 0.05;

  useEffect(() => {
    getCurrentLoc();
  }, []);

  useEffect(() => {
    if (openModal) setAddModalVisible(true);
  }, [openModal]);

  const updateLocation = (location: { lat: number; lng: number }) => {
    const latitude = location.lat;
    const longitude = location.lng;
    setReg({ latitude, longitude, latitudeDelta, longitudeDelta });
  };

  const getCurrentLoc = useCallback(async () => {
    // @ts-ignore: Unreachable code error
    await navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        const { latitude, longitude } = position.coords;
        setReg({ latitude, longitude, latitudeDelta, longitudeDelta });
      },
      (err: any) => Alert.alert(err),
    );
  }, []);

  const handlePdModalClose = () => {
    setPdVisible(false);
    setOpenModal(true);
  };

  const handleAddModalClose = () => {
    setAddModalVisible(false);
    setOpenModal(false);
  };

  const renderPlacePreview = useCallback(async (details) => {
    const {
      name,
      rating,
      formatted_address,
      international_phone_number,
      types,
      user_ratings_total,
      reviews,
      url,
    } = details;
    const latitude = details.geometry.location.lat;
    const longitude = details.geometry.location.lng;

    let open_now, weekday_text;
    if (details.opening_hours) {
      open_now = details.opening_hours.open_now;
      weekday_text = details.opening_hours.weekday_text;
    }
    let imgArr: string[] = [];
    let path;
    let response;
    let promisedArr;
    if (details.photos && details.photos.length) {
      promisedArr = details.photos.map(async (photoObj: PhotoObjType) => {
        path = photoObj.photo_reference;
        response = await fetch(
          `https://maps.googleapis.com/maps/api/place/photo?maxheight=1200&photoreference=${path}&key=${PHOTO_API_KEY}`,
        );
        return response.url;
      });
      imgArr = await Promise.all(promisedArr);
    }
    let review;
    if (reviews && reviews.length) {
      review = reviews[0].text;
    }

    let description;
    if (types && types.length) {
      if (types.length === 1) {
        description = types[0].split('_').join(' ');
      } else if (types.length > 1) {
        let first = types[0].split('_').join(' ');
        let second = types[1].split('_').join(' ');
        description = first + ', ' + second;
      } else {
        description = types[0];
      }
    }
    let id = '';

    setPlacePreview({
      id,
      name,
      rating,
      formatted_address,
      international_phone_number,
      imgArr,
      description,
      open_now,
      weekday_text,
      user_ratings_total,
      review,
      url,
      latitude,
      longitude,
    });
  }, []);

  return (
    <View style={styles.container}>
      {reg ? (
        reg.latitude ? (
          <MyMapView region={reg} small={null} />
        ) : null
      ) : null}
      <View style={styles.searchResults}>
        <Ionicons
          style={styles.icon}
          name="chevron-back"
          size={35}
          color="#0d525f"
          onPress={() => navigation.navigate('Explore')}
        />
        <MapInput
          updateLocation={updateLocation}
          renderPlacePreview={renderPlacePreview}
        />
      </View>
      <PlaceDetail
        place={placePreview}
        onPress={() => setPdVisible(false)}
        pdVisible={pdVisible}
        onAdd={handlePdModalClose}
      />
      {placePreview ? (
        placePreview.name ? (
          <PlacePreview
            place={placePreview}
            onPress={() => setPdVisible(true)}
            onAdd={() => setAddModalVisible(true)}
          />
        ) : null
      ) : null}
      <AddModal
        place={placePreview}
        isVisible={AddModalVisible}
        handleClose={handleAddModalClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  searchResults: {
    position: 'absolute',
    top: 60,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxHeight: 600,
    width: '93%',
    backgroundColor: '#FFFEF2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 25,
    paddingTop: 2,
  },
  icon: {
    position: 'absolute',
    top: 10,
  },
});

export default Map;
