import React from 'react';
import Modal from 'react-native-modal';
import {View, StyleSheet, Platform, ActivityIndicator} from 'react-native';
import {WP, HP, colors} from '../../services';

export const Loader = ({loading}) => {
  return (
    <Modal
      avoidKeyboard={true}
      isVisible={loading}
      hasBackdrop={false}
      style={styles.container}>
      <View style={styles.alert}>
        <ActivityIndicator
          size={'large'}
          color={colors.p1}
          animating={loading}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 0,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  alert: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderRadius: WP('1'),
    height: HP('15'),
    width: WP('30'),
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 1,
      },
    }),
  },
});
