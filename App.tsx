/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import Navigations from './src/Navigations/Navigations';
import AllContexts from './src/Context';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

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
