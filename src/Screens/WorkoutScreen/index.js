import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {useColors} from '../../Hooks';
import DayCount from './DayCount';
import ButtonFull from '../../components/ButtonFull';

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

  const renderItem = ({item}) => {
    return <DayCount {...item} />;
  };
  return (
    <View style={{flex: 1}}>
      <Header text={'Workout'} />
      <ScrollView style={{paddingVertical: 12, paddingHorizontal: 20}}>
        <Text style={{fontSize: 32, color: Colors.primary, marginBottom: 10}}>
          Level <Text style={{fontWeight: '700'}}>1</Text>
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={5}
          data={days}
          renderItem={renderItem}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            color: Colors.black,
            marginTop: 25,
            marginBottom: 10,
          }}>
          Progress
        </Text>

        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <ProgressComp
            text={'Days Completed'}
            number={6}
            style={{marginRight: 4, backgroundColor: Colors.bgOrange100}}
          />
          <ProgressComp
            text={'Days Remaining'}
            number={2}
            style={{marginLeft: 4, backgroundColor: Colors.bgOrange100}}
          />
        </View>

        <ButtonFull title={'Start'} style={{marginBottom: 40}} />
      </ScrollView>
    </View>
  );
};

export default WorkoutScreen;

const ProgressComp = ({text, number, style}) => {
  return (
    <View
      style={{
        ...style,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 19,
        paddingVertical: 8,
        borderRadius: 7,
      }}>
      <View style={{flex: 1, marginRight: 30}}>
        <Text style={{color: 'rgba(0, 0, 0, 1)'}}>{text}</Text>
        {/* <Text>Days</Text>
        <Text>Completed</Text> */}
      </View>
      <Text
        style={{fontWeight: '700', fontSize: 40, color: 'rgba(0, 0, 0, 1)'}}>
        {number}
      </Text>
    </View>
  );
};
