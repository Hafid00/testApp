import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {MoviesStack} from './MoviesStackNavigator';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MoviesList'}
        options={{
          headerShown: null,
        }}
        component={MoviesStack}
      />
    </Stack.Navigator>
  );
};

export {Navigation};
