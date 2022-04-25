import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {icons} from '../../Helpers/icons';
import IconButton from '../../Components/IconButton';
import {requestLogin} from '../../models/user/actions';


const Auth = () => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(
      requestLogin({
        email: 'hafid.chaikhsidiboubakkar@gmail.com',
        password: 'Test@0000',
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.Title}>Welcome stranger!</Text>

        <Image
          style={styles.Icon}
          source={{
            uri: icons.userIcon,
          }}
        />
        <TouchableOpacity onPress={() => login()} style={styles.Touchable}>
          <Text style={styles.TouchableText}>
            Please log in to continue to the awesomness
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerSection}>
        <IconButton
          handlePress={() => login()}
          icon={icons.facebook}
          bgColor={'#3C5B9B'}
          text={'Login with Facebook'}
        />
        <IconButton
          handlePress={() => login()}
          icon={icons.google}
          bgColor={'#E34133'}
          text={'Or with Google'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    marginBottom: 30,
    fontSize: 24,
    fontWeight: '600',
  },
  Icon: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  Touchable: {width: 180},
  TouchableText: {
    textAlign: 'center',
    color: '#A3A3A3',
    fontSize: 15,
    fontWeight: '600',
  },
  footerSection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Auth;
