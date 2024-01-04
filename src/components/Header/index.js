import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColors} from '../../Hooks';
import {leftArrowIcon} from '../../Theme/IconsImages';
import {useNavigation} from '@react-navigation/native';

const Header = ({text}) => {
  const Colors = useColors();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        paddingVertical: 25,
        paddingLeft: 20,
      }}>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          source={leftArrowIcon}
          style={{width: 24, height: 20, marginRight: 20}}
        />
      </TouchableOpacity>
      <Text style={{color: Colors.white, fontWeight: '700'}}>{text}</Text>
    </View>
  );
};

export default Header;
