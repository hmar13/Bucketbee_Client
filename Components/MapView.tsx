import React from 'react';
import { StyleSheet } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Region from '../interfaces/Region';


interface PropsMyMapView {
  region: Region;
  small: boolean | null;
}

const MyMapView: React.FC<PropsMyMapView> = ({ small, region }) => {
  return (
    <MapView
      style={small ? styles.smallMap : styles.map}
      provider={PROVIDER_GOOGLE}
      region={region}
      showsUserLocation={true}
    >
      {region && <Marker coordinate={region} />}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  smallMap: {
    height: 200,
    width: '100%',
    borderRadius: 7,
  },
});
export default MyMapView;
