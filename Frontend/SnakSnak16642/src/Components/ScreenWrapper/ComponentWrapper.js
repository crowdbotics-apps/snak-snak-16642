import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

import {useTheme} from 'react-native-paper';

import ComponentHeader from './ComponentHeader';
import LinearGradient from 'react-native-linear-gradient';
const ScreenWrapper = ({
  children,
  componentTitle,
  radius,
  marginTop = 0,
  hasBottomBar,
  componentIcon,
}) => {
  const {colors} = useTheme();
  // console.log(radius);
  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.95)']}
      style={[
        {backgroundColor: colors.background},
        styles.container,
        !radius
          ? {borderRadius: 0}
          : {
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
            },
        {
          marginTop, //paddingBottom: hasBottomBar ? 75 : 0
        },
      ]}>
      {Boolean(componentTitle) && (
        <ComponentHeader title={componentTitle} componentIcon={componentIcon} />
      )}
      {children}
    </LinearGradient>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // marginTop: -30,
    paddingTop: 28,
    paddingHorizontal: 0,
    // paddingBottom: 100,
  },
});
