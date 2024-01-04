import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {useColors} from '../../Hooks';
import DayCount from './DayCount';

const WorkoutScreen = () => {
  const Colors = useColors();

  const days = [
    {dayCount: 1, textColor: Colors.white, bgColor: Colors.primary, margin: 22},
    {dayCount: 2, textColor: Colors.white, bgColor: Colors.primary, margin: 22},
    {
      dayCount: 3,
      bgColor: Colors.bgOrange200,
      margin: 22,
    },
    {dayCount: 4, margin: 22},
    {dayCount: 5},
    {dayCount: 6, margin: 22},
    {dayCount: 7, margin: 22},
    {dayCount: 8, margin: 22},
    {dayCount: 9, margin: 22},
    {dayCount: 10},
    {dayCount: 11, margin: 22},
    {dayCount: 12, margin: 22},
    {dayCount: 13, margin: 22},
    {dayCount: 14, margin: 22},
    {dayCount: 15},
    {dayCount: 16, margin: 22},
    {dayCount: 17, margin: 22},
    {dayCount: 18, margin: 22},
    {dayCount: 19, margin: 22},
    {dayCount: 20},
    {dayCount: 21, margin: 22},
    {dayCount: 22, margin: 22},
    {dayCount: 23, margin: 22},
    {dayCount: 24, margin: 22},
    {dayCount: 25},
    {dayCount: 26, margin: 22},
    {dayCount: 27, margin: 22},
    {dayCount: 28, margin: 22},
    {dayCount: 29, margin: 22},
    {dayCount: 30},
  ];

  console.log(days);

  const renderItem = ({item}) => {
    return <DayCount {...item} />;
  };
  return (
    <View style={{flex: 1}}>
      <Header text={'Workout'} />
      <View style={{paddingVertical: 12, paddingHorizontal: 20}}>
        <Text style={{fontSize: 32, color: Colors.primary}}>
          Level <Text style={{fontWeight: '700'}}>1</Text>
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={5}
          data={days}
          renderItem={renderItem}
        />
      </View>

      <Text>Progress</Text>

      <View style={{flexDirection: 'row'}}>
        <ProgressComp />
      </View>
    </View>
  );
};

export default WorkoutScreen;

const ProgressComp = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text>Days</Text>
        <Text>Completed</Text>
      </View>
      <View>
        <Text>6</Text>
      </View>
    </View>
  );
};
