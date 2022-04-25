import Auth from '../pages/auth';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Auth'}
        options={{
          headerShown: false,
        }}
        component={Auth}
      />
    </Stack.Navigator>
  );
};

export {AuthNavigation};