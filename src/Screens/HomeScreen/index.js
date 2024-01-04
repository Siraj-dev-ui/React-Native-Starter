import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {leftArrowIcon} from '../../Theme/IconsImages';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header text={'Mental Health'} icon={leftArrowIcon} />
    </SafeAreaView>
  );
};

export default HomeScreen;
