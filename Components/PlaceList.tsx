/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';

import { useMutation } from '@apollo/client';
import { DELETE_PLACE } from '../Services/Places/PlacesMutation';
import { PLACE_ARRAY_FRAGMENT } from '../Services/Places/PlacesFragment';
import DeleteDialog from './DeleteDialog';
import theme from '../styles/theme.style';
import Place from '../interfaces/Place';
import Category from '../interfaces/Category';

interface PlaceListProps {
  places: Place[];
  catId: string;
  bucketId: string;
  // keyExtractor?: ((item: Place, index: number) => string) | undefined
}

const PlaceList: React.FC<PlaceListProps> = ({ places, catId, bucketId }) => {
  const navigation = useNavigation();
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [placeId, setPlaceId] = useState<string | undefined>();
  const [deletePlace] = useMutation(DELETE_PLACE);

  const handleDelete = (): void => {
    try {
      deletePlace({
        variables: { bucketId, catId, placeId },
        update(cache) {
          const category: Category | null = cache.readFragment({
            id: `Category:${catId}`,
            fragment: PLACE_ARRAY_FRAGMENT,
          });
          const newPlaces: Place[] = category ? category.places.filter(
              (p) => p.id !== placeId
            ) : [];
          cache.writeFragment({
            id: `Category:${catId}`,
            fragment: PLACE_ARRAY_FRAGMENT,
            data: {
              places: newPlaces,
            },
          });
        },
      });
      setDeleteVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (places.length) {
    return (
      <>
        <FlatList
          horizontal={true}
          data={places}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity
                  onLongPress={() => {
                    setPlaceId(item.id);
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                    setDeleteVisible(true);
                  }}
                  onPress={() => {
                    const place = { ...item, catId, bucketId };
                    navigation.navigate('Place', place);
                  }}
                  activeOpacity={0.6}
                >
                  {
                    item.imgArr?
                    <View style={styles.placeContainer}>
                      <Image
                        style={styles.image}
                        source={{ uri: item.imgArr[0] }}
                      />
                      <Text style={styles.placeName}>{item.name}</Text>
                    </View>
                  : null
                  }
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <DeleteDialog
          deleteVisible={deleteVisible}
          setDeleteVisible={setDeleteVisible}
          handleDelete={handleDelete}
        />
      </>
    );
  } else {
    return (
      <View style={styles.noneContainer}>
        <Text style={styles.noText}>
          Nothing saved yet, add a place by searching the map or take a photo
          and create your own!
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  placeContainer: {
    height: 200,
    width: 300,
    backgroundColor: '#fffef8',
    borderRadius: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 25,
  },
  noneContainer: {
    height: 180,
    width: 300,
    borderColor: theme.PRIMARY_COLOR_XLITE,
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noText: {
    color: theme.PRIMARY_COLOR_XLITE,
    fontSize: 15,
    fontFamily: 'Raleway_400Regular',
    paddingBottom: 8,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  placeName: {
    color: theme.PRIMARY_COLOR,
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 20,
    padding: 10,
  },
});

export default PlaceList;
