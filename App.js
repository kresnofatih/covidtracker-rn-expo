import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './screens/Splash';
import {themeColors} from './ThemeColors'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Splash/>
    </View>
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
