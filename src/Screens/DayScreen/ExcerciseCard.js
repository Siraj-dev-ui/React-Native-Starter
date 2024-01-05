import {View, Text, Image} from 'react-native';
import React from 'react';
import {GirlExerciseImage, playIcon} from '../../Theme/IconsImages';
import {useColors} from '../../Hooks';

const ExcerciseCard = ({text}) => {
  const Colors = useColors();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 9,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.bgOrange200,
          paddingLeft: 21,
          paddingVertical: 19,
          borderTopLeftRadius: 7,
          borderBottomLeftRadius: 7,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: Colors.black,
          }}>
          {text}
        </Text>
        <Text style={{color: Colors.white}}>10-15 min</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-betweenh',
          height: '100%',
        }}>
        <View
          style={{
            flex: 0.65,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={GirlExerciseImage}
            style={{
              width: 90,
              height: 58,
              resizeMode: 'contain',
              marginVertical: 10,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.whiteBack,
            flex: 0.35,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 7,
            borderBottomRightRadius: 7,
          }}>
          <Image
            source={playIcon}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
          <Text>Play</Text>
        </View>
      </View>
    </View>
  );
};

export default ExcerciseCard;
