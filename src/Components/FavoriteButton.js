import React, { useLayoutEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '../Helpers/icons';
import { useSelector } from 'react-redux';

const FavoriteButton = ({ onClick }) => {
  const favorites = useSelector(state => state?.favoritesReducer?.payload);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={thisStyles.totalContainer}
      onPress={onClick}>
      <View style={thisStyles.dot}>
        <Text style={thisStyles.dotText}>{favorites?.length?.toString()}</Text>
      </View>

      <Image
        style={thisStyles.heartIcon}
        source={{
          uri: icons.heart,
        }}
      />
    </TouchableOpacity>
  );
};

const thisStyles = StyleSheet.create({
  heartIcon: { width: 20, height: 20 },
  totalContainer: {
    zIndex: 100,
    marginTop: 40,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  dot: {
    top: 6,
    right: 6,
    position: 'absolute',
    backgroundColor: 'yellow',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 20,
  },
  dotText: { fontSize: 10, color: '#000' },
});

export default FavoriteButton;
