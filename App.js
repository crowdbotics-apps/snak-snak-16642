import React, {Component} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Alert} from 'react-native';
import {AppContainer} from './src/routes';
import {colors} from './src/services';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';
// import OneSignal from 'react-native-onesignal';

console.disableYellowBox = true;

export default class App extends Component {
  // async componentDidMount() {
  //   // / O N E S I G N A L   S E T U P /
  //   OneSignal.setAppId('e304774b-9c6f-434e-913b-ba24addb5246');
  //   OneSignal.setLogLevel(6, 0);
  //   OneSignal.setRequiresUserPrivacyConsent(false);
  //   OneSignal.promptForPushNotificationsWithUserResponse(response => {
  //     console.log('[OneSignal-response]', response);
  //   });
  //   const deviceState = await OneSignal.getDeviceState();
  //   console.log('[device-state]', deviceState);

  //   /* O N E S I G N A L  H A N D L E R S */
  //   OneSignal.setNotificationWillShowInForegroundHandler(notifReceivedEvent => {
  //     console.log("OneSignal: notification will show in foreground:", notifReceivedEvent);
  //     let notif = notifReceivedEvent.getNotification();
  //     console.log('[get-notif-data]', notif);
  //     const button1 = {
  //         text: "Cancel",
  //         onPress: () => { notifReceivedEvent.complete(); },
  //         style: "cancel"
  //     };

  //     const button2 = { text: "Complete", onPress: () => { notifReceivedEvent.complete(notif); }};

  //     Alert.alert("Complete notification?", "Test", [ button1, button2], { cancelable: true });
  //   });
  //   OneSignal.setNotificationOpenedHandler(notification => {
  //       console.log("OneSignal: notification opened:", notification);
  //   });

  // }
  
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
