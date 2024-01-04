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
import HomeBottomTabs from './HomBottomTabs';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeBottomTabs"
        screenOptions={{headerShown: false, headerBackTitleVisible: true}}>
        <Stack.Screen name="HomeBottomTabs" component={HomeBottomTabs} />
        <Stack.Screen name="settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
