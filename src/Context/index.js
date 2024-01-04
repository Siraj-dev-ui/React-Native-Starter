import {View, Text} from 'react-native';
import React from 'react';
import {ThemeProvider} from './ThemeContext';

const AllContexts = ({children}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AllContexts;
