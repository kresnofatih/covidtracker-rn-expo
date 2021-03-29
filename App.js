import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {themeColors} from './ThemeColors'
import Navigator from './routes/SplashStack'

export default function App() {
  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.clearWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
