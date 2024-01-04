/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigations from './src/Navigations/Navigations';
import AllContexts from './src/Context';
import {useColors} from './src/Hooks';

function App(): JSX.Element {
  return (
    <AllContexts>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <Navigations />
      </SafeAreaView>
    </AllContexts>
  );
}

export default App;
