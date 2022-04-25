import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import IconButton from '../../../Components/IconButton';
import FilmCard from '../../../Components/FilmCard';
import {useDispatch, useSelector} from 'react-redux';
import {requestFilms} from '../../../models/Films/actions';
import FavoriteButton from '../../../Components/FavoriteButton';
import Favorite from '../../Favorites';

const MoviesList = props => {
  const {navigation} = props;
  const [getFilms, setGetFilms] = useState(false);
  const films = useSelector(state => state?.filmsReducer?.payload);
  const loading = useSelector(state => state?.filmsReducer?.loading);
  const favorites = useSelector(state => state?.favoritesReducer?.payload);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FavoriteButton onClick={() => setOpenModal(!openModal)} />
      ),
    });
  }, [navigation, favorites]);

  useEffect(() => {
    if (getFilms) {
      dispatch(requestFilms({}));
    }
  }, [getFilms]);

  return (
    <>
      {!getFilms ? (
        <View style={styles.sectionContainer}>
          <IconButton
            handlePress={() => setGetFilms(true)}
            bgColor={'#ddd'}
            text={'Get Top movies'}
          />
        </View>
      ) : (
        <View style={styles.filmsContainer}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <FlatList
              data={films}
              renderItem={({item}) => (
                <FilmCard
                  handlePress={() =>
                    navigation.navigate('MovieDetails', {film: item})
                  }
                  film={item}
                />
              )}
              keyExtractor={(film, i) => i}
            />
          )}
        </View>
      )}
      <Favorite openPanel={openModal} hide={() => setOpenModal(false)} />
    </>
  );
};

const styles = StyleSheet.create({
  filmsContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default MoviesList;
