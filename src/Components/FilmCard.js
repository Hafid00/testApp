import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icons} from '../Helpers/icons';

const FilmCard = ({film, handlePress}) => {

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={cardStyles.container}
      onPress={handlePress}>
      {film?.poster_path ? (
        <Image
          style={cardStyles.filmImage}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${film?.poster_path}`,
          }}
        />
      ) : null}
      <View style={cardStyles.titlesContainer}>
        <Text style={cardStyles.filmName}>{film?.title}</Text>
        <Text style={cardStyles.desc} numberOfLines={1}>
          {film?.overview}
        </Text>
      </View>
      <View style={cardStyles.rating}>
        <Image
          style={cardStyles.icon}
          source={{
            uri: icons.star,
          }}
        />
        <Text style={cardStyles.rateNumber}>{film?.vote_average}</Text>
      </View>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    margin: 16,

    flexDirection: 'row',
    alignItems: 'center',
  },
  titlesContainer: {
    flex: 1,
  },
  rating: {
    padding: 16,
  },
  filmImage: {
    marginRight: 16,
    width: 60,
    height: 80,
  },
  icon: {
    width: 20,
    height: 20,
  },

  filmName: {
    color: '#181818',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  desc: {
    color: '#ddd',
    fontSize: 14,
  },
  rateNumber: {
    color: 'gold',
  },
});

export default FilmCard;
