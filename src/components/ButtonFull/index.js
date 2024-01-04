import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColors} from '../../Hooks';

const ButtonFull = ({title, style}) => {
  const Colors = useColors();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        ...style,
        backgroundColor: Colors.bgOrange300,
        paddingVertical: 17,
        alignItems: 'center',
        borderRadius: 7,
      }}>
      <Text style={{color: Colors.white}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonFull;
