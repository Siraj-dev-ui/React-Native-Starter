import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {useColors} from '../../Hooks';
import ExcerciseCard from './ExcerciseCard';
import ButtonFull from '../../components/ButtonFull';

const DayScreen = ({route}) => {
  const {dayCount} = route.params;
  const Colors = useColors();
  return (
    <>
      <Header text={'Workout'} dayCount={dayCount} />
      <ScrollView>
        <View style={{marginHorizontal: 21}}>
          <Text
            style={{
              marginTop: 29,
              marginBottom: 19,
              fontSize: 32,
              color: Colors.primary,
            }}>
            Day <Text style={{fontWeight: 700}}>{dayCount}</Text>
          </Text>
          <ExcerciseCard text={'RIGHT LUNGE KNEE HOP'} />
          <ExcerciseCard text={'Scissors'} />
          <ExcerciseCard text={'Scissors'} />
          <ExcerciseCard text={'Scissors'} />
          <ExcerciseCard text={'Scissors'} />
          <ButtonFull
            title={'Start'}
            style={{marginTop: 50, marginBottom: 40}}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default DayScreen;
