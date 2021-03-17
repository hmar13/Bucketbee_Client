/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native';
import theme from '../styles/theme.style';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Linking,
  Modal,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Place from '../interfaces/Place';

interface PropsPlaceDetail {
  place: Place | undefined;
  onPress(): void;
  pdVisible: boolean;
  onAdd(): void;
}

const PlaceDetail: React.FC<PropsPlaceDetail> = ({
  place,
  onPress,
  pdVisible,
}) => {
  return (
    <Modal transparent={true} visible={pdVisible} animationType="slide">
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <FlatList
              style={styles.imageContainer}
              horizontal={true}
              data={place ? place.imgArr : null}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                return (
                  <Image
                    style={styles.image}
                    source={{
                      uri: item,
                    }}
                  />
                );
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{place ? place.name : null}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {place ? (
                place.rating ? (
                  <Text
                    style={{ fontFamily: 'Lato_700Bold', color: '#0d525f' }}
                  >
                    {place.rating} ({place.user_ratings_total}) &nbsp;&nbsp;
                    <FontAwesome
                      name="star"
                      size={16}
                      color={theme.SPECIAL_COLOR}
                    />
                    &nbsp;&nbsp;
                  </Text>
                ) : null
              ) : null}
              {place ? (
                place.open_now !== undefined ? (
                  place.open_now ? (
                    <Text
                      style={{
                        color: 'green',
                        fontFamily: 'Lato_400Regular',
                        paddingRight: 5,
                      }}
                    >
                      Open Now
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: 'red',
                        fontFamily: 'Lato_400Regular',
                        paddingRight: 5,
                      }}
                    >
                      Closed
                    </Text>
                  )
                ) : null
              ) : null}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL(place ? place.url : '')}
              >
                Open in Google Maps
              </Text>
            </View>
            <Text>{''}</Text>
            <Text style={[styles.text, { textTransform: 'capitalize' }]}>
              {place ? place.description : null}
            </Text>
            <Text style={styles.text}>
              {place ? place.formatted_address : null}
            </Text>
            <Text style={styles.text}>
              {place ? place.international_phone_number : null}
            </Text>
            <Text>{''}</Text>
            <FlatList
              data={place ? place.weekday_text : null}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                return <Text style={styles.text}>{item}</Text>;
              }}
            />
            {place ? (
              place.review ? (
                <>
                  <Text>{''}</Text>
                  <Text
                    style={[
                      styles.text,
                      { fontFamily: 'Lato_400Regular_Italic' },
                    ]}
                  >
                    "{place.review}"
                  </Text>
                  <Text>{''}</Text>
                </>
              ) : null
            ) : null}
            <Pressable style={styles.button} onPress={onPress}>
              <AntDesign
                name="downcircle"
                size={55}
                color={theme.PRIMARY_COLOR}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  container: {
    borderRadius: 25,
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  imageContainer: {
    overflow: 'scroll',
    width: '100%',
    height: 400,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  textContainer: {
    padding: 15,
    backgroundColor: '#fffef8',
  },
  image: {
    width: 300,
    height: 400,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
    color: '#0d525f',
    paddingBottom: 10,
  },
  text: {
    fontFamily: 'Lato_400Regular',
    color: '#0d525f',
    paddingTop: 2,
  },
  link: {
    fontFamily: 'Lato_400Regular',
    color: theme.PRIMARY_COLOR_LITE,
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },
  button: {
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 5,
    width: 100,
  },
  modal: {
    flex: 1,
    backgroundColor: '#00000000',
  },
});

export default PlaceDetail;
