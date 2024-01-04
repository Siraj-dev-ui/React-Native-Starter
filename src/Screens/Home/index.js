import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {leftArrowIcon} from '../../Theme/IconsImages';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header text={'Mental Health'} />
    </SafeAreaView>
  );
};

export default Home;
