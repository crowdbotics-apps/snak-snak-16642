import React, {Component} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {AppContainer} from './src/routes';
import {colors} from './src/services';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <AppContainer />
      </SafeAreaView>
    );
  }
}

export const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.white},
});
