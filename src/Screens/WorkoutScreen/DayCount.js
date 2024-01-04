import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColors} from '../../Hooks';

const DayCount = ({
  dayCount,
  textColor = 'rgba(21, 21, 21, 1)',
  bgColor = 'rgba(248, 248, 248, 1)',
  margin,
}) => {
  const Colors = useColors();
  // console.log('in day count', dayCount);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        flex: 1,
        width: 57,
        height: 57,
        backgroundColor: bgColor,
        marginRight: margin,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
      }}>
      <Text style={{color: textColor, fontWeight: '500'}}>{dayCount}</Text>
      <Text style={{color: textColor}}>{'Day'}</Text>
    </TouchableOpacity>
  );
};

export default DayCount;
