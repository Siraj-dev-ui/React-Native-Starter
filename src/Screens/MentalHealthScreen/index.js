import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';
import Header from '../../components/Header';
import {
  BreathImage,
  DiaryImage,
  GoalsImage,
  HelpLineImage,
  JournalImage,
  MoodTrackerImage,
  MyProgressImage,
  WorkoutImage,
} from '../../Theme/IconsImages';

const MentalHealthScreen = ({navigation}) => {
  const cards = [
    {
      id: 1,
      title: 'Self Help Journal',
      image: JournalImage,
    },
    {
      id: 2,
      title: 'Diary',
      image: DiaryImage,
    },
    {
      id: 3,
      title: 'Workout',
      image: WorkoutImage,
      onPress: () => {
        navigation.navigate('WorkoutScreen');
      },
    },
    {
      id: 4,
      title: 'Breathe',
      image: BreathImage,
    },
    {
      id: 5,
      title: 'Mood Tracker',
      image: MoodTrackerImage,
    },
    {
      id: 6,
      title: 'Goals',
      image: GoalsImage,
    },
    {
      id: 7,
      title: 'Help Line',
      image: HelpLineImage,
    },
    {
      id: 8,
      title: 'My Progress',
      image: MyProgressImage,
    },
  ];

  const renderItem = ({item}) => {
    return <Card {...item} />;
  };
  return (
    <View style={{flex: 1}}>
      <Header text={'Mental Health'} />
      <View style={{paddingVertical: 12, paddingHorizontal: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={cards}
          renderItem={renderItem}
        />
      </View>

      {/*
        
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
    </View>
  );
};

export default MentalHealthScreen;
