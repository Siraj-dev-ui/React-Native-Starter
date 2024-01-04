import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColors} from '../../Hooks';
import {leftArrowIcon} from '../../Theme/IconsImages';
import {useNavigation} from '@react-navigation/native';

const Header = ({text, dayCount}) => {
  const Colors = useColors();
  // const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        paddingVertical: 17,
        paddingLeft: 20,
        alignItems: 'center',
      }}>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          source={leftArrowIcon}
          style={{width: 24, height: 20, marginRight: 20}}
        />
      </TouchableOpacity>
      <Text style={{color: Colors.white, fontWeight: '700', fontSize: 23}}>
        {text}
      </Text>

      {dayCount && (
        <View
          style={{
            marginLeft: 15,
            paddingHorizontal: 11,
            paddingVertical: 5,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: Colors.white,
          }}>
          <Text style={{color: Colors.white}}>Day {dayCount}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
