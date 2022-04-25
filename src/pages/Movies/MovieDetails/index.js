import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { icons } from '../../../Helpers/icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleFavorite } from '../../../models/favorites/actions';
import Favorite from '../../Favorites';
import FavoriteButton from '../../../Components/FavoriteButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MovieDetails = props => {
  const { navigation, route } = props;
  const { film } = route.params;

  const dispatch = useDispatch();
  const favorites = useSelector(state => state?.favoritesReducer?.payload);
  const [alreadyInTheList, setAlreadyInTheList] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const check = favorites.filter(item => item.id == film.id).length > 0;
    setAlreadyInTheList(check);
  }, [favorites]);

  const handleAddToFavorites = selectedFilm => {
    dispatch(handleFavorite(selectedFilm));
  };


  return (
    <>
      <ScrollView style={detailsStyles.container}>
        {/* <IconButton
            handlePress={() => navigation.goBack()}
            bgColor={'#ddd'}
            text={'Back'}
            style={detailsStyles.backButton}
          /> */}
          <View style={detailsStyles.header}>
          <TouchableOpacity
          style={detailsStyles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={detailsStyles.backText}>Back</Text>
        </TouchableOpacity>
          <FavoriteButton onClick={() => setOpenModal(!openModal)} />
          </View>
        
        <View style={detailsStyles.imageContainer}>
          <Image
            style={detailsStyles.filmImage}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${film?.poster_path}`,
            }}
          />

          <TouchableOpacity
            style={{
              ...detailsStyles.insideBtn,
              backgroundColor: alreadyInTheList ? 'pink' : '#fff',
            }}
            activeOpacity={1}
            onPress={() => handleAddToFavorites(film)}>
            <Image
              style={detailsStyles.heartIcon}
              source={{
                uri: alreadyInTheList ? icons.heart : icons.heartWhite,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={detailsStyles.Part}>
          <Text style={detailsStyles.filmName}>{film?.title}</Text>
          <View style={detailsStyles.rating}>
            <Image
              style={detailsStyles.icon}
              source={{
                uri: icons.star,
              }}
            />
            <Text style={detailsStyles.rateNumber}>{film?.vote_average}</Text>
          </View>
        </View>

        <Text style={detailsStyles.desc}>{film?.overview}</Text>
      </ScrollView>
      <Favorite openPanel={openModal} hide={() => setOpenModal(false)} />
    </>
  );
};

const detailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Part: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  titlesContainer: {
    flex: 1,
  },
  rating: {
    padding: 16,
  },

  insideBtn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 20,
    paddingHorizontal: 30,
    zIndex: 9,
    borderTopEndRadius: 30,
  },

  imageContainer: {
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    overflow: 'hidden',
    position: 'relative',
  },
  filmImage: {
    width: screenWidth,
    height: screenHeight / 1.5,
  },
  icon: {
    width: 20,
    height: 20,
  },

  filmName: {
    flex: 1,
    color: '#181818',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 6,
  },
  desc: {
    color: '#ddd',
    fontSize: 14,
    padding: 10
  },
  rateNumber: {
    color: 'gold',
  },
  heartIcon: {
    width: 16,
    height: 16,
  },
  totalContainer: {
    position: 'relative',
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
  backButton: {
    backgroundColor: 'transparent',
    zIndex: 100,
    marginTop: 40,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#02A2F5',
    borderWidth: 1,
    width: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'

  },
  backText: {
    color: '#02A2F5'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export { MovieDetails };
