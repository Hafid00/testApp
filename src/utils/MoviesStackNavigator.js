import MoviesList from '../pages/Movies/MoviesList';
import { MovieDetails } from '../pages/Movies/MovieDetails';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const MoviesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'none',
      }}
    >
      <Stack.Screen
        name={'MoviesList'}
        options={{
          title: 'Movies',
        }}
        component={MoviesList}
      />
      <Stack.Screen
        name={'MovieDetails'}
        options={{
          title: 'Details',
        }}
        component={MovieDetails}
      />
    </Stack.Navigator>
  );
};

export { MoviesStack };
