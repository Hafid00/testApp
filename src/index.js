import React from 'react';
import {Navigation} from './utils/router';
import {AuthNavigation} from './utils/AuthStackNavigator';
import {useSelector} from 'react-redux';

const App = () => {
  const user = useSelector(state =>state?.userReducer?.user);

  return user ? <Navigation /> : <AuthNavigation />;
};

export {App};
