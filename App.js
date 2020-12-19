import React, {Component} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {AppContainer} from './src/routes';
import {colors} from './src/services';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={styles.safeArea}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />
            <AppContainer />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

export const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.white},
});
