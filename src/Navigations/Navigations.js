import {View, Text} from 'react-native';
import React from 'react';

// const Navigations = () => {
//   return (
//     <View>
//       <Text>Navigations</Text>
//     </View>
//   )
// }

// export default Navigations

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SettingsScreen from '../Screens/SettingsScreen';
import Home from '../Screens/Home';
import HomeBottomTabs from './HomBottomTabs';
import CardScreen from '../Screens/CardScreen';
import DayScreen from '../Screens/DayScreen';
import MentalHealthScreen from '../Screens/MentalHealthScreen';
import WorkoutScreen from '../Screens/WorkoutScreen';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeBottomTabs"
        screenOptions={{headerShown: false, headerBackTitleVisible: true}}>
        <Stack.Screen name="Home" component={HomeBottomTabs} />
        <Stack.Screen name="settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;

export const HomeScreenWithBottomTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MentalHealthScreen" component={MentalHealthScreen} />
      <Stack.Screen name="MainHome" component={Home} />
      <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
      <Stack.Screen name="DayScreen" component={DayScreen} />
    </Stack.Navigator>
  );
};
