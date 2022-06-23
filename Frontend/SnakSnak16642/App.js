import React from 'react';
import Navigation from './src/Navigation';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    white: '#FFFFFFF2',
    primary: '#800203',
    primaryLite: '#FF5757',
    secondary: '#FF5F4B',
    textPrimary: '#988053',
    textWhite: '#E1E1E1',
    primaryText: '#7D0102',
    secondaryText: '#E1E1E1',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
};

export default App;
