import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons} from '../Helpers/icons';

const IconButton = ({text, icon, bgColor, handlePress, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{...btnStyles.container, backgroundColor: bgColor,  ...style}}
      onPress={handlePress}>
      {icon && (
        <Image
          style={btnStyles.Icon}
          source={{
            uri: icon,
          }}
        />
      )}
      <Text style={btnStyles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  text: 'button text',
  bgColor: '#ddd',
};

const btnStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 16,
    flexDirection: 'row',
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    marginRight: 8,
    height: 20,
    width: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default IconButton;
