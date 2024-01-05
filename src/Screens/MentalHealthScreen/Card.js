import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColors} from '../../Hooks';

const Card = ({title, image, onPress}) => {
  const Colors = useColors();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.bgCard,
        flex: 1,
        paddingVertical: 24,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
      }}
      activeOpacity={0.9}
      onPress={onPress}>
      <Image
        source={image}
        style={{width: 54, height: 54, resizeMode: 'contain'}}
      />
      <Text style={{color: Colors.black, marginTop: 8}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
