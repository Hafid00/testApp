import React, {useState} from 'react';
import {View} from 'react-native';
import {SwipeablePanel} from 'rn-swipeable-panel';
import {useSelector} from 'react-redux';
import FilmCard from '../../Components/FilmCard';

const Favorite = ({openPanel, hide}) => {
  const favorites = useSelector(state => state?.favoritesReducer?.payload);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: hide,
    onPressCloseButton: hide,
  });

  return (
    <View>
      <SwipeablePanel {...panelProps} isActive={openPanel}>
        {favorites.map((fiml, i) => {
          return (
            <FilmCard
              key={i}
              handlePress={() => alert(fiml?.title)}
              film={fiml}
            />
          );
        })}
      </SwipeablePanel>
    </View>
  );
};

export default Favorite;
